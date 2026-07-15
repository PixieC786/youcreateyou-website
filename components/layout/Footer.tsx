'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '/the-transmission', label: 'The Book' },
  { href: '/practice', label: 'The Practice' },
  { href: '/science',  label: 'The Science' },
  { href: '/journal',  label: 'Journal' },
  { href: '/about',    label: 'About' },
  { href: '/start',    label: 'Begin' },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms',   label: 'Terms' },
  { href: 'mailto:hello@youcreateyou.life', label: 'Contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="relative border-t border-[rgba(179,136,255,0.07)]" style={{ background: '#120d28' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.22)] to-transparent" />

      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-14">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-[1.35rem] italic font-light text-[#f0ecff] hover:text-[rgba(200,166,255,0.9)] transition-colors duration-300 block mb-4"
            >
              You Create You
            </Link>
            <p className="font-body text-[13px] text-[rgba(240,236,255,0.38)] leading-[1.85] max-w-[28ch]">
              A 365-day practice rooted in ancient wisdom,
              modern science, and one understanding:
              your inner world creates your outer world.
            </p>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(179,136,255,0.38)] mt-5">
              app.youcreateyou.life
            </p>
            <a
              href="https://www.instagram.com/youcreateyou_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @youcreateyou_ on Instagram"
              className="inline-flex items-center gap-2 mt-4 text-[rgba(179,136,255,0.4)] hover:text-[rgba(200,166,255,0.75)] transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase">@youcreateyou_</span>
            </a>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.45)] mb-5">
              Explore
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-[13.5px] text-[rgba(240,236,255,0.42)] hover:text-[rgba(240,236,255,0.78)] transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter column */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.45)] mb-3">
              Consciousness Letters
            </p>
            <p className="font-body text-[13px] text-[rgba(240,236,255,0.38)] leading-[1.8] mb-4">
              On remembering, returning, and creating from the inside out — delivered to your inbox.
            </p>

            {sent ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display italic text-[0.95rem] text-[rgba(200,166,255,0.8)]"
              >
                Welcome. Watch your inbox.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  aria-label="Email for newsletter"
                  suppressHydrationWarning
                  className="input-base px-4 py-2.5 text-[13px]"
                />
                <button
                  type="submit"
                  suppressHydrationWarning
                  className="
                    px-4 py-2.5 rounded-full flex-shrink-0
                    bg-[rgba(179,136,255,0.1)] border border-[rgba(179,136,255,0.25)]
                    text-[rgba(179,136,255,0.85)] font-mono text-[9px] tracking-[0.18em] uppercase
                    hover:bg-[rgba(179,136,255,0.18)] hover:border-[rgba(179,136,255,0.45)]
                    transition-all duration-200
                  "
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(179,136,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[rgba(240,236,255,0.2)]">
            You Create You &copy; {new Date().getFullYear()} — All realities reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[9px] tracking-[0.15em] uppercase text-[rgba(240,236,255,0.2)] hover:text-[rgba(240,236,255,0.5)] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
