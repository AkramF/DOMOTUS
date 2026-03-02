'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string
  title: string
  description: string
  image: string
  imageAlt: string
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
            className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row transition-all duration-500"
          >
            {/* Left content — 40% */}
            <div className="flex flex-col justify-between p-8 lg:p-10 w-full lg:w-2/5">
              {/* Badge circle */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#efd555" }} />
                </div>
              </div>

              {/* Title and description */}
              <div className="mb-8 flex-1">
                <h3 className="text-black font-bold text-lg mb-3" style={{ fontSize: "20px", lineHeight: "28px" }}>
                  {t.title}
                </h3>
                <p className="text-black/70 leading-relaxed" style={{ fontSize: "14px", lineHeight: "20px" }}>
                  {t.description}
                </p>
              </div>

              {/* Learn more link */}
              <Link
                href="#"
                className="text-black font-semibold underline hover:text-black/70 transition-colors w-fit"
                style={{ fontSize: "12px", letterSpacing: "0.12em" }}
              >
                LEARN MORE
              </Link>
            </div>

            {/* Right image — 60% */}
            <div className="relative w-full lg:w-3/5 h-64 lg:h-auto lg:min-h-96">
              <Image
                src={t.image}
                alt={t.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors group focus-ring"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={20} className="text-black" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors group focus-ring"
          aria-label="Next testimonials"
        >
          <ChevronRight size={20} className="text-black" />
        </button>
      </div>
    </div>
  )
}
