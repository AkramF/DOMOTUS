'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  firstName: string
  title: string
  description: string
  image: string
  imageAlt: string
  segment: string
}

export default function StackedTestimonialCards({ testimonials }: { testimonials: Testimonial[] }) {
  const [isHovering, setIsHovering] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  if (testimonials.length === 0) return null

  // Get center, left, and right cards
  const centerCard = testimonials[activeIndex]
  const leftCard = testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length]
  const rightCard = testimonials[(activeIndex + 1) % testimonials.length]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-24">
      <div
        className="relative h-[600px] flex items-center justify-center perspective"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left Card — Behind, Tilted -12deg */}
        <motion.div
          animate={{
            x: isHovering ? -120 : -60,
            rotateZ: -12,
            opacity: 0.7,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute w-96 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg p-8">
            {/* Image */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={leftCard.image}
                alt={leftCard.imageAlt}
                fill
                className="object-cover"
                sizes="384px"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#efd555' }} />
              </div>
              <h3 className="font-bold text-lg text-black leading-tight">{leftCard.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{leftCard.description}</p>
              <Link href="#" className="text-xs font-semibold text-black uppercase tracking-wider hover:opacity-70">
                {leftCard.firstName.toUpperCase()}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Center Card — Front, Lifted on Hover */}
        <motion.div
          animate={{
            y: isHovering ? -20 : 0,
            scale: isHovering ? 1.02 : 1,
            zIndex: 10,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute w-96"
        >
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl p-8">
            {/* Image */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={centerCard.image}
                alt={centerCard.imageAlt}
                fill
                className="object-cover"
                sizes="384px"
                priority
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#efd555' }} />
              </div>
              <h3 className="font-bold text-lg text-black leading-tight">{centerCard.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{centerCard.description}</p>
              <Link href="#" className="text-xs font-semibold text-black uppercase tracking-wider hover:opacity-70">
                {centerCard.firstName.toUpperCase()}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Card — Behind, Tilted +12deg */}
        <motion.div
          animate={{
            x: isHovering ? 120 : 60,
            rotateZ: 12,
            opacity: 0.7,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute w-96 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg p-8">
            {/* Image */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={rightCard.image}
                alt={rightCard.imageAlt}
                fill
                className="object-cover"
                sizes="384px"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#efd555' }} />
              </div>
              <h3 className="font-bold text-lg text-black leading-tight">{rightCard.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{rightCard.description}</p>
              <Link href="#" className="text-xs font-semibold text-black uppercase tracking-wider hover:opacity-70">
                {rightCard.firstName.toUpperCase()}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Dots — Centered Below */}
      <div className="mt-12 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
