'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Smile } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Smile,
    title: 'Confort',
    description: 'Ambiance personnalisée qui s'adapte à vos préférences et routines quotidiennes',
    color: '#efd555',
    image: '/images/smart-home-1.jpg',
  },
  {
    icon: Zap,
    title: 'Efficacité',
    description: 'Optimisation énergétique automatisée qui réduit votre consommation de 22%',
    color: '#f0efed',
    image: '/images/smart-home-2.jpg',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Protection 24/7 avec surveillance en temps réel et alertes instantanées',
    color: '#efd555',
    image: '/images/smart-home-3.jpg',
  },
]

export default function SmartHomeSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-white overflow-hidden z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-black" aria-hidden="true" />
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#000000" }}>
              SERVICES <span style={{ color: "#efd555" }}>∞</span>
            </p>
          </div>
          
          <h2
            className="text-balance leading-tight"
            style={{
              fontFamily: "system-ui, ui-sans-serif, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              letterSpacing: "-0.03em",
              color: "#000000",
              maxWidth: "800px"
            }}
          >
            Automatisez<br />
            <span style={{ color: "#efd555" }}>votre bien-être</span>.
          </h2>
        </div>

        {/* Bento Grid - Services */}
        <div className="grid lg:grid-cols-3 gap-6 auto-rows-max">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isCenter = idx === 1

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  isCenter ? 'lg:row-span-2' : ''
                }`}
                style={{
                  backgroundColor: service.color,
                  minHeight: isCenter ? "500px" : "250px",
                }}
              >
                {/* Background Image with overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-8 lg:p-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={28}
                      className="text-black"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-2xl lg:text-3xl text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-black/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow CTA */}
                  <div className="mt-6 flex items-center justify-between group/arrow">
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", color: "#000000", letterSpacing: "0.1em" }} className="uppercase">
                      En savoir plus
                    </span>
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover/arrow:scale-110 transition-transform">
                      <ArrowRight size={16} className="text-[#efd555]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-20 border-t border-black/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="max-w-lg">
            <p className="text-base lg:text-lg text-black leading-relaxed mb-4">
              Solutions domotiques évolutives qui s'adaptent à votre mode de vie et vos besoins futurs.
            </p>
            <p className="text-sm text-black/60">
              Créez des scénarios personnalisés et profitez d'un confort sans limites.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group flex-shrink-0"
          >
            <span>Commencer</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
