'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function HeroMaisonConnectee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end center'] })

  // Image opacity: 1 at start, 0 at 70% scroll
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Text stays fixed until 80%, then translates down
  const textY = useTransform(scrollYProgress, [0.8, 1], [0, 200])

  // Subtitle appears as image fades
  const subtitleOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1])

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

        {/* Middle Layer: Image with scroll opacity */}
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

        {/* Top Layer: Typography with sticky behavior */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ y: textY }}
        >
          <div className="relative text-center">
            {/* Main Title */}
            <div className="relative">
              <h1
                className="font-black text-white leading-none text-balance"
                style={{
                  fontSize: 'clamp(4rem, 25vw, 35vw)',
                  letterSpacing: '-0.04em',
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  fontWeight: 900,
                }}
              >
                Smarthome
              </h1>

              {/* Copyright Symbol */}
              <div className="absolute -bottom-4 -right-8 text-white/40 text-3xl">©</div>
            </div>

            {/* Subtitle (appears as image fades) */}
            <motion.p
              className="mt-12 text-white/70 text-base max-w-md mx-auto leading-relaxed"
              style={{
                opacity: subtitleOpacity,
              }}
            >
              L'intelligence au service de votre confort. Une maison qui vous comprend.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll Indicator (fades out as user scrolls) */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
          }}
        >
          <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center pt-2 mx-auto"
          >
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Spacer for scroll container */}
      <div className="h-96 bg-black" />
    </>
  )
}
