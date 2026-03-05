'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
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
      return <Home size={24} className="text-white" />
    case 'cuisine':
      return <Utensils size={24} className="text-white" />
    case 'chambre':
      return <Bed size={24} className="text-white" />
    case 'salle de bain':
      return <Bath size={24} className="text-white" />
    case 'bureau':
      return <Briefcase size={24} className="text-white" />
    case 'jardin & terrasse':
      return <Trees size={24} className="text-white" />
    default:
      return <Home size={24} className="text-white" />
  }
}

export default function EspacesSlider({ espaces }: EspacesSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Filter to only 6 spaces
  const filteredEspaces = espaces.slice(0, 6)
  const CARD_WIDTH = 384 // w-96 = 24rem = 384px
  const GAP = 24 // gap-6 = 1.5rem = 24px
  const CARD_WITH_GAP = CARD_WIDTH + GAP

  // Auto-scroll to center the active card
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return

    // Calculate the scroll position to center the active card
    const containerWidth = containerRef.current.clientWidth
    const trackWidth = trackRef.current.scrollWidth
    const targetScroll = activeIndex * CARD_WITH_GAP - (containerWidth - CARD_WIDTH) / 2

    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    })
  }, [activeIndex])

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
    // Snap to nearest card after drag
    if (containerRef.current) {
      const scrollPos = containerRef.current.scrollLeft
      const nearestIndex = Math.round(scrollPos / CARD_WITH_GAP)
      const clampedIndex = Math.max(0, Math.min(nearestIndex, filteredEspaces.length - 1))
      setActiveIndex(clampedIndex)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 0.5
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (containerRef.current) {
      const scrollPos = containerRef.current.scrollLeft
      const nearestIndex = Math.round(scrollPos / CARD_WITH_GAP)
      const clampedIndex = Math.max(0, Math.min(nearestIndex, filteredEspaces.length - 1))
      setActiveIndex(clampedIndex)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].clientX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 0.5
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

      {/* Slider Container with snap scrolling */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 pb-4"
          style={{
            width: 'fit-content',
          }}
        >
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
                className="flex-shrink-0"
                style={{ width: CARD_WIDTH, scrollSnapAlign: 'center' }}
              >
                <div
                  className="bg-white rounded-2xl flex flex-col h-96 transition-all duration-300 overflow-hidden group relative"
                  style={{
                    boxShadow: isActive ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Mode OFF: Image + Icon + Title */}
                  {!isActive && (
                    <>
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={espace.image}
                          alt={espace.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Content - Bottom aligned */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg">{espace.title}</h3>
                          {getIconForEspace(espace.title)}
                        </div>
                        <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">Espace Connecté</p>
                      </div>
                    </>
                  )}

                  {/* Mode FOCUS: Text Content */}
                  {isActive && (
                    <div className="p-8 flex flex-col h-full">
                      {/* Icon & Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-black font-bold text-xl mb-1">{espace.title}</h3>
                          <p className="text-xs text-black/50 uppercase tracking-widest font-semibold">Espace Connecté</p>
                        </div>
                        <div className="text-black">{getIconForEspace(espace.title)}</div>
                      </div>

                      {/* Description */}
                      <p className="text-sm font-semibold text-black mb-3">{espace.manifeste}</p>
                      <p className="text-xs text-black/60 mb-5 flex-grow leading-relaxed">{espace.angle}</p>

                      {/* Features */}
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
                    </div>
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

      {/* Dots Navigation with infinite loop indication */}
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
