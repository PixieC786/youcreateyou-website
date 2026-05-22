'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

interface EmailCaptureProps {
  placeholder?: string
  ctaText?: string
  successText?: string
  size?: 'sm' | 'md' | 'lg'
}

const INPUT_SIZE: Record<string, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm',
}

export default function EmailCapture({
  placeholder = 'Enter your email',
  ctaText = '21 Days to Remember Who You Are',
  successText = 'Welcome. Your first practice is on its way.',
  size = 'md',
}: EmailCaptureProps) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setMessage(successText)
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-2"
          >
            <p className="font-display italic text-[1.15rem] text-[rgba(200,166,255,0.9)] leading-relaxed">
              {message}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col sm:flex-row gap-2.5"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              aria-label="Email address"
              suppressHydrationWarning
              className={`input-base ${INPUT_SIZE[size]}`}
            />
            <Button
              type="submit"
              variant="primary"
              size={size}
              disabled={status === 'loading'}
              pulse={status === 'idle'}
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                    className="block w-3 h-3 border border-[rgba(240,236,255,0.4)] border-t-[rgba(240,236,255,0.9)] rounded-full"
                  />
                  Sending
                </span>
              ) : ctaText}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === 'error' && (
        <p className="mt-3 text-center font-mono text-[10px] tracking-[0.15em] text-red-400/60">
          {message || 'Something went wrong. Please try again.'}
        </p>
      )}

      {status === 'idle' && (
        <p className="mt-3 text-center font-mono text-[9px] tracking-[0.16em] uppercase text-[rgba(240,236,255,0.18)]">
          No spam · No noise · Unsubscribe anytime
        </p>
      )}
    </div>
  )
}
