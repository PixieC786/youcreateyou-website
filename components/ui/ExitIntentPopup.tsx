'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'ycy_exit_popup_seen'
const MIN_MS = 15_000

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const readyRef = useRef(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => { readyRef.current = true }, MIN_MS)

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && readyRef.current) {
        setVisible(true)
        localStorage.setItem(STORAGE_KEY, '1')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const dismiss = () => setVisible(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setTimeout(() => setVisible(false), 2800)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[rgba(7,5,15,0.82)] backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            role="dialog"
            aria-modal
          >
            <div
              className="relative w-full max-w-[820px] overflow-hidden rounded-3xl flex flex-col md:flex-row"
              style={{
                background: '#0c0918',
                border: '1px solid rgba(210,175,255,0.14)',
                boxShadow: '0 0 100px rgba(140,70,255,0.18), 0 40px 120px rgba(0,0,0,0.7)',
              }}
            >
              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[rgba(210,175,255,0.08)] transition-colors duration-200"
                style={{ color: 'rgba(210,175,255,0.45)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Left — cosmic visual */}
              <div
                className="hidden md:flex relative w-[300px] flex-shrink-0 items-center justify-center overflow-hidden"
                style={{
                  background: 'radial-gradient(ellipse at 45% 50%, rgba(130,55,240,0.32) 0%, rgba(70,25,160,0.18) 50%, transparent 78%)',
                }}
              >
                {/* Nebula atmosphere */}
                <div aria-hidden className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse 75% 55% at 25% 35%, rgba(255,130,195,0.13) 0%, transparent 60%)',
                }} />
                <div aria-hidden className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse 55% 65% at 75% 68%, rgba(90,55,240,0.18) 0%, transparent 60%)',
                }} />

                {/* Rotating sacred geometry */}
                <motion.svg
                  width="230" height="230" viewBox="0 0 400 400" fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 95, ease: 'linear' }}
                  style={{ opacity: 0.3 }}
                >
                  <polygon points="200,10 390,390 10,390" stroke="rgba(210,175,255,1)" strokeWidth="0.55" fill="none" />
                  <polygon points="200,390 390,10 10,10" stroke="rgba(210,175,255,1)" strokeWidth="0.55" fill="none" />
                  <circle cx="200" cy="200" r="188" stroke="rgba(210,175,255,1)" strokeWidth="0.45" fill="none" />
                  <circle cx="200" cy="200" r="125" stroke="rgba(210,175,255,1)" strokeWidth="0.38" fill="none" />
                  <circle cx="200" cy="200" r="62" stroke="rgba(210,175,255,1)" strokeWidth="0.32" fill="none" />
                </motion.svg>

                {/* Central breathing orb */}
                <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    style={{
                      width: 72, height: 72, borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(200,155,255,0.7) 0%, rgba(140,80,255,0.25) 55%, transparent 72%)',
                      filter: 'blur(6px)',
                    }}
                  />
                </div>

                {/* Bottom quote */}
                <p
                  className="absolute bottom-8 left-6 right-6 text-center font-display italic text-[0.78rem] leading-[1.8]"
                  style={{ color: 'rgba(210,175,255,0.42)' }}
                >
                  "The cave you fear to enter<br />holds the treasure you seek."
                </p>
              </div>

              {/* Right — content */}
              <div className="flex-1 p-8 md:p-10 md:pl-12 flex flex-col justify-center">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-10"
                  >
                    <p
                      className="font-display italic text-[1.6rem] font-light leading-[1.3] mb-3"
                      style={{ color: '#f8f5ff' }}
                    >
                      It&apos;s on its way.
                    </p>
                    <p className="font-body text-sm" style={{ color: 'rgba(210,175,255,0.55)' }}>
                      Welcome to the practice.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <span
                      className="font-mono text-[9px] tracking-[0.32em] uppercase mb-6 block"
                      style={{ color: 'rgba(210,175,255,0.48)' }}
                    >
                      Before you go
                    </span>

                    <h2
                      className="font-display font-light italic leading-[1.13] mb-5"
                      style={{
                        fontSize: 'clamp(1.55rem, 3vw, 2.15rem)',
                        color: '#f8f5ff',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      The fear you keep avoiding
                      <br />
                      <span style={{
                        background: 'linear-gradient(135deg, #e8d0ff 0%, #b388ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                        is holding a gift.
                      </span>
                    </h2>

                    <p
                      className="font-body text-[0.9rem] leading-[1.85] mb-8"
                      style={{ color: 'rgba(240,236,255,0.48)' }}
                    >
                      Receive the Fear Alchemist transmission — the complete
                      6-stage practice from the book. Free.
                    </p>

                    <form onSubmit={submit} className="flex flex-col gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full px-5 py-[14px] rounded-full font-body text-sm outline-none transition-all duration-200"
                        style={{
                          background: 'rgba(210,175,255,0.06)',
                          border: '1px solid rgba(210,175,255,0.18)',
                          color: '#f0ecff',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(210,175,255,0.48)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(210,175,255,0.18)')}
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-[14px] rounded-full font-mono text-[10px] tracking-[0.22em] uppercase transition-all duration-300 hover:opacity-90"
                        style={{
                          background: 'linear-gradient(135deg, rgba(155,90,230,0.95), rgba(120,60,200,0.95))',
                          color: '#f8f5ff',
                          opacity: status === 'loading' ? 0.65 : 1,
                          boxShadow: '0 0 28px rgba(140,70,255,0.3)',
                        }}
                      >
                        {status === 'loading' ? 'Sending…' : 'Send it to me'}
                      </button>

                      {status === 'error' && (
                        <p className="text-center font-mono text-[10px]" style={{ color: 'rgba(255,140,140,0.7)' }}>
                          Something went wrong. Try again.
                        </p>
                      )}
                    </form>

                    <p
                      className="font-mono text-[9px] tracking-[0.14em] mt-5 text-center"
                      style={{ color: 'rgba(210,175,255,0.28)' }}
                    >
                      No noise. Just the practice.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
