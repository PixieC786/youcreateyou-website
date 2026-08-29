'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { beginCheckout } from '@/lib/checkout'

const SHOW_AT_SCROLL_DEPTH = 0.75

export default function BuyWidget() {
  const [nearEnd, setNearEnd] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [loading, setLoading] = useState(false)

  // Shows once the visitor has scrolled through most of the page (75% depth)
  // rather than a fixed section, so it appears near the end of any page's
  // scroll instead of popping up early on longer pages.
  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const depth = scrollable > 0 ? window.scrollY / scrollable : 0
      setNearEnd(depth >= SHOW_AT_SCROLL_DEPTH)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const dismiss = () => setDismissed(true)

  const buyNow = async () => {
    setLoading(true)
    await beginCheckout()
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {nearEnd && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-5 sm:right-5 z-[80] sm:w-[260px] rounded-xl overflow-hidden"
          style={{
            background: '#150f28',
            border: '1px solid rgba(210,175,255,0.16)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
          }}
          role="dialog"
          aria-label="The Transmission — Ebook and App bundle"
        >
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full hover:bg-[rgba(210,175,255,0.1)] transition-colors duration-200"
            style={{ color: 'rgba(220,205,255,0.55)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="relative p-4">
            <span
              className="font-mono text-[9px] tracking-[0.16em] uppercase mb-2 block"
              style={{ color: 'rgba(220,195,255,0.6)' }}
            >
              App + Ebook — The Transmission
            </span>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-[1.3rem] font-light" style={{ color: '#f8f5ff' }}>$97</span>
              <span className="font-mono text-[10px]" style={{ color: 'rgba(220,195,255,0.55)' }}>one time</span>
            </div>

            <button
              onClick={buyNow}
              disabled={loading}
              className="w-full py-[10px] rounded-full font-mono text-[10px] tracking-[0.16em] uppercase transition-opacity duration-300 hover:opacity-90"
              style={{
                background: 'rgba(175,110,255,0.14)',
                border: '1px solid rgba(210,175,255,0.3)',
                color: '#f8f5ff',
                opacity: loading ? 0.65 : 1,
              }}
            >
              {loading ? 'Opening…' : 'Begin Your Practice'}
            </button>

            <p
              className="font-mono text-[9px] tracking-[0.06em] mt-2 text-center"
              style={{ color: 'rgba(210,175,255,0.4)' }}
            >
              90-day guarantee
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
