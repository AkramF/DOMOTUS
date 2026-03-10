'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BimodalSmartSliderProps {
  onResidential?: () => void
  onPro?: () => void
  residentialHref?: string
  proHref?: string
}

export function BimodalSmartSlider({
  onResidential,
  onPro,
  residentialHref = '/maison-connectee',
  proHref = '/architectes',
}: BimodalSmartSliderProps) {
  const [dragX, setDragX] = useState(0)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [confirmedSide, setConfirmedSide] = useState<'left' | 'right' | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth)
    }
  }, [])

  // Calculate normalized position (-1 to 1, where 0 is center)
  const maxDrag = trackWidth / 2 - 32
  const normalizedPosition = maxDrag > 0 ? dragX / maxDrag : 0

  // Determine which side is dominant based on drag position
  const leftDominance = Math.max(0, Math.min(1, 0.5 - normalizedPosition * 0.5))
  const rightDominance = Math.max(0, Math.min(1, 0.5 + normalizedPosition * 0.5))

  // Calculate background blend - left side (white) opacity
  const leftBgOpacity = leftDominance
  const rightBgOpacity = rightDominance

  // Determine text colors based on background dominance
  const leftTextColor = leftDominance > 0.6 ? '#000000' : '#ffffff'
  const rightTextColor = rightDominance > 0.6 ? '#ffffff' : '#efd555'

  const handleDragEnd = () => {
    // Check if dragged far enough to confirm
    if (Math.abs(dragX) > maxDrag * 0.3) {
      if (dragX < 0) {
        // Snap to left
        setDragX(-maxDrag)
        setIsConfirmed(true)
        setConfirmedSide('left')
        if (onResidential) onResidential()
      } else {
        // Snap to right
        setDragX(maxDrag)
        setIsConfirmed(true)
        setConfirmedSide('right')
        if (onPro) onPro()
      }
    } else {
      // Snap back to center
      setDragX(0)
      setIsConfirmed(false)
      setConfirmedSide(null)
    }
  }

  const handleDrag = (event: any, info: any) => {
    const newX = info.offset.x
    // Constrain drag within bounds
    if (Math.abs(newX) <= maxDrag) {
      setDragX(newX)
    }
  }

  const href = confirmedSide === 'left' ? residentialHref : confirmedSide === 'right' ? proHref : '#'

  return (
    <Link href={href} onClick={(e) => {
      if (!isConfirmed) {
        e.preventDefault()
      }
    }}>
      <div
        ref={trackRef}
        className="relative w-full max-w-[500px] h-20 rounded-full overflow-hidden select-none"
        style={{
          touchAction: 'none',
        }}
      >
        {/* Left side background (WHITE) - controlled by leftDominance */}
        <motion.div
          className="absolute inset-0 left-0 right-1/2 pointer-events-none"
          style={{
            backgroundColor: '#ffffff',
            opacity: leftBgOpacity,
          }}
          animate={{ opacity: leftBgOpacity }}
          transition={{ duration: 0.1 }}
        />

        {/* Right side background (YELLOW) - controlled by rightDominance */}
        <motion.div
          className="absolute inset-0 right-0 left-1/2 pointer-events-none"
          style={{
            backgroundColor: '#efd555',
            opacity: rightBgOpacity,
          }}
          animate={{ opacity: rightBgOpacity }}
          transition={{ duration: 0.1 }}
        />

        {/* Base dark background (fallback) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: '#000000',
            opacity: 1 - Math.max(leftBgOpacity, rightBgOpacity),
          }}
        />

        {/* Left label - positioned at left, text color changes based on dominance */}
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none z-5"
          animate={{ color: leftTextColor, opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          <span
            className="font-black tracking-widest uppercase whitespace-nowrap"
            style={{
              fontSize: '13px',
              letterSpacing: '0.15em',
              fontWeight: 900,
            }}
          >
            Maison connectée
          </span>
        </motion.div>

        {/* Right label - positioned at right, text color changes based on dominance */}
        <motion.div
          className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-5"
          animate={{ color: rightTextColor, opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          <span
            className="font-black tracking-widest uppercase whitespace-nowrap"
            style={{
              fontSize: '13px',
              letterSpacing: '0.15em',
              fontWeight: 900,
            }}
          >
            Espace Pro
          </span>
        </motion.div>

        {/* Central draggable yellow orb */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -maxDrag, right: maxDrag }}
          dragElastic={0.15}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={{
            x: dragX,
          }}
          transition={{
            type: 'spring',
            stiffness: isConfirmed ? 400 : 300,
            damping: isConfirmed ? 35 : 25,
          }}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-20"
          style={{
            backgroundColor: '#efd555',
            boxShadow: '0 0 30px rgba(239, 213, 85, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* Bidirectional chevrons */}
          <div className="flex items-center justify-center gap-1">
            <ChevronLeft size={16} className="text-black" strokeWidth={2.5} />
            <ChevronRight size={16} className="text-black" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Border styling - always yellow/dark blend */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            border: '2px solid rgba(239, 213, 85, 0.4)',
          }}
        />
      </div>
    </Link>
  )
}
