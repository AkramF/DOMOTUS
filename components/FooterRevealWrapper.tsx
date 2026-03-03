'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface FooterRevealWrapperProps {
  children: ReactNode
  footer: ReactNode
}

export default function FooterRevealWrapper({ children, footer }: FooterRevealWrapperProps) {
  const footerRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight)
    }

    // Recalculate on window resize for responsiveness
    const handleResize = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Wrapper — Higher z-index, white background to hide footer */}
      <div
        className="relative z-20 bg-white"
        style={{
          paddingBottom: `${footerHeight}px`,
        }}
      >
        {children}
      </div>

      {/* Sticky Footer — Lower z-index, positioned sticky at bottom */}
      <footer
        ref={footerRef}
        className="sticky bottom-0 z-10 w-full"
      >
        {footer}
      </footer>
    </div>
  )
}
