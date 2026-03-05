'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Zap, Shield, Volume2, Smartphone, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroMaisonConnectee() {
  const features = [
    { icon: Zap, label: "Éclairage & Ambiance" },
    { icon: Shield, label: "Sécurité & Accès" },
    { icon: Volume2, label: "Audio & Vidéo" },
  ]

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#efd555] rounded-lg flex items-center justify-center">
              <Home size={18} className="text-black" />
            </div>
            <span className="text-white font-bold hidden sm:inline">Domotus</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/maison-connectee" className="text-white hover:text-[#efd555] transition-colors text-sm font-medium">
              Accueil
            </Link>
            <Link href="/contact" className="text-white hover:text-[#efd555] transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#efd555]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#efd555]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-5 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Overline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-[#efd555] rounded-full"></div>
              <span className="text-xs uppercase tracking-widest text-white font-semibold">Maison Connectée</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 
                className="text-white leading-none mb-4"
                style={{ 
                  fontFamily: "system-ui, ui-sans-serif, sans-serif", 
                  fontWeight: 900, 
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.03em"
                }}
              >
                Votre maison<br />
                <span style={{ color: "#efd555" }}>devient vivante.</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Contrôle intuitif de l'éclairage, climatisation, sécurité et divertissement. Une maison qui vous comprend et s'adapte à votre vie.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Installation", value: "2-3 jours" },
                { label: "ROI", value: "3-4 ans" },
              ].map((benefit, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">{benefit.label}</p>
                  <p className="text-2xl font-bold text-[#efd555]">{benefit.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between px-8 py-4 bg-[#efd555] text-black rounded-full font-semibold hover:shadow-lg hover:shadow-[#efd555]/50 transition-all duration-300 group"
              >
                Demander mon audit
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-between px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-[#efd555] hover:text-[#efd555] transition-all duration-300 group"
              >
                Voir les solutions
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Main Feature Card */}
              <div className="lg:col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#efd555]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-[#efd555]/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Confort Premium</h3>
                      <p className="text-white/60 text-sm">Contrôle centralisé</p>
                    </div>
                    <Smartphone size={24} className="text-[#efd555]" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Pilotez chaque aspect de votre maison depuis votre smartphone ou une simple commande vocale.
                  </p>
                </div>
              </div>

              {/* Feature Sub Cards */}
              {features.map((feature, idx) => (
                <div key={idx} className="group">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:border-[#efd555]/50 transition-all duration-300">
                    <feature.icon size={20} className="text-[#efd555] mb-2" />
                    <p className="text-white/90 text-sm font-semibold">{feature.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-white/10 rounded-xl p-4 backdrop-blur">
              <p className="text-[#efd555] font-bold text-2xl">99.8%</p>
              <p className="text-white/60 text-xs mt-1">Disponibilité garantie</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
