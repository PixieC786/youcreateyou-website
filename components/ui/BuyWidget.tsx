'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SESSION_KEY = 'ycy_buy_widget_seen'
const SCROLL_TRIGGER_RATIO = 0.3

const YCY_SUPABASE_URL = 'https://xdfxawwydrypjzgpncam.supabase.co'
const YCY_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZnhhd3d5ZHJ5cGp6Z3BuY2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMjI5MTUsImV4cCI6MjA5MDg5ODkxNX0.N-UQ0HuPQS-1LUPBFprEgbsjndPSZ_cbh3HYuQTtNiw'

export default function BuyWidget() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const dismiss = () => setDismissed(true)

  const buyNow = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${YCY_SUPABASE_URL}/functions/v1/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': YCY_SUPABASE_KEY },
        body: JSON.stringify({
          plan: 'ebook_app',
          email: null,
          returnUrl: 'https://app.youcreateyou.life',
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setLoading(false)
        alert('Could not open checkout. Please try again.')
      }
    } catch {
      setLoading(false)
      alert('Could not open checkout. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 40, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-[80] w-[300px] max-w-[calc(100vw-40px)] rounded-2xl overflow-hidden"
          style={{
            background: '#0c0918',
            border: '1px solid rgba(210,175,255,0.16)',
            boxShadow: '0 0 60px rgba(140,70,255,0.16), 0 20px 60px rgba(0,0,0,0.6)',
          }}
          role="dialog"
          aria-label="The Transmission — Ebook and App bundle"
        >
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full hover:bg-[rgba(210,175,255,0.08)] transition-colors duration-200"
            style={{ color: 'rgba(210,175,255,0.45)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="p-5">
            <span
              className="font-mono text-[8px] tracking-[0.28em] uppercase mb-3 block"
              style={{ color: 'rgba(210,175,255,0.5)' }}
            >
              The Transmission + App
            </span>

            <h3
              className="font-display font-light italic leading-[1.2] mb-3"
              style={{ fontSize: '1.15rem', color: '#f8f5ff' }}
            >
              Begin your practice.
            </h3>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-[1.6rem] font-light" style={{ color: '#f8f5ff' }}>$67</span>
              <span className="font-mono text-[9px]" style={{ color: 'rgba(210,175,255,0.45)' }}>one time</span>
            </div>

            <div className="flex flex-col gap-1.5 mb-4">
              <p className="font-mono text-[8px] tracking-[0.08em]" style={{ color: 'rgba(210,175,255,0.4)' }}>
                ✦ Not available anywhere else
              </p>
              <p className="font-mono text-[8px] tracking-[0.08em]" style={{ color: 'rgba(210,175,255,0.4)' }}>
                ✦ Pay in 4 interest-free with Klarna
              </p>
              <p className="font-mono text-[8px] tracking-[0.08em]" style={{ color: 'rgba(210,175,255,0.4)' }}>
                ✦ $97 once the audiobook is included
              </p>
            </div>

            <button
              onClick={buyNow}
              disabled={loading}
              className="w-full py-[13px] rounded-full font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, rgba(155,90,230,0.95), rgba(120,60,200,0.95))',
                color: '#f8f5ff',
                opacity: loading ? 0.65 : 1,
                boxShadow: '0 0 24px rgba(140,70,255,0.3)',
              }}
            >
              {loading ? 'Opening checkout…' : 'Begin Your Practice'}
            </button>

            <p
              className="font-mono text-[8px] tracking-[0.1em] mt-3 text-center"
              style={{ color: 'rgba(210,175,255,0.28)' }}
            >
              90-day guarantee · Your data stays with you
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
