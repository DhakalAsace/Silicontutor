'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Lazy load Framer Motion components
const MotionSpan = dynamic(
  () =>
    import('framer-motion').then((mod) => {
      const { motion } = mod
      return motion.span
    }),
  { ssr: false }
)

const AnimatePresence = dynamic(() => import('framer-motion').then((mod) => mod.AnimatePresence), {
  ssr: false,
})

const topics = ['Machine Learning', 'Data Science', 'AI Engineering']

export function ClientSideAnimation() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setCurrentTopicIndex((prev) => (prev + 1) % topics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Return null during SSR
  if (!isClient) {
    return null
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <div className="mt-2 h-12">
        <AnimatePresence mode="wait">
          <MotionSpan
            key={currentTopicIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl"
          >
            {topics[currentTopicIndex]}
          </MotionSpan>
        </AnimatePresence>
      </div>
    </div>
  )
}
