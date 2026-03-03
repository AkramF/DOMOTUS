"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

interface ArchitecturePortfolioProps {
  projects: PortfolioProject[];
}

export default function ArchitecturePortfolio({ projects }: ArchitecturePortfolioProps) {
  const [activeProject, setActiveProject] = useState(0);
  const current = projects[activeProject];

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-screen lg:h-full">
      {/* Sidebar Navigation — Left */}
      <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-4 lg:pb-0 scrollbar-hide">
        {projects.map((project, idx) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(idx)}
            className={`flex-shrink-0 w-32 h-32 lg:w-full lg:aspect-square rounded-2xl overflow-hidden transition-all duration-300 relative group ${
              activeProject === idx ? "ring-2 ring-[#EAB308]" : ""
            }`}
            aria-label={`Select ${project.title}`}
            aria-pressed={activeProject === idx}
          >
            {/* Active State - with image background */}
            {activeProject === idx ? (
              <>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 128px, 25vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-bold text-sm lg:text-base">{project.title}</h3>
                  <p className="text-xs text-white/80">{project.location}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-white/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Inactive State - solid black
              <div className="absolute inset-0 bg-black flex items-center justify-center p-4">
                <div className="text-center">
                  <h3 className="font-bold text-[#EAB308] text-sm lg:text-base line-clamp-2">
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
      <div className="flex-1 flex flex-col lg:gap-6">
        {/* Header */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-black flex-shrink-0 mt-2" />
            <div className="flex-1">
              <h2 className="font-black text-2xl lg:text-4xl uppercase tracking-tight text-black">
                {current.title}
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          {/* View Project Button */}
          <Link
            href="#"
            className="inline-flex items-center justify-between w-fit px-6 py-3 bg-black rounded-full hover:bg-black/90 transition-colors duration-300"
          >
            <span className="text-white font-semibold text-sm">View project</span>
            <div className="ml-4 w-8 h-8 rounded-full bg-[#EAB308] flex items-center justify-center flex-shrink-0">
              <ArrowRight size={16} className="text-black" />
            </div>
          </Link>
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
  );
}
