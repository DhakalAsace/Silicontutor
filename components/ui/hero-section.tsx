"use client"

import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const topics = ["Machine Learning", "Data Science", "AI Engineering"]

export function HeroSection() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopicIndex((prev) => (prev + 1) % topics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-gray-900 dark:text-white mb-8">
          Books. Structure. Practice. Mastery
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
          Our AI transforms technical books into structured learning paths with guided practice and real-world projects — your clear route to mastering{' '}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center">
          <div className="h-12 mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTopicIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent inline-block"
              >
                {topics[currentTopicIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
} 