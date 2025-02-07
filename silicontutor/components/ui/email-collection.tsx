"use client"

import React, { useState } from 'react'

export function EmailCollection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (!response.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl text-center font-light text-gray-900 dark:text-white">
          Join our waitlist
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-light">
          Get early access to Silicontutor
        </p>
        
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="flex gap-x-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="min-w-0 flex-auto rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2.5 text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 font-light dark:placeholder-gray-400"
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
            <p className="mt-4 text-sm text-green-600 dark:text-green-400 font-light">Thanks for joining our waitlist!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400 font-light">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
} 