"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const PARTNERS = [
  "UBIQUITI", "AQARA", "GOVEE", "LEGRAND", "SOMFY", "SCHNEIDER", "KNX", "CRESTRON", "LUTRON",
  "UBIQUITI", "AQARA", "GOVEE", "LEGRAND", "SOMFY", "SCHNEIDER", "KNX", "CRESTRON", "LUTRON",
];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-background overflow-hidden"
      aria-label="Domotus — Maison connectée au Maroc"
    >
      {/* ── Main content split layout ── */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-fit py-20 lg:py-32">
            
            {/* ── LEFT COLUMN: Text content ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              {/* Overline — keyword-rich for SEO */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold select-none">
                  Intégrateur domotique premium
                </p>
              </motion.div>

              {/* H1 — two visual lines */}
              <h1
                className="font-black leading-tight text-foreground mb-6"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}
              >
                <span className="block">Domotique</span>
                <span className="block">Premium <span className="text-primary">sur-</span></span>
                <span className="block"><span className="text-primary">mesure</span> au Maroc</span>
              </h1>

              {/* Subheading — benefit-led */}
              <p className="text-[14px] lg:text-[15px] text-foreground/65 leading-relaxed max-w-md mb-8">
                Pour villas, appartements haut standing et espaces professionnels exigeants. Domotus conçoit et intègre des solutions domotiques personnalisées avec les meilleures marques mondiales.
              </p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-12 will-change-transform"
              >
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85 will-change-colors rounded-sm"
                  style={{ color: "#0a0a0a" }}
                >
                  Étude personnalisée gratuite
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
                <Link
                  href="/expertises"
                  className="focus-ring inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <span className="inline-block w-5 h-5 border border-current rounded-full flex items-center justify-center text-[8px]">
                    ▶
                  </span>
                  Voir nos réalisations
                </Link>
              </motion.div>

              {/* Stats — horizontal layout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col gap-3 will-change-opacity"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary font-black text-[18px]">100+</span>
                  <span className="text-[13px] text-foreground/60">Projets réalisés</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-black text-[18px]">15+</span>
                  <span className="text-[13px] text-foreground/60">Années d'expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-black text-[18px]">50+</span>
                  <span className="text-[13px] text-foreground/60">Marques partenaires</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: Image with badge ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative h-[500px] lg:h-[600px] flex items-center justify-end"
            >
              {/* Image container with border radius */}
              <div className="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/villa-prestige.webp"
                  alt="Villa prestige équipée en domotique par Domotus au Maroc"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Badge — Certifié & Garanti */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 will-change-transform"
              >
                <CheckCircle2 size={20} className="text-primary shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.1em] text-foreground">Certifié & Garanti</p>
                  <p className="text-[10px] text-foreground/60">Installation professionnelle</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Partners ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.9 }}
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
