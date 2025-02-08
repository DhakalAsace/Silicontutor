'use client'

import React, { useState } from 'react'

interface EmailCollectionProps {
  className?: string
}

export function EmailCollection({ className = '' }: EmailCollectionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section
      className={`bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-800 dark:to-gray-900 ${className}`}
    >
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-center text-4xl font-light text-gray-900 dark:text-white md:text-5xl">
          Join our waitlist
        </h2>
        <p className="mt-4 text-lg font-light text-gray-600 dark:text-gray-300">
          Get early access to Silicontutor
        </p>
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="flex justify-center gap-x-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="min-w-0 flex-auto rounded-md border border-gray-300 bg-white px-4 py-2.5 font-light text-gray-900 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-none rounded-md bg-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-sm font-light text-green-600 dark:text-green-400">
              Thanks for joining our waitlist!
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-light text-red-600 dark:text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default EmailCollection
