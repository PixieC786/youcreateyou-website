'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { beginCheckout } from '@/lib/checkout'

const SESSION_KEY = 'ycy_buy_widget_seen'
const SCROLL_TRIGGER_RATIO = 0.3

export default function BuyWidget() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [obscured, setObscured] = useState(false)
  const triggeredRef = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return

    const handleScroll = () => {
      if (triggeredRef.current) return
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll > 0 && scrolled / maxScroll >= SCROLL_TRIGGER_RATIO) {
        triggeredRef.current = true
        setVisible(true)
        sessionStorage.setItem(SESSION_KEY, '1')
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // The live Constellation map has its own bottom-right buttons — stay out
  // of their way rather than covering them whenever that section is in view.
  useEffect(() => {
    const target = document.getElementById('constellation-map')
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setObscured(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const dismiss = () => setDismissed(true)

  const buyNow = async () => {
    setLoading(true)
    await beginCheckout()
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && !obscured && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-5 sm:right-5 z-[80] sm:w-[340px] rounded-2xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 140% 100% at 20% -10%, rgba(170,110,255,0.32) 0%, rgba(90,45,170,0.16) 38%, rgba(18,13,32,0.98) 72%), #150f28',
            border: '1px solid rgba(210,175,255,0.28)',
          }}
          role="dialog"
          aria-label="The Transmission — Ebook and App bundle"
        >
          {/* Breathing glow — gives the card a living, magical quality instead of a flat static box */}
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-2xl"
            animate={{
              boxShadow: [
                '0 0 40px rgba(170,110,255,0.22), 0 20px 60px rgba(0,0,0,0.55)',
                '0 0 70px rgba(190,130,255,0.38), 0 20px 60px rgba(0,0,0,0.55)',
                '0 0 40px rgba(170,110,255,0.22), 0 20px 60px rgba(0,0,0,0.55)',
              ],
            }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          />

          {/* Scattered sparkle stars for atmosphere */}
          <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <motion.span
              className="absolute text-[8px]"
              style={{ top: '12%', right: '18%', color: 'rgba(220,190,255,0.7)' }}
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
            >✦</motion.span>
            <motion.span
              className="absolute text-[6px]"
              style={{ top: '55%', left: '8%', color: 'rgba(220,190,255,0.55)' }}
              animate={{ opacity: [0.15, 0.7, 0.15] }}
              transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut', delay: 0.8 }}
            >✦</motion.span>
          </div>

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

          <div className="relative p-6">
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
              style={{ color: 'rgba(220,195,255,0.7)' }}
            >
              <span style={{ color: 'rgba(200,150,255,0.9)' }}>✦</span>
              App + Ebook &quot;The Transmission&quot;
            </span>

            <h3
              className="font-display font-light italic leading-[1.2] mb-3 text-[1.35rem]"
              style={{ color: '#f8f5ff' }}
            >
              Begin your practice.
            </h3>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-[1.9rem] font-light" style={{ color: '#f8f5ff' }}>$79</span>
              <span className="font-mono text-[11px]" style={{ color: 'rgba(220,195,255,0.65)' }}>one time</span>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <p className="font-mono text-[11px] tracking-[0.05em]" style={{ color: 'rgba(220,205,255,0.6)' }}>
                ✦ Not available anywhere else
              </p>
              <p className="font-mono text-[11px] tracking-[0.05em]" style={{ color: 'rgba(220,205,255,0.6)' }}>
                ✦ Pay in 4 interest-free with Klarna
              </p>
              <p className="font-mono text-[11px] tracking-[0.05em]" style={{ color: 'rgba(220,205,255,0.6)' }}>
                ✦ $97 once the audiobook is included
              </p>
            </div>

            <motion.button
              onClick={buyNow}
              disabled={loading}
              className="w-full py-[15px] rounded-full font-mono text-[11px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, rgba(175,110,255,0.95), rgba(130,65,220,0.95))',
                color: '#f8f5ff',
                opacity: loading ? 0.65 : 1,
              }}
              animate={{
                boxShadow: [
                  '0 0 22px rgba(170,110,255,0.35)',
                  '0 0 34px rgba(190,130,255,0.55)',
                  '0 0 22px rgba(170,110,255,0.35)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
            >
              {loading ? 'Opening checkout…' : 'Begin Your Practice'}
            </motion.button>

            <p
              className="font-mono text-[10px] tracking-[0.08em] mt-3 text-center"
              style={{ color: 'rgba(210,175,255,0.45)' }}
            >
              90-day guarantee · Your data stays with you
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
