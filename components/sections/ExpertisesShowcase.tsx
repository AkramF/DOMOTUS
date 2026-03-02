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
  iconName?: string
}

interface ExpertisesShowcaseProps {
  items: ExpertiseItem[]
}

export function ExpertisesShowcase({ items }: ExpertisesShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = items[selectedIndex]

  return (
    <div className="h-[600px] lg:h-[700px] flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Main content — Left side */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-2xl aspect-video lg:aspect-auto lg:flex-1 mb-8">
          <Image
            src={selected.image}
            alt={selected.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content — Title, description, CTA */}
        <div>
          <h3 className="font-black uppercase text-black text-balance mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
            {selected.title}
          </h3>
          <p className="text-black/70 leading-relaxed mb-8 text-[14px] lg:text-[15px] max-w-lg">
            {selected.description}
          </p>
          <Link
            href={selected.href}
            className="focus-ring inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-black font-semibold hover:text-black/70 transition-colors duration-300"
          >
            En savoir plus <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Categories — Right side */}
      <div className="flex lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-x-visible lg:w-72 shrink-0">
        {items.map((item, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              className={`focus-ring relative rounded-2xl overflow-hidden transition-all duration-300 flex-shrink-0 w-full lg:w-auto h-40 lg:h-auto lg:flex-1 flex flex-col justify-between p-6 group ${
                isActive ? 'ring-2 ring-black' : ''
              }`}
              style={{ backgroundColor: "#000000" }}
              aria-pressed={isActive}
              aria-label={`Sélectionner ${item.title}`}
            >
              {/* Top: Location/Badge */}
              <div className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">
                {item.badge.split(' ')[0]}
              </div>

              {/* Center: Title in gold */}
              <div>
                <h4 className="font-black text-balance leading-tight" style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "-0.01em", color: "#efd555" }}>
                  {item.title}
                </h4>
              </div>

              {/* Bottom: Badges/Tags */}
              <div className="flex gap-2 flex-wrap">
                <span className="text-[9px] font-semibold text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                  {item.badge.split('·')[0].trim()}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
