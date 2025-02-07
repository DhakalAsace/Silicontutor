"use client"

import React from 'react'

export function ComparisonTable() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 text-center mb-12">Traditional Book vs Silicontutor</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Traditional Book Column */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <svg className="w-8 h-8 mr-3 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Traditional Book</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Static reading experience</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">No guidance on importance</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Solo learning experience</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Complex mathematical notation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">No progress insights</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Passive content consumption</span>
            </li>
          </ul>
        </div>

        {/* Silicontutor Column */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-4 border-pink-500">
          <div className="flex items-center justify-center mb-8">
            <svg className="w-8 h-8 mr-3 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-semibold text-pink-500">Silicontutor</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Interactive learning environment</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">AI highlights key concepts</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">24/7 AI tutor assistance</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Visual step-by-step breakdowns</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Smart learning analytics</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Active learning with exercises</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 