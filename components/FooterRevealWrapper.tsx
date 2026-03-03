'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface FooterRevealWrapperProps {
  children: ReactNode
  footer: ReactNode
}

export default function FooterRevealWrapper({ children, footer }: FooterRevealWrapperProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState<number>(0)

  useEffect(() => {
    // Initial measurement after DOM render
    const timer = setTimeout(() => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight
        setFooterHeight(height)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!footerRef.current) return

    // Create ResizeObserver to detect footer height changes
    const resizeObserver = new ResizeObserver(() => {
      if (footerRef.current) {
        const newHeight = footerRef.current.offsetHeight
        setFooterHeight(newHeight)
      }
    })

    resizeObserver.observe(footerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  // Apply padding-bottom to content wrapper (not margin)
  useEffect(() => {
    if (contentRef.current && footerHeight > 0) {
      contentRef.current.style.paddingBottom = `${footerHeight}px`
    }
  }, [footerHeight])

  return (
    <>
      {/* Content Wrapper — Main content sits on top of footer */}
      <div
        ref={contentRef}
        className="relative z-20 bg-white"
      >
        {children}
      </div>

      {/* Footer — Sticky, positioned behind content */}
      <footer
        ref={footerRef}
        className="sticky bottom-0 z-0"
      >
        {footer}
      </footer>
    </>
  )
}
