'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function HeroMaisonConnectee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ['start start', 'end end']
  })

  // Image Fade: opacity 1 to 0 between scroll 0 to 0.5
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0], { ease: 'linear' })
  
  // Text Descent: translate from 0 to 600px over full scroll range (0 to 1)
  const textY = useTransform(scrollYProgress, [0, 1], [0, 600], { ease: 'linear' })

  return (
    <>
      {/* Scroll Track Container (200vh) */}
      <div
        ref={containerRef}
        style={{ height: '200vh', position: 'relative' }}
        className="bg-black"
      >
        {/* Sticky Container (stays in viewport while scrolling through 200vh) */}
        <div 
          style={{ 
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden'
          }}
          className="bg-black"
        >
          {/* Base Layer: Black Background */}
          <div className="absolute inset-0 bg-black" />

          {/* Middle Layer: Image with fade */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: imageOpacity }}
          >
            <Image
              src="/images/villa-prestige.jpg"
              alt="Villa de prestige équipée en domotique KNX par Domotus Maroc"
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </motion.div>

          {/* Top Layer: Typography with extended descent */}
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
                    fontSize: 'clamp(3rem, 20vw, 25vw)',
                    letterSpacing: '-0.04em',
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    fontWeight: 900,
                  }}
                >
                  Smarthome
                </h1>

                {/* Copyright Symbol (moves with text) */}
                <div className="absolute -bottom-6 -right-12 text-white/40 text-4xl">©</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
