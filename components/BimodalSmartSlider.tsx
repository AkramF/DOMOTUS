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
  const [position, setPosition] = useState<'center' | 'left' | 'right'>('center')
  const [isDragging, setIsDragging] = useState(false)
  const [glowIntensity, setGlowIntensity] = useState(0)
  const [glowSide, setGlowSide] = useState<'left' | 'right' | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  // Measure track width on mount
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth)
    }
  }, [])

  // Breathing animation - subtle scale pulse
  const breathingVariants = {
    animate: {
      scale: [1, 1.08, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  // Handle drag end with threshold logic
  const handleDragEnd = (info: any) => {
    setIsDragging(false)
    const dragDistance = info.offset.x

    if (dragDistance < -100) {
      // Dragged left - trigger residential
      setPosition('left')
      if (onResidential) onResidential()
    } else if (dragDistance > 100) {
      // Dragged right - trigger pro
      setPosition('right')
      if (onPro) onPro()
    } else {
      // Dead zone - snap back to center
      setPosition('center')
      setGlowIntensity(0)
      setGlowSide(null)
    }
  }

  // Handle drag during movement for glow effect
  const handleDrag = (info: any) => {
    const dragDistance = info.offset.x
    const intensity = Math.min(Math.abs(dragDistance) / 100, 1)
    setGlowIntensity(intensity)

    if (dragDistance < -20) {
      setGlowSide('left')
    } else if (dragDistance > 20) {
      setGlowSide('right')
    } else {
      setGlowSide(null)
    }
  }

  // Calculate drag constraints based on track width
  const dragConstraints = {
    left: -(trackWidth / 2 - 32),
    right: trackWidth / 2 - 32,
  }

  // Determine initial x position based on current state
  const getInitialX = () => {
    if (position === 'left') return dragConstraints.left
    if (position === 'right') return dragConstraints.right
    return 0
  }

  // Determine link based on position
  const href = position === 'left' ? residentialHref : position === 'right' ? proHref : '#'

  return (
    <Link href={href} onClick={(e) => {
      if (position === 'center') {
        e.preventDefault()
      }
    }}>
      <div
        ref={trackRef}
        className="relative w-full max-w-[400px] h-16 rounded-full overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
        style={{
          backgroundColor: '#000000',
          border: '1px solid rgba(239, 213, 85, 0.3)',
        }}
      >
        {/* Dynamic glow background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: glowIntensity,
          }}
          transition={{ duration: 0.2 }}
        >
          {glowSide === 'left' && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle 200px at 0% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
              }}
            />
          )}
          {glowSide === 'right' && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle 200px at 100% 50%, rgba(239, 213, 85, 0.2) 0%, transparent 70%)',
              }}
            />
          )}
        </motion.div>

        {/* Left label */}
        <motion.div
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ opacity: isDragging && glowSide === 'left' ? 0.3 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="text-white text-xs font-medium tracking-widest uppercase whitespace-nowrap"
            style={{ fontSize: '10px', letterSpacing: '0.1em' }}
          >
            Maison connectée
          </span>
        </motion.div>

        {/* Right label */}
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          animate={{
            opacity: isDragging && glowSide === 'right' ? 0.3 : 0.7,
            color: isDragging && glowSide === 'right' ? '#efd555' : 'rgba(239, 213, 85, 0.7)',
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase whitespace-nowrap" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            Espace Pro
          </span>
        </motion.div>

        {/* Central draggable orb */}
        <motion.div
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={{
            x: position === 'left' ? dragConstraints.left : position === 'right' ? dragConstraints.right : 0,
          }}
          transition={{
            type: position === 'center' ? 'spring' : 'spring',
            stiffness: position === 'center' ? 400 : 300,
            damping: position === 'center' ? 30 : 25,
          }}
          variants={position === 'center' ? breathingVariants : {}}
          animate={position === 'center' ? 'animate' : undefined}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
          style={{
            backgroundColor: '#000000',
            border: '1px solid #efd555',
            boxShadow: '0 0 20px rgba(239, 213, 85, 0.3)',
          }}
        >
          {/* Double chevron icon */}
          <div className="flex items-center justify-center gap-0.5">
            <ChevronLeft size={14} className="text-[#efd555]" strokeWidth={3} />
            <ChevronRight size={14} className="text-[#efd555]" strokeWidth={3} />
          </div>
        </motion.div>
      </div>
    </Link>
  )
}
