'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react'

const smartHomeImages = [
  {
    id: 1,
    image: '/images/smart-home-1.jpg',
    alt: 'Modern living room with smart lighting',
  },
  {
    id: 2,
    image: '/images/smart-home-2.jpg',
    alt: 'Kitchen with smart appliances',
  },
  {
    id: 3,
    image: '/images/smart-home-3.jpg',
    alt: 'Bedroom with automated blinds',
  },
  {
    id: 4,
    image: '/images/smart-home-4.jpg',
    alt: 'Home theater system',
  },
  {
    id: 5,
    image: '/images/smart-home-5.jpg',
    alt: 'Outdoor terrace with connected features',
  },
]

const benefits = [
  {
    icon: Zap,
    label: 'Energy',
    description: 'Optimisation intelligente de votre consommation énergétique',
  },
  {
    icon: Shield,
    label: 'Sécurité',
    description: 'Protection 24/7 et surveillance en temps réel',
  },
  {
    icon: Leaf,
    label: 'Durabilité',
    description: 'Empreinte carbone réduite et gestion responsable',
  },
]

export default function SmartHomeSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Label with Bullet and Infinity Symbol */}
        <div className="mb-12 flex items-center gap-3">
          <div className="w-3 h-3 bg-black" aria-hidden="true" />
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "20px", color: "#efd555" }}>
            SERVICES <span style={{ color: "#efd555" }}>∞</span>
          </p>
        </div>

        {/* Title Section */}
        <div className="mb-20">
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "64px", lineHeight: "70px", color: "#000000", letterSpacing: '-0.03em' }}>
            Des scénarios infinis<br />
            <span style={{ fontStyle: 'italic', color: '#000000' }}>pour votre maison intelligente</span>
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Image Gallery with Modern Layout */}
          <div className="relative h-80 lg:h-96">
            <div style={{ position: 'relative' }} className="w-full h-full">
              {/* Featured Large Image - Left Center */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-lg hover:shadow-2xl transition-shadow duration-300 z-30">
                <Image
                  src={smartHomeImages[0].image}
                  alt={smartHomeImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Top right smaller images grid */}
              <div className="absolute right-0 top-0 grid grid-cols-2 gap-3 w-40">
                {smartHomeImages.slice(1, 3).map((item) => (
                  <div
                    key={item.id}
                    className="w-20 h-24 rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom right images grid */}
              <div className="absolute right-0 bottom-0 grid grid-cols-2 gap-3 w-40">
                {smartHomeImages.slice(3, 5).map((item) => (
                  <div
                    key={item.id}
                    className="w-20 h-24 rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content with Benefits */}
          <div className="flex flex-col gap-10">
            {/* Description */}
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg">
              Solutions domotiques évolutives qui s'adaptent à votre mode de vie. Créez des scénarios sur mesure, automatisez vos espaces et profitez d'un confort sans limites.
            </p>

            {/* Benefits Grid */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                      <Icon size={20} className="text-black" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">{benefit.label}</p>
                      <p className="text-xs lg:text-sm text-gray-500 mt-1">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
