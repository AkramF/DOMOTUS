'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface StackingCard {
  title: string
  description: string
  image: string
  imageAlt: string
}

export default function StackingCardsSection({ cards }: { cards: StackingCard[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(true)
  const [isTablet, setIsTablet] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle touch swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    if (!scrollContainerRef.current) return

    const diff = touchStart - touchEnd
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left, go to next card
        setCurrentIndex((prev) => (prev + 1) % cards.length)
      } else {
        // Swiped right, go to previous card
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
      }
    }
  }

  // Mobile Carousel View
  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-4">
        {/* Carousel container */}
        <motion.div
          ref={scrollContainerRef}
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex gap-3"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                className="w-full flex-shrink-0 px-3"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw"
                      className="object-cover"
                      quality={85}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-black text-base text-black line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="rounded-full transition-all"
              animate={{
                width: currentIndex === index ? 24 : 8,
                backgroundColor: currentIndex === index ? '#000000' : '#d1d5db',
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={currentIndex === index}
              style={{ height: 8 }}
            />
          ))}
        </div>
      </div>
    )
  }

  // Tablet 2-column grid
  if (isTablet) {
    return (
      <div className="grid grid-cols-2 gap-4 w-full">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -4 }}
          >
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 45vw"
                className={`object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                quality={85}
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-black text-sm text-black line-clamp-2">
                {card.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  // Desktop: 3-card stacking view
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
      rotation = -8
      translateX = -40
    } else if (isRight) {
      rotation = 8
      translateX = 40
    }

    if (isHovered) {
      rotation = 0
      scale = 1.04
      zIndex = 50
      if (isLeft) translateX = -60
      if (isRight) translateX = 60
    } else if (isOtherHovered) {
      scale = 0.96
    }

    return {
      transform: `translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex,
    }
  }

  return (
    <div className="relative w-full h-96 flex items-center justify-center px-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="absolute w-full max-w-sm h-full transition-all duration-500 ease-out cursor-pointer"
          style={getCardStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ y: -8 }}
        >
          <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Image container */}
            <div className="relative w-full h-1/2 overflow-hidden p-4">
              <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="450px"
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>

            {/* Content container */}
            <div className="w-full h-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-lg mb-2 text-black line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Premium shadow for center card */}
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
        </motion.div>
      ))}
    </div>
  )
}
