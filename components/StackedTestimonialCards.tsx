'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (testimonials.length === 0) return null

  return (
    <section className="py-12 lg:py-16" style={{ backgroundColor: "#000000" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-white/70">Témoignages</span>
          </div>
          <h2 className="font-black text-3xl lg:text-4xl text-white" style={{ letterSpacing: '-0.02em' }}>
            CE QUE DISENT<br />NOS <span style={{ color: '#efd555' }}>CLIENTS.</span>
          </h2>
        </div>

        {/* Testimonials Grid - Stack on mobile, horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col h-full"
            >
              <div 
                className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-white border border-white/10 transition-all duration-300 flex flex-col h-full"
                style={{
                  transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === index ? '0 16px 48px rgba(239, 213, 85, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 lg:h-64 overflow-hidden bg-gray-200 flex-shrink-0 border-4 border-white rounded-lg lg:rounded-xl m-3 lg:m-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* Segment Badge */}
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4 px-2 lg:px-3 py-1 bg-black/60 backdrop-blur rounded-full">
                    <span className="text-[10px] lg:text-xs font-bold text-[#efd555] uppercase tracking-widest">{testimonial.segment}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 lg:p-6 flex flex-col gap-4 lg:gap-5 flex-grow">
                  {/* Yellow Accent Line */}
                  <div className="w-6 h-1" style={{ backgroundColor: "#efd555" }} />

                  {/* Citation */}
                  <p className="text-sm lg:text-base leading-relaxed text-black font-medium italic line-clamp-4">
                    "{testimonial.description}"
                  </p>

                  {/* Author */}
                  <div className="pt-3 lg:pt-4 border-t border-gray-200 mt-auto">
                    <h3 className="font-black text-black text-xs lg:text-sm uppercase tracking-wider mb-1">
                      {testimonial.firstName}
                    </h3>
                    <p className="text-[11px] lg:text-xs text-gray-600 uppercase tracking-widest line-clamp-2">
                      {testimonial.title}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[11px] lg:text-xs font-bold text-black uppercase tracking-wider hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>Lire l'histoire</span>
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
