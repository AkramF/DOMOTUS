'use client'

import Image from 'next/image'

export default function HeroMaisonConnectee() {
  return (
    <div className="relative w-full h-screen bg-black" aria-label="Smarthome - Domotique intelligente">
      {/* Image Layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/maison-connectee-hero.webp"
          alt="Villa intelligente avec éclairage adaptatif et domotique multi-protocoles par Domotus Maroc"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Title Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative text-center">
          <h1
            className="font-black text-white leading-none text-balance"
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 18vw)',
              letterSpacing: '-0.04em',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              fontWeight: 900,
            }}
          >
            Smarthome
          </h1>
        </div>
      </div>
    </div>
  )
}
