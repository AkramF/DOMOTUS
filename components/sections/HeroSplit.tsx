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
        <div className="w-full mx-auto max-w-full px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20 lg:py-32 mx-auto lg:mx-16">
            
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
                <span className="block w-2 h-2 bg-white" aria-hidden="true" />
                <p className="text-white select-none" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>
                  Intégration domotique certifiée — Maroc
                </p>
              </motion.div>

              {/* H1 */}
              <h1
                className="text-white"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "64px", lineHeight: "70px" }}
              >
                votre accès à la <span style={{ color: "#efd555" }}>domotique</span> premium.
              </h1>

              {/* Subheading */}
              <p className="mt-7 text-white max-w-md" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>
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
                  className="focus-ring inline-flex items-center justify-between bg-white px-8 py-4 rounded-full text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-lg will-change-colors group"
                >
                  Maison connectée
                  <div className="ml-4 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
                  </div>
                </Link>
                <Link
                  href="/architectes"
                  className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-lg will-change-colors group"
                  style={{ backgroundColor: "#000000", border: "2px solid #efd555" }}
                >
                  Espace Professionnels
                  <div className="ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: "#efd555" }}>
                    <ArrowRight size={16} className="text-black" aria-hidden="true" />
                  </div>
                </Link>
              </motion.div>

              {/* Stats — below buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 will-change-opacity"
              >
                <div className="flex flex-col">
                  <span className="text-[20px] lg:text-[24px] font-black text-white mb-2">+150</span>
                  <span className="text-[12px] text-white/70 leading-snug">Projets livrés<br />au Maroc</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] lg:text-[24px] font-black text-white mb-2">10 ans</span>
                  <span className="text-[12px] text-white/70 leading-snug">D&apos;expertise<br />domotique</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] lg:text-[24px] font-black text-white mb-2">99.8%</span>
                  <span className="text-[12px] text-white/70 leading-snug">Disponibilité<br />garantie</span>
                </div>
              </motion.div>

            </motion.div>

            {/* ── RIGHT COLUMN: Image with white border ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              {/* White border frame */}
              <div className="p-4 lg:p-6 bg-white rounded-2xl h-[500px] lg:h-[600px] shadow-xl">
                {/* Image inside white frame */}
                <div className="relative w-full h-full overflow-hidden rounded-xl group">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Villa intelligente équipée par Domotus au Maroc"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
