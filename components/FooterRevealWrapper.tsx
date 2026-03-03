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
    // Create ResizeObserver to measure footer height dynamically
    const resizeObserver = new ResizeObserver(() => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight
        setFooterHeight(height)
        if (contentRef.current) {
          contentRef.current.style.marginBottom = `${height}px`
        }
      }
    })

    // Start observing footer
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current)
      // Initial measurement
      const height = footerRef.current.offsetHeight
      setFooterHeight(height)
      if (contentRef.current) {
        contentRef.current.style.marginBottom = `${height}px`
      }
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Content Wrapper — White background, relative position, z-20 */}
      <div
        ref={contentRef}
        className="relative z-20 bg-white"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        {children}
      </div>

      {/* Footer — Sticky positioning, z-10 */}
      <footer
        ref={footerRef}
        className="sticky bottom-0 z-10"
      >
        {footer}
      </footer>
    </>
  )
}
