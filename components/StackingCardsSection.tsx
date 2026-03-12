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
  const [isDesktop, setIsDesktop] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardOrder, setCardOrder] = useState([0, 1, 2])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
      setIsDesktop(width >= 1024)
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
        setCurrentIndex((prev) => (prev + 1) % cards.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
      }
    }
  }

  // Handle card click on desktop fan view
  const handleCardClick = (index: number) => {
    if (isDesktop) {
      const newOrder = cardOrder.filter((i) => i !== index)
      newOrder.unshift(index)
      setCardOrder(newOrder)
    }
  }

  // Mobile Carousel View
  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-4">
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

  // Desktop: Fan-spread animation with click-to-front
  if (isDesktop) {
    const getFanPosition = (displayIndex: number) => {
      // Left card: rotated -12deg, translateX -60px
      // Center card: no rotation, center
      // Right card: rotated 12deg, translateX 60px
      const positions = [
        { rotation: -12, translateX: -60, zIndex: 20 },
        { rotation: 0, translateX: 0, zIndex: 30 },
        { rotation: 12, translateX: 60, zIndex: 20 },
      ]
      return positions[displayIndex] || positions[0]
    }

    const sortedCards = cardOrder.map((idx) => cards[idx])

    return (
      <div className="relative w-full h-96 flex items-center justify-center px-4">
        {sortedCards.map((card, displayIndex) => {
          const cardIndex = cardOrder[displayIndex]
          const position = getFanPosition(displayIndex)
          const isCenter = displayIndex === 1

          return (
            <motion.div
              key={card.title}
              className="absolute w-full max-w-sm h-full transition-all duration-500 ease-out cursor-pointer"
              animate={{
                x: position.translateX,
                rotate: position.rotation,
                zIndex: position.zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              onMouseEnter={() => setHoveredIndex(cardIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(cardIndex)}
              whileHover={!isCenter ? { y: -8, scale: 1.02 } : { y: -4 }}
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
                {isCenter && (
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
          )
        })}
      </div>
    )
  }

  return null
}
