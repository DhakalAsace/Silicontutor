// Server Component
import React from 'react'
import { ClientSideAnimation } from './client-side-animation'

const topics = ['Machine Learning', 'Data Science', 'AI Engineering']

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-normal tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Books. Structure. Practice. Mastery
        </h1>
        {/* Pre-rendered text for fast LCP */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Our AI transforms technical books into structured learning paths with guided practice and
          real-world projects — your clear route to mastering{' '}
          <noscript>Machine Learning, Data Science, and AI Engineering</noscript>
        </p>
        <ClientSideAnimation />
      </div>
    </section>
  )
}
