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
    // Small delay to allow DOM to fully render
    const timer = setTimeout(() => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight
        setFooterHeight(height)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (footerRef.current && footerHeight > 0) {
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
    }
  }, [footerHeight])

  // Apply margin-bottom to content wrapper
  useEffect(() => {
    if (contentRef.current && footerHeight > 0) {
      contentRef.current.style.marginBottom = `${footerHeight}px`
    }
  }, [footerHeight])

  return (
    <>
      {/* Content Wrapper — White background, relative position, z-20 */}
      <div
        ref={contentRef}
        className="relative z-20 bg-white"
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
