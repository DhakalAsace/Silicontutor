import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Check if the request is for a static asset
  const isStaticAsset = /\.(js|css|svg|jpg|png|woff|woff2|ttf|eot)$/.test(request.nextUrl.pathname)

  // Add Vary header to ensure proper caching with different Accept headers
  response.headers.set('Vary', 'Accept-Encoding')

  // Set strict transport security
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

  // Cache static assets for 1 year
  if (isStaticAsset) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

// Configure to match specific paths
export const config = {
  matcher: [
    // Match all static assets
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
