'use client'

import Image from 'next/image'

export default function HeroMaisonConnectee() {
  return (
    <div className="relative">
      {/* Fixed Background Hero */}
      <div 
        className="fixed inset-0 w-full h-screen bg-black z-0"
        aria-label="Smarthome - Domotique intelligente"
      >
        {/* Base: Black Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/villa-prestige.jpg"
            alt="Villa de prestige équipée en domotique KNX par Domotus Maroc"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>

        {/* Title Layer */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none pt-24">
          <div className="relative text-center">
            <h1
              className="font-black text-white leading-none text-balance"
              style={{
                fontSize: 'clamp(3rem, 20vw, 25vw)',
                letterSpacing: '-0.04em',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                fontWeight: 900,
              }}
            >
              Smarthome
            </h1>
            {/* Copyright Symbol */}
            <div className="absolute -bottom-6 -right-12 text-white/40 text-4xl">©</div>
          </div>
        </div>
      </div>

      {/* Spacer - This creates the scroll space for sections to cover the hero */}
      <div className="relative z-20 h-screen bg-transparent" />
    </div>
  )
}
