// Server Component
import React from 'react'
import { ClientSideAnimation } from './client-side-animation'

const topics = ["Machine Learning", "Data Science", "AI Engineering"]

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-gray-900 dark:text-white mb-8">
          Books. Structure. Practice. Mastery
        </h1>
        {/* Pre-rendered text for fast LCP */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our AI transforms technical books into structured learning paths with guided practice and real-world projects — your clear route to mastering{' '}
          <noscript>Machine Learning, Data Science, and AI Engineering</noscript>
        </p>
        <ClientSideAnimation />
      </div>
    </section>
  )
} 