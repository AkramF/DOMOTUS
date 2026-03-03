'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const smartHomeImages = [
  {
    id: 1,
    image: '/images/smart-home-1.jpg',
    alt: 'Modern living room with smart lighting',
  },
  {
    id: 2,
    image: '/images/smart-home-2.jpg',
    alt: 'Kitchen with smart appliances',
  },
  {
    id: 3,
    image: '/images/smart-home-3.jpg',
    alt: 'Bedroom with automated blinds',
  },
  {
    id: 4,
    image: '/images/smart-home-4.jpg',
    alt: 'Home theater system',
  },
  {
    id: 5,
    image: '/images/smart-home-5.jpg',
    alt: 'Outdoor terrace with connected features',
  },
]

export default function SmartHomeSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Cluster - Left */}
          <div className="relative h-96 lg:h-[500px]">
            <div style={{ position: 'relative' }} className="w-full h-full flex items-center justify-center">
              {/* Staggered pill-shaped images */}
              {smartHomeImages.map((item, idx) => {
                const positions = [
                  { top: '0%', left: '5%', width: 120, height: 200 },
                  { top: '15%', left: '25%', width: 140, height: 220 },
                  { top: '35%', left: '10%', width: 130, height: 210 },
                  { top: '50%', left: '30%', width: 135, height: 215 },
                  { top: '20%', left: '50%', width: 125, height: 205 },
                ]

                const pos = positions[idx] || { top: '0%', left: '0%', width: 120, height: 200 }

                return (
                  <div
                    key={item.id}
                    className="absolute rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      width: `${pos.width}px`,
                      height: `${pos.height}px`,
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Typography & CTA - Right */}
          <div className="flex flex-col gap-8">
            {/* Title with copyright symbol */}
            <div>
              <h2 className="font-black text-black leading-tight text-balance" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}>
                Domesticating your spaces
                <br />
                for comfort and efficiency
                <span className="text-sm ml-2 align-super">©</span>
              </h2>
            </div>

            {/* Body text */}
            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 w-fit"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
