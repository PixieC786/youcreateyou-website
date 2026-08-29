'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { beginCheckout } from '@/lib/checkout'
import { supabase } from '@/lib/supabase'

const EASE = [0.22, 1, 0.36, 1] as const

const CREATOR_FIELD =
  'No more Facebook groups, no noise, no ads. This is not social media. It is a living community — built for becoming instead of performing.'

const CARD_STYLE = (highlight: boolean) => ({
  background: 'rgba(179,136,255,0.05)',
  border: highlight ? '1px solid rgba(179,136,255,0.45)' : '1px solid rgba(179,136,255,0.14)',
  boxShadow: highlight
    ? '0 24px 70px rgba(0,0,0,0.45), 0 0 60px rgba(179,136,255,0.12)'
    : '0 24px 70px rgba(0,0,0,0.35)',
})

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (website) return
    if (!email.trim()) return

    setStatus('submitting')
    const { error } = await supabase.from('zirkaray_waitlist').insert({ email: email.trim() })
    if (error) {
      setStatus('error')
      return
    }
    fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim() }),
    }).catch(() => {})
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <p className="font-body text-[14px] text-center text-[rgba(240,236,255,0.75)] mt-auto">
        You&apos;re on the list — we&apos;ll email you when it ships.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-auto">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={e => setWebsite(e.target.value)}
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="bg-[rgba(179,136,255,0.05)] border border-[rgba(179,136,255,0.18)] rounded-lg px-5 py-3.5 font-body text-[15px] text-[rgba(240,236,255,0.9)] placeholder:text-[rgba(240,236,255,0.35)] focus:outline-none focus:border-[rgba(179,136,255,0.45)] transition-colors"
      />
      {status === 'error' && (
        <p className="font-body text-[12px] text-center text-[rgba(255,140,140,0.85)]">
          Something went wrong — please try again.
        </p>
      )}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full justify-center"
      >
        {status === 'submitting' ? 'Joining…' : 'Join The Waitlist'}
      </Button>
    </form>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative pt-10 pb-24 md:pt-14 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.18)] to-transparent" />
      <div className="container-site">
        <div className="text-center mb-12">
          <SectionLabel text="Begin your practice" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-light italic text-[rgba(240,236,255,0.95)] leading-[1.3] mt-6"
          >
            The version of you<br />who was here all along.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto items-stretch">

          {/* Tier 1 — real, available today */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl overflow-hidden h-full flex flex-col"
            style={CARD_STYLE(true)}
          >
            <div className="absolute top-4 left-4 z-10 font-mono text-[10px] tracking-[0.22em] uppercase px-4 py-2 rounded-full bg-[rgba(175,110,255,0.95)] text-[#150f28] font-medium shadow-[0_0_24px_rgba(179,136,255,0.45)]">
              ✦ Available Now
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/bundle-digital.png"
                alt="App + Ebook — what's included"
                fill
                sizes="(max-width: 768px) 92vw, 540px"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, rgba(23,17,45,0.9))' }} />
            </div>

            <div className="p-7 md:p-8 flex flex-col flex-1">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[rgba(200,138,255,0.8)] mb-2">Digital</p>
              <h3 className="font-display italic font-light text-[1.75rem] text-[#f0ecff] leading-tight mb-1">App + Ebook</h3>
              <p className="font-body text-[13px] text-[rgba(235,228,255,0.5)] mb-5">Lifetime access, digital only</p>

              <p className="mb-2">
                <span className="font-display italic text-[2.6rem]" style={{ color: 'rgba(200,166,255,1)' }}>$97</span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-[rgba(235,228,255,0.45)] ml-2">USD · one time</span>
              </p>
              <p className="font-body text-[13px] text-[rgba(235,228,255,0.5)] mb-6">$147 once the audiobook ships — yours free today if you buy now</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>App Lifetime Access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span>
                    <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Ebook</span>
                    <span className="block font-body text-[13px] leading-[1.6] text-[rgba(235,228,255,0.5)] mt-0.5">Inside the app</span>
                    <span className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5">
                      <Link href="/the-transmission/preview" className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-[rgba(200,166,255,0.85)] hover:text-[#f0ecff] underline underline-offset-4 decoration-[rgba(179,136,255,0.35)] transition-colors duration-200">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z" />
                          <path d="M22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z" />
                        </svg>
                        Read Transmission 1
                      </Link>
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Audiobook</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span>
                    <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Creator Field</span>
                    <span className="block font-body text-[13px] leading-[1.6] text-[rgba(235,228,255,0.5)] mt-0.5">{CREATOR_FIELD}</span>
                  </span>
                </li>
              </ul>

              <Button
                onClick={() => beginCheckout()}
                variant="solid"
                size="lg"
                className="w-full justify-center mt-auto"
              >
                Get Instant Access ✦
              </Button>
            </div>
          </motion.div>

          {/* Tier 2 — physical bundle, not ready yet */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl overflow-hidden h-full flex flex-col"
            style={CARD_STYLE(false)}
          >
            <div className="absolute top-4 left-4 z-10 font-mono text-[10px] tracking-[0.22em] uppercase px-4 py-2 rounded-full bg-[rgba(240,236,255,0.1)] text-[rgba(240,236,255,0.85)] font-medium">
              Coming Soon
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/bundle-premium.png"
                alt="Hardcover Bundle — what's included"
                fill
                sizes="(max-width: 768px) 92vw, 540px"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, rgba(23,17,45,0.9))' }} />
            </div>

            <div className="p-7 md:p-8 flex flex-col flex-1">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[rgba(200,138,255,0.8)] mb-2">Premium</p>
              <h3 className="font-display italic font-light text-[1.75rem] text-[#f0ecff] leading-tight mb-1">Hardcover Bundle</h3>
              <p className="font-body text-[13px] text-[rgba(235,228,255,0.5)] mb-5">Hardcover + Audiobook + Ebook + The Journal + App</p>

              <p className="mb-2">
                <span className="font-display italic text-[2.6rem]" style={{ color: 'rgba(200,166,255,1)' }}>$197</span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-[rgba(235,228,255,0.45)] ml-2">USD · one time</span>
              </p>
              <p className="font-body text-[13px] text-[rgba(235,228,255,0.5)] mb-6">No subscription. Lifetime access.</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span>
                    <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Ebook Access</span>
                    <span className="block font-body text-[13px] leading-[1.6] text-[rgba(235,228,255,0.5)] mt-0.5">Inside the app</span>
                    <span className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5">
                      <Link href="/the-transmission/preview" className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-[rgba(200,166,255,0.85)] hover:text-[#f0ecff] underline underline-offset-4 decoration-[rgba(179,136,255,0.35)] transition-colors duration-200">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z" />
                          <path d="M22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z" />
                        </svg>
                        Read Transmission 1
                      </Link>
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span>
                    <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Audiobook Access</span>
                    <span className="block font-body text-[13px] leading-[1.6] text-[rgba(235,228,255,0.5)] mt-0.5">Inside the app</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span>
                    <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Limited Edition Hardcover</span>
                    <span className="block font-body text-[13px] leading-[1.6] text-[rgba(235,228,255,0.5)] mt-0.5">Premium print with 420 pages</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>The Journal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: 'rgba(179,136,255,0.16)', color: 'rgba(210,175,255,0.95)' }}>✓</span>
                  <span>
                    <span className="font-body text-[15px]" style={{ color: 'rgba(240,236,255,0.88)' }}>Creator Field</span>
                    <span className="block font-body text-[13px] leading-[1.6] text-[rgba(235,228,255,0.5)] mt-0.5">{CREATOR_FIELD}</span>
                  </span>
                </li>
              </ul>

              <WaitlistForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
