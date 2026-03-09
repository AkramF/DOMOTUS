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
    <section className="relative py-32 lg:py-48 bg-white z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header - Centered */}
        <div className="text-center mb-20 lg:mb-32 max-w-3xl mx-auto">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block font-sans text-[12px] uppercase tracking-[0.2em] text-black font-semibold">
              Philosophie
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-black text-5xl lg:text-6xl text-black text-balance leading-tight mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            L&apos;Équilibre Absolu
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-black leading-relaxed max-w-2xl mx-auto"
          >
            Quand la technologie s&apos;efface, l&apos;expérience commence.
          </motion.p>
        </div>

        {/* Values Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
                {/* Subtle border on hover */}
                <div className="absolute inset-0 border border-foreground/0 group-hover:border-foreground/10 rounded-2xl transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 text-black group-hover:text-black transition-colors duration-300">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-xl lg:text-2xl text-black leading-tight group-hover:text-black transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[15px] text-black leading-relaxed group-hover:text-black transition-colors duration-300">
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
          className="text-center pt-12 border-t border-foreground/10"
        >
          <p className="font-sans text-[16px] text-black mb-8">
            Prêt à vivre l&apos;équilibre parfait entre technologie et confort ?
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white font-sans font-bold rounded-full hover:shadow-xl hover:shadow-foreground/20 transition-all duration-300 group"
          >
            <span>Explorer les services</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
