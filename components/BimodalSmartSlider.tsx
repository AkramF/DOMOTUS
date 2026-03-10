'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BimodalSmartSliderProps {
  residentialHref?: string
  proHref?: string
}

export function BimodalSmartSlider({
  residentialHref = '/maison-connectee',
  proHref = '/architectes',
}: BimodalSmartSliderProps) {
  const [dragX, setDragX] = useState(0)
  const [confirmedSide, setConfirmedSide] = useState<'left' | 'right' | null>(null)
  const [trackWidth, setTrackWidth] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)

  // Measure track width on mount
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth)
    }

    const handleResize = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.offsetWidth)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate constraints
  const maxDrag = trackWidth / 2 - 32

  // Determine which side dominates (0 = left 100%, 1 = right 100%)
  const slideProgress = maxDrag > 0 ? dragX / maxDrag : 0

  // Handle desktop drag
  const handleDrag = (event: any, info: any) => {
    const newX = info.offset.x
    if (Math.abs(newX) <= maxDrag) {
      setDragX(newX)
    }
  }

  // Handle drag end with confirmation threshold
  const handleDragEnd = () => {
    if (Math.abs(dragX) > maxDrag * 0.4) {
      if (dragX < 0) {
        setDragX(-maxDrag * 0.95)
        setConfirmedSide('left')
      } else {
        setDragX(maxDrag * 0.95)
        setConfirmedSide('right')
      }
    } else {
      setDragX(0)
      setConfirmedSide(null)
    }
  }

  // Handle mobile touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchCurrent = e.targetTouches[0].clientX
    const diff = touchStart - touchCurrent
    if (Math.abs(diff) <= maxDrag) {
      setDragX(-diff)
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > maxDrag * 0.3) {
      if (diff > 0) {
        setDragX(maxDrag * 0.95)
        setConfirmedSide('right')
      } else {
        setDragX(-maxDrag * 0.95)
        setConfirmedSide('left')
      }
    } else {
      setDragX(0)
      setConfirmedSide(null)
    }
  }

  const href = confirmedSide === 'left' ? residentialHref : confirmedSide === 'right' ? proHref : '#'

  return (
    <Link 
      href={href} 
      onClick={(e) => {
        if (!confirmedSide) {
          e.preventDefault()
        }
      }}
    >
      <div
        ref={trackRef}
        className="relative w-full max-w-md h-20 rounded-full overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          touchAction: 'none',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {/* Left side - Pure white background */}
        <div
          className="absolute inset-0 left-0 pointer-events-none"
          style={{
            width: `calc(50% + ${(dragX / 2)}px)`,
            backgroundColor: '#ffffff',
            transition: confirmedSide ? 'none' : 'width 0.05s linear',
          }}
        />

        {/* Right side - Pure black background */}
        <div
          className="absolute inset-0 right-0 pointer-events-none"
          style={{
            width: `calc(50% - ${(dragX / 2)}px)`,
            backgroundColor: '#000000',
            transition: confirmedSide ? 'none' : 'width 0.05s linear',
          }}
        />

        {/* Left label - Maison connectée (black text on white) */}
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none z-10"
          style={{
            color: slideProgress > 0.3 ? '#999999' : '#000000',
            opacity: slideProgress < 0.7 ? 1 : 0.4,
            transition: 'opacity 0.1s ease-out, color 0.1s ease-out',
          }}
        >
          <span
            className="font-black uppercase whitespace-nowrap"
            style={{
              fontSize: '12px',
              letterSpacing: '0.12em',
              fontWeight: 900,
            }}
          >
            Maison connectée
          </span>
        </motion.div>

        {/* Right label - Espace Pro (white text on black) */}
        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none z-10"
          style={{
            color: slideProgress < -0.3 ? '#666666' : '#ffffff',
            opacity: slideProgress > -0.7 ? 1 : 0.4,
            transition: 'opacity 0.1s ease-out, color 0.1s ease-out',
          }}
        >
          <span
            className="font-black uppercase whitespace-nowrap"
            style={{
              fontSize: '12px',
              letterSpacing: '0.12em',
              fontWeight: 900,
            }}
          >
            Espace Pro
          </span>
        </motion.div>

        {/* Central draggable yellow orb - always active */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -maxDrag, right: maxDrag }}
          dragElastic={0.2}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={{
            x: dragX,
          }}
          transition={{
            type: 'spring',
            stiffness: confirmedSide ? 500 : 300,
            damping: confirmedSide ? 40 : 25,
            mass: 0.8,
          }}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-20 flex-shrink-0"
          style={{
            backgroundColor: '#efd555',
            boxShadow: '0 8px 24px rgba(239, 213, 85, 0.4)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Bidirectional chevrons - black strokes */}
          <div className="flex items-center justify-center gap-0.5">
            <ChevronLeft size={18} className="text-black" strokeWidth={2.5} />
            <ChevronRight size={18} className="text-black" strokeWidth={2.5} />
          </div>
        </motion.div>
      </div>
    </Link>
  )
}
