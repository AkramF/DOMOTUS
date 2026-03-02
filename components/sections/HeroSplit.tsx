"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-background overflow-hidden"
      aria-label="Domotus — Maison connectée au Maroc"
    >
      {/* ── Main split layout ── */}
      <div className="relative z-10 min-h-screen lg:min-h-fit flex items-center">
        <div className="w-full mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">
            
            {/* ── LEFT COLUMN: Text Content ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              {/* Overline */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="block w-8 h-px bg-foreground/30" aria-hidden="true" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold select-none">
                  Intégration domotique certifiée — Maroc
                </p>
              </motion.div>

              {/* H1 */}
              <h1
                className="font-black leading-tight text-foreground"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}
              >
                La signature<br />
                <span className="italic text-foreground/65">technologique.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-7 text-[14px] lg:text-[15px] text-foreground/60 leading-relaxed max-w-md">
                L&apos;expérience de vos espaces, réinventée. Là où la technologie crée confort, sécurité et sérénité, Domotus transforme maisons et immeubles en écosystèmes intelligents.
              </p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mt-10 flex flex-col sm:flex-row items-start gap-4 will-change-transform"
              >
                <Link
                  href="/maison-connectee"
                  className="focus-ring inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary/85 will-change-colors"
                  style={{ color: "#0a0a0a" }}
                >
                  Votre maison connectée
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
                <Link
                  href="/architectes"
                  className="focus-ring inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary will-change-colors"
                >
                  Espace Professionnels
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 flex items-center gap-6 text-[11px] text-foreground/35 uppercase tracking-[0.12em] will-change-opacity"
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
            </motion.div>

            {/* ── RIGHT COLUMN: Image ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-xl order-1 lg:order-2 group"
            >
              <Image
                src="/images/hero-bg.webp"
                alt="Villa intelligente équipée par Domotus au Maroc"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
