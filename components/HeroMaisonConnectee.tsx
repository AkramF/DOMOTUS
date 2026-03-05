'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroMaisonConnectee() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      aria-label="Maison connectée intelligente au Maroc"
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
                <span className="block w-2 h-2 bg-black" aria-hidden="true" />
                <p className="text-black select-none" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>
                  MAISON CONNECTÉE MULTI-PROTOCOLES
                </p>
              </motion.div>

              {/* H1 */}
              <h1
                className="text-black"
                style={{ fontFamily: "system-ui, ui-sans-serif, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'", fontWeight: 900, fontSize: "64px", lineHeight: "64px", fontStyle: "normal" }}
              >
                votre maison mérite <span style={{ color: "#efd555" }}>l'intelligence.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-7 text-black" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>
                Transformez votre villa ou appartement en écosystème intelligent. KNX, Crestron, Lutron — confort absolu, efficacité énergétique garantie, tranquillité d'esprit totale.
              </p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mt-10 flex flex-col sm:flex-row items-start gap-4 will-change-transform"
              >
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center justify-between bg-black px-8 py-4 rounded-full text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-lg will-change-colors group"
                >
                  Demander mon audit gratuit
                  <div className="ml-4 w-10 h-10 bg-[#efd555] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight size={16} className="text-black" aria-hidden="true" />
                  </div>
                </Link>
                <Link
                  href="/maison-connectee#espaces"
                  className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-lg will-change-colors group"
                  style={{ backgroundColor: "#f0efed", border: "1px solid rgba(0, 0, 0, 0.1)" }}
                >
                  Découvrir les usages
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
                className="mt-16 grid grid-cols-3 gap-8 will-change-opacity"
              >
                <div className="flex flex-col">
                  <span className="text-black mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "28px", lineHeight: "36px" }}>−22%</span>
                  <span className="text-black/60" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px" }}>Facture<br />énergétique</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "28px", lineHeight: "36px" }}>+18%</span>
                  <span className="text-black/60" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px" }}>Valeur<br />immobilière</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "28px", lineHeight: "36px" }}>100%</span>
                  <span className="text-black/60" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px" }}>Mobile<br />contrôlée</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: Image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-square lg:aspect-auto lg:h-screen rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/maison-connectee-hero.webp"
                  alt="Villa intelligente avec domotique KNX multi-protocoles — Maison connectée Domotus Maroc"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
