import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()
  
  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Email is required and must be valid' },
      { status: 400 }
    )
  }

  try {
    const SENDPULSE_USER_ID = process.env.SENDPULSE_USER_ID
    const SENDPULSE_SECRET = process.env.SENDPULSE_SECRET

    if (!SENDPULSE_USER_ID || !SENDPULSE_SECRET) {
      console.error('SendPulse credentials are not configured')
      return NextResponse.json(
        { error: 'Newsletter service is not properly configured' },
        { status: 500 }
      )
    }

    // First, get access token
    const tokenResponse = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: SENDPULSE_USER_ID,
        client_secret: SENDPULSE_SECRET,
      }),
    })

    if (!tokenResponse.ok) {
      const tokenError = await tokenResponse.text()
      console.error('SendPulse token error:', tokenError)
      throw new Error('Failed to authenticate with newsletter service')
    }

    const { access_token } = await tokenResponse.json()
    
    if (!access_token) {
      console.error('No access token received from SendPulse')
      throw new Error('Failed to authenticate with newsletter service')
    }

    // Get list of address books to find the correct one
    const booksResponse = await fetch('https://api.sendpulse.com/addressbooks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
    })

    if (!booksResponse.ok) {
      console.error('Failed to fetch address books:', await booksResponse.text())
      throw new Error('Failed to access mailing lists')
    }

    const books = await booksResponse.json()
    const myEmailsBook = books.find((book: any) => book.name === 'My emails')
    
    if (!myEmailsBook) {
      console.error('Could not find My emails address book')
      throw new Error('Mailing list not found')
    }

    // Add email to the My emails address book
    const response = await fetch(`https://api.sendpulse.com/addressbooks/${myEmailsBook.id}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        emails: [{ email }],
      }),
    })

    if (!response.ok) {
      const subscribeError = await response.text()
      console.error('SendPulse subscription error:', subscribeError)
      throw new Error('Failed to add email to newsletter')
    }

    return NextResponse.json({ message: 'Successfully subscribed to the newsletter!' })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to subscribe to the newsletter' },
      { status: 500 }
    )
  }
} 