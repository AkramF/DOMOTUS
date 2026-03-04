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
    <div className="grid lg:grid-cols-12 gap-3 lg:gap-3 items-stretch">
      {/* Left column — Category cards stacked, stretched to match image height */}
      <div className="lg:col-span-3 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 lg:justify-between">
        {items.map((item, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              className={`focus-ring relative rounded-2xl overflow-hidden flex-shrink-0 w-40 h-24 lg:w-full lg:h-40 flex items-center justify-center p-4 group transition-all duration-300 ${
                isActive ? 'ring-2 ring-black' : 'hover:shadow-lg'
              }`}
              style={{ backgroundColor: "#000000", position: 'relative' }}
              aria-pressed={isActive}
              aria-label={`Sélectionner ${item.title}`}
            >
              {/* Background image with overlay — visible when active */}
              <div className="absolute inset-0 -z-10" style={{ position: 'relative' }}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 160px, 100%"
                  className={`object-cover transition-opacity duration-300 ${
                    isActive ? 'opacity-70' : 'opacity-0'
                  }`}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23404040' /%3E%3C/svg%3E"
                />
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  isActive ? 'bg-black/30' : 'bg-black/70 group-hover:bg-black/60'
                }`} />
              </div>

              {/* Title — full text visible, Inter 500 24px 29px line-height */}
              <h4 
                className="font-medium text-center leading-snug transition-colors duration-300" 
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "24px", 
                  lineHeight: "29px",
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

      {/* Right column — Selected project content, stretched full height */}
      <div className="lg:col-span-9 flex flex-col gap-6 h-full">
        {/* Project badge */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-black rounded-full" />
          <span className="text-[9px] uppercase tracking-[0.25em] font-black text-black">
            {selected.badge.split('·')[0].trim().toUpperCase()}
          </span>
        </div>

        {/* Project title & description — above image */}
        <div>
          <h3 className="font-black leading-tight text-black text-balance mb-4" style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", letterSpacing: "-0.02em" }}>
            {selected.title}
          </h3>
          <p className="text-black/60 leading-relaxed text-[14px] lg:text-[15px] max-w-xl mb-8">
            {selected.description}
          </p>
        </div>

        {/* CTA button — above the image */}
        <Link
          href={selected.href}
          className="focus-ring inline-flex items-center justify-between px-8 py-4 rounded-full w-fit transition-all duration-300 hover:shadow-xl group"
          style={{ backgroundColor: "#000000" }}
        >
          <span className="text-white font-semibold text-[14px]">View project</span>
          <div className="ml-6 w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: "#efd555" }}>
            <ArrowRight size={18} className="text-black" aria-hidden="true" />
          </div>
        </Link>

        {/* Large project image — stretched to fill remaining space */}
        <div className="relative overflow-hidden rounded-3xl flex-1 min-h-0" style={{ position: 'relative' }}>
          <Image
            src={selected.image}
            alt={selected.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23d1d5db;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%239ca3af;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad)' /%3E%3C/svg%3E"
          />
        </div>
      </div>
    </div>
  )
}
