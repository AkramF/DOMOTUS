'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 2 ? 0 : prev + 1))
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Carousel cards — 2 visible at a time */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {visibleTestimonials.map((t) => (
          <div
            key={`${t.name}-${currentIndex}`}
            className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row transition-all duration-500 h-48 lg:h-56"
          >
            {/* Right image — 1/4 of space with white border */}
            <div className="relative w-1/4 lg:w-1/4 h-full bg-white p-2 flex-shrink-0">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Left content — 3/4 of space */}
            <div className="flex flex-col justify-between p-4 lg:p-6 w-3/4 lg:w-3/4">
              {/* Segment tag */}
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-black/50 block mb-1">
                  {t.segment}
                </span>
              </div>

              {/* Title and description */}
              <div className="mb-3 flex-1">
                <h3 className="text-black font-bold text-sm mb-2" style={{ fontSize: "16px", lineHeight: "24px" }}>
                  {t.title}
                </h3>
                <p className="text-black/70 leading-tight text-xs" style={{ fontSize: "12px", lineHeight: "16px" }}>
                  {t.description}
                </p>
              </div>

              {/* First name link */}
              <Link
                href="#"
                className="text-black font-semibold underline hover:text-black/70 transition-colors w-fit"
                style={{ fontSize: "11px", letterSpacing: "0.12em" }}
              >
                {t.firstName.toUpperCase()}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors group focus-ring"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={18} className="text-black" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors group focus-ring"
          aria-label="Next testimonials"
        >
          <ChevronRight size={18} className="text-black" />
        </button>
      </div>
    </div>
  )
}
