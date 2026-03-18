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
      <div className="relative z-10 w-full flex items-center">
        <div className="w-full mx-auto max-w-full px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center py-16 sm:py-20 lg:py-32 mx-auto lg:mx-16">
            
            {/* ── LEFT COLUMN: Text Content ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center order-1 lg:order-1"
            >
              {/* Overline — Extra top margin on mobile for navbar clearance */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center gap-3 mb-6 sm:mb-8 mt-6 sm:mt-0"
              >
                <span className="block w-2 h-2 bg-white flex-shrink-0" aria-hidden="true" />
                <p className="text-white select-none text-xs sm:text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", lineHeight: "16px", letterSpacing: "0.05em" }}>
                  INTÉGRATION DOMOTIQUE CERTIFIÉE — MAROC
                </p>
              </motion.div>

              {/* H1 */}
              <h1
                className="text-white text-balance"
                style={{ fontFamily: "system-ui, ui-sans-serif, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
              >
                votre accès à la <span style={{ color: "#efd555" }}>domotique</span> premium.
              </h1>

              {/* Subheading */}
              <p className="mt-5 sm:mt-7 text-white text-balance" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(0.9rem, 2vw, 1rem)", lineHeight: "1.6" }}>
                L&apos;expérience de vos espaces, réinventée. Là où la technologie crée confort, sécurité et sérénité, Domotus transforme maisons et immeubles en écosystèmes intelligents.
              </p>

              {/* CTAs — Side-by-side buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 will-change-transform"
              >
                <Link
                  href="/maison-connectee"
                  className="focus-ring inline-flex items-center justify-between bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-lg will-change-colors group"
                >
                  Maison connectée
                  <div className="ml-3 sm:ml-4 w-8 sm:w-10 h-8 sm:h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0">
                    <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
                  </div>
                </Link>
                <Link
                  href="/architectes"
                  className="focus-ring inline-flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-lg will-change-colors group"
                  style={{ backgroundColor: "#000000", border: "2px solid #efd555" }}
                >
                  Solutions Pro
                  <div className="ml-3 sm:ml-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: "#efd555" }}>
                    <ArrowRight size={16} className="text-black" aria-hidden="true" />
                  </div>
                </Link>
              </motion.div>

              {/* Stats — Center-aligned */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 will-change-opacity text-center sm:text-left"
              >
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-white mb-1 sm:mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(1.5rem, 4vw, 1.75rem)", lineHeight: "1.2" }}>+150</span>
                  <span className="text-white text-xs sm:text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", lineHeight: "1.4" }}>Projets livrés<br />au Maroc</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-white mb-1 sm:mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(1.5rem, 4vw, 1.75rem)", lineHeight: "1.2" }}>10 ans</span>
                  <span className="text-white text-xs sm:text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", lineHeight: "1.4" }}>D&apos;expertise<br />domotique</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-white mb-1 sm:mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(1.5rem, 4vw, 1.75rem)", lineHeight: "1.2" }}>99.8%</span>
                  <span className="text-white text-xs sm:text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", lineHeight: "1.4" }}>Disponibilité<br />garantie</span>
                </div>
              </motion.div>

            </motion.div>

            {/* ── RIGHT COLUMN: Image with white border ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative order-2 lg:order-2 h-80 sm:h-96 md:h-[500px] lg:h-[600px]"
            >
              {/* White border frame */}
              <div className="relative p-3 sm:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl h-full shadow-xl">
              {/* Image inside white frame */}
                <div 
                  className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl group" 
                  style={{ position: 'relative' }}
                >
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Villa intelligente équipée par Domotus au Maroc"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
