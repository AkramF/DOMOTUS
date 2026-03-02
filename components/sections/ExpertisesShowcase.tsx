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
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
      {/* Left column — Category cards stacked */}
      <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {items.map((item, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              className={`focus-ring relative rounded-lg overflow-hidden flex-shrink-0 w-32 h-16 lg:w-full lg:h-20 flex items-center justify-center p-3 group transition-all duration-300 ${
                isActive ? 'ring-2 ring-black' : 'hover:shadow-lg'
              }`}
              style={{ backgroundColor: "#000000" }}
              aria-pressed={isActive}
              aria-label={`Sélectionner ${item.title}`}
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              {/* Title — full text visible, color changes based on active state */}
              <h4 
                className="font-medium text-center leading-snug transition-colors duration-300" 
                style={{ 
                  fontSize: "0.875rem", 
                  letterSpacing: "0",
                  color: isActive ? "#000000" : "#efd555",
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
      <div className="lg:col-span-10 flex flex-col gap-6">
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

        {/* Large project image */}
        <div className="relative overflow-hidden rounded-3xl aspect-square lg:aspect-video will-change-contents">
          <Image
            src={selected.image}
            alt={selected.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
