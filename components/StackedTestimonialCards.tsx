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
    <section className="py-8 lg:py-12" style={{ backgroundColor: "#000000" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Testimonials Horizontal Scroll */}
        <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-6 lg:-mx-10 px-6 lg:px-10 scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-6 lg:gap-8 min-w-min">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex-shrink-0 w-96"
              >
                <div 
                  className="relative overflow-hidden rounded-2xl bg-white border border-white/10 transition-all duration-300 h-full flex flex-col"
                  style={{
                    transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredIndex === index ? '0 20px 60px rgba(239, 213, 85, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-gray-200 flex-shrink-0 border-4 border-white rounded-2xl m-4">
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
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded-full">
                      <span className="text-xs font-bold text-[#efd555] uppercase tracking-widest">{testimonial.segment}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col gap-6 flex-grow">
                    {/* Yellow Accent Line */}
                    <div className="w-8 h-1" style={{ backgroundColor: "#efd555" }} />

                    {/* Citation */}
                    <p className="text-base leading-relaxed text-black font-medium italic">
                      "{testimonial.description}"
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-gray-200 mt-auto">
                      <h3 className="font-black text-black text-sm uppercase tracking-wider mb-1">
                        {testimonial.firstName}
                      </h3>
                      <p className="text-xs text-gray-600 uppercase tracking-widest">
                        {testimonial.title}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <Link 
                      href="#" 
                      className="inline-flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider hover:gap-3 transition-all duration-300 group/link"
                    >
                      <span>Lire l'histoire</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
