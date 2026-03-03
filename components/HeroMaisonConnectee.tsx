'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroMaisonConnectee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Background opacity: fully visible at 0, fully transparent at 400px
  const backgroundOpacity = useTransform(scrollY, [0, 400], [1, 0])
  
  // Text opacity and position
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const textY = useTransform(scrollY, [0, 400], [0, 50])

  return (
    <>
      {/* ── HERO with Scroll Animation ── */}
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
        aria-label="Maison Connectée - Domotique intelligente"
      >
        {/* Background Image Container */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ opacity: backgroundOpacity }}
        >
          <Image
            src="/images/villa-prestige.jpg"
            alt="Villa de prestige équipée en domotique KNX par Domotus Maroc"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Black Background Layer (revealed on scroll) */}
        <div className="absolute inset-0 bg-black" />

        {/* Gradient Overlays */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%))" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Top Badge */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            style={{ opacity: textOpacity }}
          >
            <span className="block w-8 h-px bg-white/40" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#efd555] font-medium">
              Domotique pour habitat d'exception — Maroc
            </p>
            <span className="block w-8 h-px bg-white/40" aria-hidden="true" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="font-black uppercase leading-none text-white text-balance mb-6"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              letterSpacing: "-0.03em",
              opacity: textOpacity,
              y: textY,
            }}
          >
            Maison{" "}
            <span className="block">Connectée</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[15px] text-white/80 max-w-lg text-balance leading-relaxed mb-12"
            style={{ opacity: textOpacity, y: textY }}
          >
            L'intelligence au service de votre confort. Votre espace de vie comprend vos habitudes, ressent vos besoins et adapte votre environnement en temps réel. Sans effort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            style={{ opacity: textOpacity, y: textY }}
          >
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-3 bg-[#efd555] px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#efd555]/85 text-black"
            >
              Démarrer mon étude personnalisée <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link
              href="#modes-vie"
              className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/70 hover:border-[#efd555] hover:text-[#efd555] transition-all duration-300"
            >
              Explorer les modes de vie <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-white/40 text-[11px] uppercase tracking-widest mb-3">Scroll</p>
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── TRANSITION SECTION (Black background with title) ── */}
      <section className="relative py-0 bg-black min-h-screen flex items-center justify-center" aria-label="Transition">
        <motion.h2
          className="font-black uppercase leading-none text-white text-center text-balance"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Maison Connectée{" "}
          <span className="italic text-white/50">
            L'expérience redéfinie
          </span>
        </motion.h2>
      </section>
    </>
  )
}
