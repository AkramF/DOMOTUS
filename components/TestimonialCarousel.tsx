'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={`${t.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 min-w-[45%] lg:min-w-[45%] md:min-w-[60%] sm:min-w-full"
          >
            <div className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row h-full transition-all duration-500">
              {/* Left Content Section */}
              <div className="flex flex-col justify-between p-6 lg:p-8 w-full lg:w-3/5 bg-white">
                {/* Badge avec icône dorée */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#efd555' }} />
                  </div>
                </div>

                {/* Titre et description */}
                <div className="mb-6 flex-1">
                  <h3 className="text-black font-bold mb-3" style={{ fontSize: '18px', lineHeight: '26px' }}>
                    {t.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed" style={{ fontSize: '14px', lineHeight: '20px' }}>
                    {t.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <Link
                  href="#"
                  className="text-black font-semibold underline hover:text-black/70 transition-colors w-fit"
                  style={{ fontSize: '12px', letterSpacing: '0.12em' }}
                >
                  {t.firstName.toUpperCase()}
                </Link>
              </div>

              {/* Right Image Section */}
              <div className="relative w-full lg:w-2/5 h-64 lg:h-auto lg:min-h-96 flex-shrink-0">
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-all duration-300 group focus-ring"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-white group-hover:text-white/80" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-all duration-300 group focus-ring"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-white group-hover:text-white/80" />
        </button>
      </div>
    </div>
  )
}
