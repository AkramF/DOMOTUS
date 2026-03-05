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
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-screen lg:h-full">
      {/* Sidebar Navigation — Left */}
      <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-4 lg:pb-0 scrollbar-hide">
        {projects.map((project, idx) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(idx)}
            className="flex-shrink-0 w-32 h-32 lg:w-full lg:aspect-square rounded-2xl overflow-hidden transition-all duration-300 relative group"
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
              <div className="absolute inset-0 bg-black flex items-center justify-center p-4">
                <div className="text-center">
                  <h3 className="font-bold text-[#efd555] text-sm lg:text-base line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-1">{project.location}</p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Content — Right */}
      <div className="flex-1 flex flex-col lg:gap-4">
        {/* Header */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2 className="font-black text-2xl lg:text-3xl uppercase tracking-tight text-black">
                {current.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
                {current.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          key={`image-${current.id}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex-1 rounded-3xl overflow-hidden min-h-96 lg:min-h-0"
        >
          <Image
            src={current.image}
            alt={current.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 75vw"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}
