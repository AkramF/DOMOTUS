'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function HeroMaisonConnectee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end center'] })

  // Synchronized transformations: image opacity and text translation on same timeline
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 400])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black pt-24"
        aria-label="Smarthome - Domotique intelligente"
      >
        {/* Base Layer: Black Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Middle Layer: Image with synchronized scroll opacity */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: imageOpacity }}
        >
          <Image
            src="/images/villa-prestige.jpg"
            alt="Villa de prestige équipée en domotique KNX par Domotus Maroc"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </motion.div>

        {/* Top Layer: Typography with synchronized translation */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ y: textY }}
        >
          <div className="relative text-center">
            {/* Main Title Only */}
            <div className="relative">
              <h1
                className="font-black text-white leading-none text-balance"
                style={{
                  fontSize: 'clamp(3rem, 20vw, 25vw)',
                  letterSpacing: '-0.04em',
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  fontWeight: 900,
                }}
              >
                Smarthome
              </h1>

              {/* Copyright Symbol */}
              <div className="absolute -bottom-6 -right-12 text-white/40 text-4xl">©</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spacer for scroll container */}
      <div className="h-96 bg-black" />
    </>
  )
}
