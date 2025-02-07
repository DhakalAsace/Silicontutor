"use client"

import React from 'react';
import Image from 'next/image';

interface Innovator {
  name: string;
  beforeStory: string;
  afterStory: string;
  image: string;
}

const innovators: Innovator[] = [
  {
    name: 'Elon Musk',
    beforeStory: 'Elon spent sleepless nights poring over dense Soviet rocket manuals, piecing together equations line by line.',
    afterStory: 'Our AI would instantly highlight key formulas, transforming weeks of manual work into efficient learning.',
    image: '/elon.png'
  },
  {
    name: 'Bill Gates',
    beforeStory: 'Bill tirelessly studied programming guides, debugging endlessly on his own to master the craft.',
    afterStory: 'With our platform, complex concepts break down into clear, actionable steps powered by machine learning.',
    image: '/bill.png'
  },
  {
    name: 'Andrew Ng',
    beforeStory: 'Andrew sifted through thousands of technical papers and textbooks, manually connecting theories to applications.',
    afterStory: 'Our AI creates structured learning paths with hands-on projects, guiding every step of the journey.',
    image: '/andrew.png'
  }
];

export function InnovatorsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-20 font-light dark:text-white">
          Great Books <span className="text-gray-400 mx-2">+</span> 
          <span className="bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">AI Superpowers</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {innovators.map((innovator) => (
            <div 
              key={innovator.name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col min-h-[600px] relative overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-50 dark:from-pink-900/20 to-transparent opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <Image
                    src={innovator.image}
                    alt={innovator.name}
                    width={160}
                    height={160}
                    className="rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority
                  />
                  <div className="absolute -top-4 right-0">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-4 py-2 rounded-full text-sm shadow-lg">
                      What if?
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl text-center mb-8 font-light tracking-tight dark:text-white">
                {innovator.name}
              </h3>
              
              <div className="flex flex-col flex-grow space-y-8 relative">
                {/* Before Story */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-colors duration-300">
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                    {innovator.beforeStory}
                  </p>
                </div>
                
                {/* Divider with Icon */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent" />
                  <div className="bg-white dark:bg-gray-800 px-4 relative">
                    <svg className="w-6 h-6 text-pink-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                
                {/* After Story */}
                <div className="bg-gradient-to-br from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-800 rounded-xl p-6 border border-pink-100 dark:border-pink-900/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500 text-lg leading-relaxed font-medium">
                    {innovator.afterStory}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 