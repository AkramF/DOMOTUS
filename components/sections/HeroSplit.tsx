"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const PARTNERS = [
  "UBIQUITI", "AQARA", "GOVEE", "LEGRAND", "SOMFY", "SCHNEIDER", "KNX", "CRESTRON", "LUTRON",
  "UBIQUITI", "AQARA", "GOVEE", "LEGRAND", "SOMFY", "SCHNEIDER", "KNX", "CRESTRON", "LUTRON",
];

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      aria-label="Domotus — Maison connectée au Maroc"
    >
      {/* Background image wrapper with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* Background image — WebP with fallback, optimized for performance */}
        <Image
          src="/images/hero-bg.webp"
          alt="Villa intelligente équipée par Domotus au Maroc"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay — layered for depth and text readability */}
      <div className="absolute inset-0 bg-background/65" />
      {/* Radial vignette — darkens edges, brightens center slightly */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, oklch(0 0 0 / 0.45) 100%)" }} />
      {/* Bottom fade to black */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      {/* ── Main content — vertically centered, padded for navbar top + ticker bottom ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">

        {/* Overline — keyword-rich for SEO, visually de-emphasised */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-10 h-px bg-foreground/30" aria-hidden="true" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium select-none">
            Intégration domotique certifiée — Maroc
          </p>
          <span className="block w-10 h-px bg-foreground/30" aria-hidden="true" />
        </motion.div>

        {/* H1 — single semantic tag, two visual lines — NO ANIMATION for LCP optimization */}
        <h1
          className="font-black uppercase leading-[0.88] text-foreground text-center"
          style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
        >
          <span className="block">La signature</span>
          <span className="block italic text-foreground/65">technologique.</span>
        </h1>

        {/* Subheading — benefit-led — NO ANIMATION for LCP optimization */}
        <p className="mt-7 text-sm md:text-[15px] text-foreground/60 leading-relaxed max-w-lg text-balance">
          L&apos;expérience de vos espaces, réinventée. Là où la technologie crée confort, sécurité et sérénité, Domotus transforme maisons et immeubles en écosystèmes intelligents.
        </p>

        {/* CTAs — B2C Primary + B2B Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/maison-connectee"
            className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85"
            style={{ color: "#0a0a0a" }}
          >
            Votre maison connectée
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
          <Link
            href="/architectes"
            className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Espace Professionnels
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex items-center gap-6 text-[11px] text-foreground/35 uppercase tracking-[0.12em]"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Certifié Multi Protocoles
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            +150 projets
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            SAV 7/7
          </span>
        </motion.div>
      </div>

      {/* ── Partners ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
        aria-label="Marques partenaires certifiées"
      >
        <div className="h-px w-full bg-white/8" />
        <div className="bg-background/80 backdrop-blur-sm py-4 flex items-center">
          <div className="flex items-center animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
            {PARTNERS.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="partner-logo mx-10 text-[11px] font-black uppercase tracking-[0.3em] text-white/20 transition-all duration-300 cursor-default select-none"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
