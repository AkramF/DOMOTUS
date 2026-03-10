'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Shield, Thermometer, Wifi, Volume2, Activity } from 'lucide-react'

interface PortfolioProject {
  id: string
  title: string
  location: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
}

interface ArchitecturePortfolioProps {
  projects: PortfolioProject[]
}

const getIconForProject = (projectTitle: string) => {
  switch (projectTitle.toLowerCase()) {
    case 'éclairage intelligent':
      return <Lightbulb size={48} className="text-white" />
    case 'sécurité & accès':
      return <Shield size={48} className="text-white" />
    case 'gestion énergie & climat':
      return <Thermometer size={48} className="text-white" />
    case 'réseaux & connectivité':
      return <Wifi size={48} className="text-white" />
    case 'audio & divertissement':
      return <Volume2 size={48} className="text-white" />
    case 'supervision globale (bms)':
      return <Activity size={48} className="text-white" />
    default:
      return <Activity size={48} className="text-white" />
  }
}

export default function ArchitecturePortfolio({ projects }: ArchitecturePortfolioProps) {
  const [activeProject, setActiveProject] = useState(0)
  const current = projects[activeProject]

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full">
      {/* Sidebar Navigation — Mobile: horizontal scroll, Desktop: vertical column */}
      <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 lg:gap-4 overflow-x-auto lg:overflow-x-hidden overflow-y-hidden pb-2 lg:pb-0 scrollbar-hide">
        {projects.map((project, idx) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(idx)}
            className="flex-shrink-0 w-28 h-28 lg:w-full lg:h-32 rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 relative group"
            aria-label={`Select ${project.title}`}
            aria-pressed={activeProject === idx}
          >
            {/* Active State - Icon only on black background */}
            {activeProject === idx ? (
              <>
                <div 
                  className="absolute inset-0"
                  style={{
                    background: '#000000',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {getIconForProject(project.title)}
                </div>
              </>
            ) : (
              // Inactive State - solid black with project info
              <div className="absolute inset-0 bg-black flex items-center justify-center p-2 lg:p-3">
                <div className="text-center">
                  <h3 className="font-bold text-[#efd555] text-xs lg:text-sm line-clamp-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[9px] lg:text-xs text-gray-400 mt-1 lg:mt-2 line-clamp-1">{project.location}</p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Content — Right side */}
      <div className="flex-1 flex flex-col gap-3 lg:gap-6 w-full">
        {/* Header */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 lg:gap-3"
        >
          <h2 className="font-black text-xl lg:text-3xl uppercase tracking-tight text-black leading-tight">
            {current.title}
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3 lg:line-clamp-4">
            {current.description}
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          key={`image-${current.id}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden h-56 sm:h-72 md:h-80 lg:h-96"
        >
          <Image
            src={current.image}
            alt={current.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 75vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}
