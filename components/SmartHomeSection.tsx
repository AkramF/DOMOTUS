'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Thermometer, Lock, Volume, Lightbulb, Wind } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Lightbulb,
    title: 'Éclairage',
    category: 'Ambiance',
    badge: 'Premium',
    description: 'Scènes lumineuses personnalisées',
    color: 'from-yellow-400/20 to-yellow-500/10',
    image: '/images/smart-home-1.jpg',
    size: 'lg:col-span-2'
  },
  {
    icon: Thermometer,
    title: 'Climat',
    category: 'Confort',
    badge: 'Eco',
    description: 'Température intelligente',
    color: 'from-blue-400/20 to-blue-500/10',
    image: '/images/smart-home-2.jpg',
    size: 'lg:col-span-1'
  },
  {
    icon: Lock,
    title: 'Sécurité',
    category: 'Protection',
    badge: '24/7',
    description: 'Accès & surveillance',
    color: 'from-red-400/20 to-red-500/10',
    image: '/images/smart-home-3.jpg',
    size: 'lg:col-span-1'
  },
  {
    icon: Volume,
    title: 'Audio',
    category: 'Divertissement',
    badge: 'Multi-room',
    description: 'Son immersif partout',
    color: 'from-purple-400/20 to-purple-500/10',
    image: '/images/smart-home-4.jpg',
    size: 'lg:col-span-1'
  },
  {
    icon: Wind,
    title: 'Ventilation',
    category: 'Santé',
    badge: 'Auto',
    description: 'Air pur & filtré',
    color: 'from-green-400/20 to-green-500/10',
    image: '/images/smart-home-5.jpg',
    size: 'lg:col-span-2'
  },
]

const badgeColors: Record<string, string> = {
  'Premium': 'bg-yellow-100 text-yellow-700',
  'Eco': 'bg-blue-100 text-blue-700',
  '24/7': 'bg-red-100 text-red-700',
  'Multi-room': 'bg-purple-100 text-purple-700',
  'Auto': 'bg-green-100 text-green-700',
}

export default function SmartHomeSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-white overflow-hidden z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
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

        {/* App-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon
            const badgeClass = badgeColors[service.badge] || 'bg-gray-100 text-gray-700'

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${service.size}`}
              >
                {/* Card Background with Image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} backdrop-blur-sm`} />
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6 lg:p-8 min-h-64">
                  {/* Top Section: Icon & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Icon size={24} className="text-black" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Middle Section: Title & Category */}
                  <div className="flex-grow">
                    <p className="text-xs text-black/60 uppercase tracking-widest font-semibold mb-2">{service.category}</p>
                    <h3 className="font-bold text-xl lg:text-2xl text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Section: Status Indicator */}
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-black/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-black/60 font-medium">Activé</span>
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
              Découvrez une maison qui comprend vos besoins et s'adapte automatiquement.
            </p>
            <p className="text-sm text-black/60">
              Pilotez chaque service depuis votre interface centralisée.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group flex-shrink-0"
          >
            <span>Découvrir l&apos;app</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
