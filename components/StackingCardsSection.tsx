'use client'

import { useState } from 'react'
import Image from 'next/image'

interface StackingCard {
  title: string
  description: string
  image: string
  imageAlt: string
}

export default function StackingCardsSection({ cards }: { cards: StackingCard[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getCardStyle = (index: number) => {
    const isCenter = index === 1
    const isLeft = index === 0
    const isRight = index === 2
    const isHovered = hoveredIndex === index
    const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index

    let rotation = 0
    let translateX = 0
    let scale = 1
    let zIndex = isCenter ? 30 : 20 - index * 5

    if (isLeft) {
      rotation = -10
      translateX = -60
    } else if (isRight) {
      rotation = 10
      translateX = 60
    }

    // Hover effects
    if (isHovered) {
      rotation = 0
      scale = 1.05
      zIndex = 50
      if (isLeft) translateX = -80
      if (isRight) translateX = 80
    } else if (isOtherHovered) {
      scale = 0.95
    }

    return {
      transform: `translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex,
    }
  }

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center px-4">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className="absolute w-full max-w-sm h-full transition-all duration-500 ease-out cursor-pointer"
          style={getCardStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Image container */}
            <div className="relative w-full h-1/2 overflow-hidden">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-cover"
                quality={85}
                loading="lazy"
              />
            </div>

            {/* Content container */}
            <div className="w-full h-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-xl mb-2 text-black line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Center card premium shadow overlay */}
            {index === 1 && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
                  borderRadius: '24px',
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
