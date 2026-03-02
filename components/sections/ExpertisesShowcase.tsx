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
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      {/* Left column — Category cards stacked */}
      <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {items.map((item, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              className={`focus-ring relative rounded-3xl overflow-hidden flex-shrink-0 w-48 h-36 lg:w-full lg:h-auto lg:aspect-square flex flex-col justify-between p-6 group transition-all duration-300 ${
                isActive ? 'ring-2 ring-black' : 'hover:shadow-xl'
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
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300" />
              </div>

              {/* Top: Location text */}
              <div className="text-[8px] uppercase tracking-widest text-white/60 font-semibold">
                {item.badge.split('·')[0].trim()}
              </div>

              {/* Center: Title in gold */}
              <div>
                <h4 className="font-black text-balance leading-tight" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", letterSpacing: "-0.01em", color: "#efd555" }}>
                  {item.title}
                </h4>
              </div>

              {/* Bottom: Tags */}
              <div className="flex gap-2 flex-wrap">
                {item.badge.split('·').slice(1).map((tag, i) => (
                  <span key={i} className="text-[7px] font-semibold text-white/70">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </button>
          )
        })}
      </div>

      {/* Right column — Selected project content */}
      <div className="lg:col-span-8 flex flex-col gap-8">
        {/* Project badge */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-black rounded-full" />
          <span className="text-[9px] uppercase tracking-[0.25em] font-black text-black">
            {selected.badge.split('·')[0].trim().toUpperCase()}
          </span>
        </div>

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

        {/* Project content */}
        <div>
          <h3 className="font-black leading-tight text-black text-balance mb-6" style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", letterSpacing: "-0.02em" }}>
            {selected.title}
          </h3>
          <p className="text-black/60 leading-relaxed text-[14px] lg:text-[15px] max-w-xl mb-8">
            {selected.description}
          </p>
        </div>

        {/* CTA button — black with gold arrow circle */}
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
      </div>
    </div>
  )
}
