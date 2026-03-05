'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Home, Utensils, Bed, Bath, Briefcase, Trees } from 'lucide-react'
import { motion } from 'framer-motion'

interface Espace {
  title: string
  manifeste: string
  angle: string
  features: string[]
  image: string
}

interface EspacesSliderProps {
  espaces: Espace[]
}

const getIconForEspace = (title: string) => {
  switch (title.toLowerCase()) {
    case 'salon':
      return <Home size={24} className="text-black" />
    case 'cuisine':
      return <Utensils size={24} className="text-black" />
    case 'chambre':
      return <Bed size={24} className="text-black" />
    case 'salle de bain':
      return <Bath size={24} className="text-black" />
    case 'bureau':
      return <Briefcase size={24} className="text-black" />
    case 'jardin & terrasse':
      return <Trees size={24} className="text-black" />
    default:
      return <Home size={24} className="text-black" />
  }
}

export default function EspacesSlider({ espaces }: EspacesSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Filter to only 6 spaces (remove Piscine)
  const filteredEspaces = espaces.slice(0, 6)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredEspaces.length) % filteredEspaces.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredEspaces.length)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = x - startX
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-black/10 rounded-full transition-all duration-300 group"
        aria-label="Previous space"
      >
        <ChevronLeft size={28} className="text-black" />
      </button>

      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex gap-6 pb-4">
          {filteredEspaces.map((espace, idx) => {
            const isActive = idx === activeIndex
            const isLeft = idx === (activeIndex - 1 + filteredEspaces.length) % filteredEspaces.length
            const isRight = idx === (activeIndex + 1) % filteredEspaces.length

            let scale = 0.75
            let opacity = 0.4
            let zIndex = 1

            if (isActive) {
              scale = 1
              opacity = 1
              zIndex = 10
            } else if (isLeft || isRight) {
              scale = 0.85
              opacity = 0.6
              zIndex = 5
            }

            return (
              <motion.div
                key={espace.title}
                animate={{ scale, opacity }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ zIndex }}
                className="flex-shrink-0 w-96"
              >
                <div
                  className="bg-white rounded-2xl p-8 flex flex-col h-96 transition-all duration-300 group"
                  style={{
                    boxShadow: isActive ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-black font-bold text-xl mb-1">{espace.title}</h3>
                      <p className="text-xs text-black/50 uppercase tracking-widest font-semibold">Espace Connecté</p>
                    </div>
                    {getIconForEspace(espace.title)}
                  </div>

                  {/* Content */}
                  <p className="text-sm font-semibold text-black mb-3">{espace.manifeste}</p>
                  <p className="text-xs text-black/60 mb-5 flex-grow leading-relaxed">{espace.angle}</p>

                  {/* Features - Only show for active card */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="border-t border-black/10 pt-4"
                    >
                      <p className="text-[10px] uppercase tracking-widest font-bold text-black/50 mb-3">Avantages</p>
                      <ul className="space-y-2">
                        {espace.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-xs text-black flex gap-2">
                            <span className="text-[#efd555] font-bold">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-black/10 rounded-full transition-all duration-300 group"
        aria-label="Next space"
      >
        <ChevronRight size={28} className="text-black" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {filteredEspaces.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 ${
              idx === activeIndex ? 'bg-black w-8 h-2.5' : 'bg-black/30 w-2.5 h-2.5'
            } rounded-full`}
            aria-label={`Go to space ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
