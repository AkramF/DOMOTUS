'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Esthétique sans compromis',
    description: 'Vos équipements se fondent dans l\'architecture. Pas de câbles visibles, pas d\'encombrement : seulement le design épuré que vous avez rêvé.',
  },
  {
    id: 2,
    icon: Brain,
    title: 'Intelligence qui anticipe',
    description: 'Votre maison apprend vos habitudes et ajuste confort, éclairage et température avant même que vous n\'en ayez besoin.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Efficacité énergétique maximale',
    description: 'Réduisez vos factures de 22 à 40% grâce à l\'optimisation intelligente des systèmes en temps réel, 24/7.',
  },
]

export default function SmartHomeSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header - Left Aligned */}
        <div className="mb-16 lg:mb-20 max-w-3xl">
          {/* Overline with Square Bullet */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="w-3 h-3 bg-black flex-shrink-0" aria-hidden="true"></div>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#000000", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              PHILOSOPHIE
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black uppercase leading-tight text-black text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Quand la technologie<br />
            <span className="italic font-light text-black">s&apos;efface.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-black/70 leading-relaxed max-w-2xl"
          >
            L&apos;invisible qui magnifie. Votre maison ne doit jamais montrer son intelligence — elle doit la vivre. Chaque système travaille en harmonie silencieuse, créant une expérience si naturelle que vous oubliez qu&apos;elle existe.
          </motion.p>
        </div>

        {/* Values Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative p-8 rounded-xl bg-black/2 border border-black/8 transition-all duration-500 hover:border-black/20 hover:shadow-lg hover:-translate-y-1">
                {/* Content */}
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/8 group-hover:bg-black/12 transition-colors duration-300">
                    <value.icon size={24} className="text-black" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold uppercase text-black text-sm leading-tight tracking-wide">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-black/70 leading-relaxed">
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-black/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-sm text-black/60 mb-2">Découvrez comment ça marche</p>
              <h3 className="font-bold text-lg text-black">Explorer nos expertises</h3>
            </div>
            <Link
              href="/maison-connectee"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-black/25 transition-all duration-300 group whitespace-nowrap"
            >
              <span>En savoir plus</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
