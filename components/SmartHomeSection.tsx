'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    id: 1,
    title: 'Esthétique sans compromis.',
    description: 'Vos équipements se fondent dans l\'architecture. Pas de câbles, pas d\'encombrement : seulement le design.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 3v18M15 3v18" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Maîtrise absolue.',
    description: 'Une interface unique et élégante pour tout piloter. La complexité disparaît au bout de vos doigts.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v8" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'L\'habitat qui vous devance.',
    description: 'Votre maison apprend vos habitudes. Elle ajuste le confort avant même que vous n\'y pensiez.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2M18 8l-1 1M6 8l1 1" />
      </svg>
    )
  },
]

export default function SmartHomeSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header - Left Aligned */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          {/* Overline with Square Bullet */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <div className="w-2.5 h-2.5 bg-black flex-shrink-0" aria-hidden="true"></div>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#000000" }}>
              PHILOSOPHIE
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-black text-4xl lg:text-5xl text-black leading-tight mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            L&apos;Équilibre Absolu
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base lg:text-lg text-black leading-relaxed"
          >
            Quand la technologie s&apos;efface, l&apos;expérience commence.
          </motion.p>
        </div>

        {/* Values Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative p-6 lg:p-7 rounded-2xl transition-all duration-500 hover:shadow-lg hover:shadow-black/8 hover:-translate-y-0.5">
                {/* Subtle border on hover */}
                <div className="absolute inset-0 border border-foreground/0 group-hover:border-foreground/10 rounded-2xl transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div className="w-12 h-12 text-black group-hover:text-black transition-colors duration-300">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-lg lg:text-xl text-black leading-tight group-hover:text-black transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[14px] text-black leading-relaxed group-hover:text-black transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-14 pt-8 lg:pt-10 border-t border-foreground/10 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-sans font-bold rounded-full hover:shadow-lg hover:shadow-black/25 transition-all duration-300 group"
          >
            <span>Explorer les services</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
