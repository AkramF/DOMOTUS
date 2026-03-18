'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Lock, Thermometer, Wifi, Volume2, Radio, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

interface ExpertiseItem {
  title: string
  badge: string
  description: string
  href: string
  image: string
  imageAlt: string
}

interface ExpertisesShowcaseProps {
  items: ExpertiseItem[]
}

// Map expertise titles to icons
const getIconForExpertise = (title: string) => {
  const iconProps = { size: 24, strokeWidth: 1.5 }
  switch (title.toLowerCase()) {
    case 'éclairage intelligent':
      return <Lightbulb {...iconProps} />
    case 'sécurité & accès':
      return <Lock {...iconProps} />
    case 'gestion énergie & climat':
      return <Thermometer {...iconProps} />
    case 'réseaux & connectivité':
      return <Wifi {...iconProps} />
    case 'audio & divertissement':
      return <Volume2 {...iconProps} />
    case 'supervision globale (bms)':
      return <Radio {...iconProps} />
    default:
      return <Settings {...iconProps} />
  }
}

export function ExpertisesShowcase({ items }: ExpertisesShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = items[selectedIndex]

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* ── MOBILE: Icon tabs (horizontal scroll) ── */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {items.map((item, index) => {
          const isActive = index === selectedIndex
          return (
            <motion.button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                isActive ? 'bg-black/20' : 'hover:bg-black/10'
              }`}
              aria-pressed={isActive}
              aria-label={`Sélectionner ${item.title}`}
            >
              <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>
                {getIconForExpertise(item.title)}
              </div>
              <span className={`text-[10px] uppercase tracking-wide font-bold text-center leading-tight max-w-[60px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`}>
                {item.title.split(' ')[0]}
              </span>
            </motion.button>
          )
        })}
      </div>

      {/* ── DESKTOP: Category cards (vertical stack) ── */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 w-full">
        {items.map((item, index) => {
          const isActive = index === selectedIndex

          return (
            <motion.button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ y: isActive ? 0 : -2 }}
              className={`focus-ring relative rounded-2xl overflow-hidden flex items-center justify-center p-6 group transition-all duration-300 h-40 ${
                isActive ? 'ring-2 ring-white' : 'hover:shadow-lg'
              }`}
              style={{ backgroundColor: "#000000", position: 'relative' }}
              aria-pressed={isActive}
              aria-label={`Sélectionner ${item.title}`}
            >
              {/* Background gradient with overlay — visible when active */}
              <div className="absolute inset-0 -z-10">
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #404040 0%, #1f2937 100%)',
                  }}
                />
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  isActive ? 'bg-black/30' : 'bg-black/70 group-hover:bg-black/60'
                }`} />
              </div>

              {/* Title — responsive font size */}
              <h4 
                className="font-medium text-center leading-snug transition-colors duration-300" 
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 3vw, 20px)", 
                  lineHeight: "1.3",
                  letterSpacing: "0",
                  color: isActive ? "#ffffff" : "#efd555",
                  position: "relative",
                  zIndex: 10
                }}
              >
                {item.title}
              </h4>
            </motion.button>
          )
        })}
      </div>

      {/* Right column — Selected project content with premium animations */}
      <motion.div 
        key={selected.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col gap-4 lg:gap-6"
      >
        {/* Project badge */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="text-[9px] uppercase tracking-[0.25em] font-black text-white">
            {selected.badge.split('·')[0].trim().toUpperCase()}
          </span>
        </div>

        {/* Project title & description */}
        <div>
          <h3 className="font-black leading-tight text-white text-balance mb-3 lg:mb-4" style={{ fontSize: "clamp(1.5rem, 5vw, 2.6rem)", letterSpacing: "-0.02em" }}>
            {selected.title}
          </h3>
          <p className="text-white/70 leading-relaxed text-[14px] lg:text-[15px] max-w-xl mb-6 lg:mb-8">
            {selected.description}
          </p>
        </div>

        {/* CTA button */}
        <Link
          href={selected.href}
          className="focus-ring inline-flex items-center justify-between px-6 lg:px-8 py-3 lg:py-4 rounded-full w-fit transition-all duration-300 hover:shadow-xl group text-sm lg:text-[14px]"
          style={{ backgroundColor: "#efd555" }}
        >
          <span className="text-black font-semibold">Voir l'expertise</span>
          <div className="ml-4 lg:ml-6 w-9 lg:w-11 h-9 lg:h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: "#000000" }}>
            <ArrowRight size={16} className="text-[#efd555]" aria-hidden="true" />
          </div>
        </Link>

        {/* Large project image — premium animations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl w-full flex-1 group" 
          style={{ position: 'relative', minHeight: '16rem', height: '100%' }}
        >
          <Image
            src={selected.image}
            alt={selected.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            priority
          />
          {/* Premium overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </motion.div>
    </div>
  )
}
