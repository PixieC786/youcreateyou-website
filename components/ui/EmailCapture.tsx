'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { beginCheckout, captureAbandonedEmail } from '@/lib/checkout'

interface EmailCaptureProps {
  placeholder?: string
  ctaText?: string
  size?: 'sm' | 'md' | 'lg'
}

const INPUT_SIZE: Record<string, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm',
}

export default function EmailCapture({
  placeholder = 'Enter your email',
  ctaText = 'Begin Your Practice',
  size = 'md',
}: EmailCaptureProps) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    // Fire-and-forget: capture the email now, before checkout, so a near-buyer
    // who abandons at Stripe isn't lost entirely.
    captureAbandonedEmail(email)
    try {
      await beginCheckout(email)
      // beginCheckout redirects the browser on success — nothing left to do.
      // If it returns without redirecting, something went wrong.
      setStatus('error')
      setMessage('Could not open checkout. Please try again.')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 1 }}
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
              Opening checkout
            </span>
          ) : ctaText}
        </Button>
      </motion.form>

      {status === 'error' && (
        <p className="mt-3 text-center font-mono text-[10px] tracking-[0.15em] text-red-400/60">
          {message || 'Something went wrong. Please try again.'}
        </p>
      )}

    </div>
  )
}
