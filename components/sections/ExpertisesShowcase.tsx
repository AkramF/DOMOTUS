'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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

export function ExpertisesShowcase({ items }: ExpertisesShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = items[selectedIndex]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {/* Left column — Category cards (vertical stack on mobile, stretch on desktop) */}
      <div className="lg:col-span-3 flex flex-col gap-3 w-full">
        {items.map((item, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              className={`focus-ring relative rounded-2xl overflow-hidden flex items-center justify-center p-4 group transition-all duration-300 w-full h-24 lg:h-40 ${
                isActive ? 'ring-2 ring-black' : 'hover:shadow-lg'
              }`}
              style={{ backgroundColor: "#000000", position: 'relative' }}
              aria-pressed={isActive}
              aria-label={`Sélectionner ${item.title}`}
            >
              {/* Background gradient with overlay — visible when active */}
              <div className="absolute inset-0 -z-10" style={{ position: 'relative' }}>
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
                  fontSize: "clamp(16px, 4vw, 24px)", 
                  lineHeight: "1.3",
                  letterSpacing: "0",
                  color: isActive ? "#ffffff" : "#efd555",
                  position: "relative",
                  zIndex: 10
                }}
              >
                {item.title}
              </h4>
            </button>
          )
        })}
      </div>

      {/* Right column — Selected project content */}
      <div className="lg:col-span-9 flex flex-col gap-4 lg:gap-6">
        {/* Project badge */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-black rounded-full" />
          <span className="text-[9px] uppercase tracking-[0.25em] font-black text-black">
            {selected.badge.split('·')[0].trim().toUpperCase()}
          </span>
        </div>

        {/* Project title & description */}
        <div>
          <h3 className="font-black leading-tight text-black text-balance mb-3 lg:mb-4" style={{ fontSize: "clamp(1.5rem, 5vw, 2.6rem)", letterSpacing: "-0.02em" }}>
            {selected.title}
          </h3>
          <p className="text-black/60 leading-relaxed text-[14px] lg:text-[15px] max-w-xl mb-6 lg:mb-8">
            {selected.description}
          </p>
        </div>

        {/* CTA button */}
        <Link
          href={selected.href}
          className="focus-ring inline-flex items-center justify-between px-6 lg:px-8 py-3 lg:py-4 rounded-full w-fit transition-all duration-300 hover:shadow-xl group text-sm lg:text-[14px]"
          style={{ backgroundColor: "#000000" }}
        >
          <span className="text-white font-semibold">View project</span>
          <div className="ml-4 lg:ml-6 w-9 lg:w-11 h-9 lg:h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: "#efd555" }}>
            <ArrowRight size={16} className="text-black" aria-hidden="true" />
          </div>
        </Link>

        {/* Large project image — responsive height */}
        <div 
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl w-full h-64 sm:h-80 lg:h-96 flex-1 min-h-0" 
          style={{ position: 'relative' }}
        >
          <Image
            src={selected.image}
            alt={selected.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
