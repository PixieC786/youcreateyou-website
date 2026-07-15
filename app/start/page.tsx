'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { beginCheckout, captureAbandonedEmail } from '@/lib/checkout'

const EASE = [0.22, 1, 0.36, 1] as const

export default function StartPage() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    captureAbandonedEmail(email)
    try {
      await beginCheckout(email)
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Organic nebula atmosphere */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{
          left: '-5%', top: '10%',
          width: '50vw', height: '55vw',
          background: 'radial-gradient(ellipse at 42% 48%, rgba(180,100,255,0.22) 0%, transparent 68%)',
          clipPath: 'polygon(18% 4%, 44% 0%, 66% 7%, 80% 20%, 86% 38%, 83% 57%, 70% 71%, 50% 79%, 28% 76%, 10% 63%, 3% 42%, 7% 21%)',
          filter: 'blur(30px)',
          animation: 'breathe 13s ease-in-out 1s infinite',
        }} />
        <div className="absolute" style={{
          right: '-8%', bottom: '10%',
          width: '45vw', height: '50vw',
          background: 'radial-gradient(ellipse at 54% 44%, rgba(255,148,185,0.16) 0%, transparent 70%)',
          clipPath: 'polygon(24% 3%, 52% 0%, 74% 11%, 86% 30%, 90% 53%, 80% 72%, 60% 82%, 36% 80%, 15% 68%, 4% 48%, 8% 26%, 15% 12%)',
          filter: 'blur(34px)',
          animation: 'breathe 15s ease-in-out 3s infinite',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-[520px] mx-auto px-6 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-[9px] tracking-[0.28em] uppercase text-[rgba(179,136,255,0.55)] mb-8"
        >
          Begin your practice
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
          className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-light italic leading-[1.12] mb-5"
          style={{ color: '#f8f5ff' }}
        >
          The version of you<br />
          who has everything —<br />
          <span className="text-gradient">exists.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          className="font-body text-[rgba(235,228,255,0.55)] text-[clamp(0.95rem,1.3vw,1.1rem)] leading-[1.85] mb-10"
        >
          Enter your email to begin.<br />
          Your first practice is waiting.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
        >
          <motion.form
            onSubmit={handleSubmit}
            transition={{ duration: 0.25 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Email address"
              suppressHydrationWarning
              className="input-base flex-1 px-6 py-4 text-[15px]"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-7 py-4 rounded-full font-mono text-[10px] tracking-[0.22em] uppercase transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(140,70,220,0.9) 0%, rgba(100,45,180,0.9) 100%)',
                border: '1px solid rgba(210,175,255,0.3)',
                color: 'rgba(240,236,255,0.95)',
                boxShadow: '0 0 28px rgba(140,70,220,0.35)',
                whiteSpace: 'nowrap',
              }}
            >
              {status === 'loading' ? 'Opening checkout...' : 'Begin →'}
            </button>
          </motion.form>

          {status === 'error' && (
            <p className="mt-3 font-mono text-[10px] tracking-[0.15em] text-red-400/60">
              Something went wrong. Please try again.
            </p>
          )}

        </motion.div>

      </div>
    </main>
  )
}
