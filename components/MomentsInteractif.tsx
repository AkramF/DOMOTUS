'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Moment {
  id: string
  num?: string
  title: string
  description: string
  action: string
  image: string
  imageAlt: string
}

interface MomentsInteractifProps {
  moments: Moment[]
}

export default function MomentsInteractif({ moments }: MomentsInteractifProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="relative z-20 bg-black min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#efd555] font-semibold mb-4">Vos moments de vie</p>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight text-white mb-6 text-balance">
            Automatisez<br />
            <span className="text-[#efd555]">vos routines</span> quotidiennes.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-colors"
          >
            En savoir plus
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Scenarios List */}
        <div className="space-y-4">
          {moments.map((moment, idx) => (
            <div
              key={moment.id}
              className="relative"
              onMouseEnter={() => setHoveredId(moment.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Main Row Container */}
              <motion.div
                animate={{
                  backgroundColor: hoveredId === moment.id ? '#ffffff' : 'transparent',
                  borderRadius: hoveredId === moment.id ? '12px' : '0px',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="relative p-8 lg:p-12 overflow-hidden"
              >
                {/* Content Grid */}
                <div className="grid grid-cols-12 gap-6 items-center relative z-10">
                  {/* Time */}
                  <div className="col-span-2 lg:col-span-1">
                    <motion.p
                      animate={{
                        color: hoveredId === moment.id ? '#000000' : '#666666',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-black"
                    >
                      {moment.num || String(idx + 1).padStart(3, '0')}
                    </motion.p>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 lg:col-span-4">
                    <motion.h3
                      animate={{
                        color: hoveredId === moment.id ? '#000000' : '#ffffff',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl lg:text-3xl font-black"
                    >
                      {moment.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 lg:col-span-5 lg:col-start-7">
                    <motion.p
                      animate={{
                        color: hoveredId === moment.id ? '#000000' : '#999999',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm lg:text-base leading-relaxed"
                    >
                      {moment.description}
                    </motion.p>
                  </div>

                  {/* Learn More Link - Moved to Left */}
                  <div className="col-span-12 lg:col-span-2 lg:col-start-7">
                    <motion.a
                      animate={{
                        color: hoveredId === moment.id ? '#000000' : '#ffffff',
                      }}
                      transition={{ duration: 0.3 }}
                      href="#"
                      className="text-xs font-black uppercase tracking-widest underline inline-block hover:opacity-70 transition-opacity"
                    >
                      En savoir plus
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Polaroid Card - Only visible on hover */}
              {hoveredId === moment.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: 20, y: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                  style={{
                    perspective: '1200px',
                  }}
                >
                  <motion.div
                    animate={{
                      rotateX: -8,
                      rotateZ: -15,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative w-56 h-72 rounded-sm"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* White Bezel Border */}
                    <div className="absolute inset-0 bg-white p-4 rounded-sm shadow-2xl">
                      {/* Image Container */}
                      <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                        <Image
                          src={moment.image}
                          alt={moment.imageAlt}
                          fill
                          sizes="224px"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    {/* Soft Drop Shadow */}
                    <div
                      className="absolute inset-0 -z-10 blur-3xl opacity-40"
                      style={{
                        background: 'radial-gradient(ellipse, rgba(0,0,0,0.3), transparent)',
                        transform: 'translateZ(-20px)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
