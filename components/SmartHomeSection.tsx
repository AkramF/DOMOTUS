'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Thermometer, Lock, Volume, Lightbulb, Wind } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Lightbulb,
    title: 'Éclairage',
    description: 'Scènes lumineuses intelligentes adaptées à votre rythme',
    image: '/images/smart-home-1.jpg',
    size: 'lg:col-span-2'
  },
  {
    icon: Thermometer,
    title: 'Climat',
    description: 'Température optimale automatiquement',
    image: '/images/smart-home-2.jpg',
    size: 'lg:col-span-1'
  },
  {
    icon: Lock,
    title: 'Sécurité',
    description: 'Protection 24/7 de votre foyer',
    image: '/images/smart-home-3.jpg',
    size: 'lg:col-span-1'
  },
  {
    icon: Volume,
    title: 'Audio',
    description: 'Son immersif dans chaque pièce',
    image: '/images/smart-home-4.jpg',
    size: 'lg:col-span-1'
  },
  {
    icon: Wind,
    title: 'Ventilation',
    description: 'Air pur et qualité optimale',
    image: '/images/smart-home-5.jpg',
    size: 'lg:col-span-2'
  },
]

export default function SmartHomeSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-background overflow-hidden z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 bg-primary rounded-full" aria-hidden="true" />
            <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground/70">
              Services <span className="text-primary">∞</span>
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-sans font-black text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Chaque système, 
                <span className="block text-primary">orchestré intelligemment</span>
              </h2>
              <p className="font-sans text-[16px] text-foreground/60 leading-relaxed max-w-md">
                Pilotez l'éclairage, le climat, la sécurité et bien plus encore depuis une seule interface unifiée. Vos préférences, toujours respectées.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 border border-white/10 rounded-lg bg-white/5">
                <div className="text-2xl font-black text-primary mb-2">5+</div>
                <p className="font-sans text-[14px] text-foreground/60">Services intégrés</p>
              </div>
              <div className="p-5 border border-white/10 rounded-lg bg-white/5">
                <div className="text-2xl font-black text-primary mb-2">24/7</div>
                <p className="font-sans text-[14px] text-foreground/60">Surveillance active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative overflow-hidden border border-white/8 hover:border-primary/40 transition-all duration-300 rounded-2xl cursor-pointer ${service.size}`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 group-hover:from-background/70 group-hover:to-background/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6 lg:p-8 min-h-64 justify-between">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 mb-auto">
                    <Icon size={24} className="text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-bold text-xl lg:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-sans text-[14px] text-foreground/50 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                      <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary animate-pulse" />
                      <span className="font-sans text-[12px] text-foreground/40 group-hover:text-foreground/60 transition-colors">Active</span>
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
          className="mt-20 pt-20 border-t border-white/8 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="font-sans text-[16px] text-foreground leading-relaxed">
              Découvrez comment chaque système s'adapte à votre mode de vie.
            </p>
            <p className="font-sans text-[14px] text-foreground/50 mt-2">
              Contrôle centralisé, intelligence distribuée.
            </p>
          </div>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-sans font-bold rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group flex-shrink-0"
          >
            <span>Découvrir les services</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
