'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import { beginCheckout } from '@/lib/checkout'

const NAV_LINKS = [
  { href: '/the-transmission', label: 'The Book' },
  { href: '/practice',      label: 'The Practice' },
  { href: '/creator-field', label: 'The Creator Field' },
  { href: '/about',         label: 'About' },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${scrolled
            ? 'bg-[rgba(18,13,40,0.88)] backdrop-blur-2xl border-b border-[rgba(179,136,255,0.07)]'
            : 'bg-[rgba(18,13,40,0.45)] backdrop-blur-md border-b border-transparent'}
        `}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">

            {/* Logo */}
            <Link
              href="/"
              onClick={close}
              className="group relative flex flex-col leading-none"
            >
              <span className="font-display text-[48px] italic font-light tracking-wide text-[#f0ecff] group-hover:text-accent-bright transition-colors duration-300" style={{lineHeight:1}}>
                YOU
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(200,138,255,0.85)] group-hover:text-[rgba(200,138,255,1)] transition-colors duration-300 font-medium" style={{lineHeight:1, marginTop:'4px'}}>
                you create you
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} onClick={close} />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <Button onClick={() => beginCheckout()} variant="primary" size="sm">
                Begin Your Practice
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
              suppressHydrationWarning
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px w-6 bg-[rgba(240,236,255,0.75)] origin-center"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-6 bg-[rgba(240,236,255,0.75)] origin-center"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px w-6 bg-[rgba(240,236,255,0.75)] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgba(18,13,40,0.97)] backdrop-blur-2xl flex flex-col md:hidden"
          >
            {/* Menu header — mirror the nav bar */}
            <div className="flex items-center justify-between h-[68px] px-[clamp(20px,5vw,48px)] border-b border-[rgba(179,136,255,0.06)]">
              <div className="flex flex-col leading-none">
                <span className="font-display text-[48px] italic font-light text-[#f0ecff]" style={{lineHeight:1}}>
                  YOU
                </span>
                <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-[rgba(200,138,255,0.65)]" style={{lineHeight:1, marginTop:'4px'}}>
                  you create you
                </span>
              </div>
              <button
                onClick={close}
                aria-label="Close menu"
                className="w-8 h-8 flex items-center justify-center"
                suppressHydrationWarning
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(240,236,255,0.5)" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col justify-center flex-1 px-[clamp(20px,5vw,48px)] gap-2">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.07 * i, duration: 0.45, ease: EASE }}
                >
                  <Link
                    href={href}
                    onClick={close}
                    className="block font-display text-[2.5rem] italic font-light text-[rgba(240,236,255,0.7)] hover:text-[#f0ecff] transition-colors duration-200 py-2"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.45, ease: EASE }}
              className="px-[clamp(20px,5vw,48px)] pb-12 pt-6 border-t border-[rgba(179,136,255,0.06)]"
            >
              <a
                href="https://app.youcreateyou.life/frequency_reader.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block w-full text-center font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(200,138,255,0.75)] hover:text-[rgba(200,138,255,1)] transition-colors duration-200 mb-4"
              >
                ✦ Read My Frequency — Free
              </a>
              <Button
                variant="primary"
                size="lg"
                onClick={() => { close(); beginCheckout(); }}
                className="w-full justify-center"
              >
                Begin Your Practice
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(240,236,255,0.48)] hover:text-[rgba(240,236,255,0.85)] transition-colors duration-250 py-1"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent/50 group-hover:w-full transition-all duration-300 ease-in-out" />
    </Link>
  )
}

// ── YCY brand mark ─────────────────────────────────────────────────────────
// Geometric stroke approach. Structure:
//  · Two Ys are the DOMINANT structure — thick strokes, drawn on top
//  · Both inner Y arms share one sparkle apex — creates the convergence
//  · C is a thinner arc drawn BEHIND the Ys — visible where Ys don't cross it
//  · Right Y's outer arm naturally mirrors C's curve on the right
//  · Net silhouette: diamond at top, two parallel stems, C left, mirror right
function YCYMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 100 108"
      fill="none"
      aria-hidden
      style={{
        filter: 'drop-shadow(0 0 10px rgba(180,120,255,0.9)) drop-shadow(0 0 4px rgba(255,248,255,0.5))',
        transition: 'filter 0.3s ease',
        flexShrink: 0,
        overflow: 'visible',
      }}
    >
      <defs>
        <linearGradient id="ycy-g" x1="50" y1="0" x2="50" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#f8eeff"/>
          <stop offset="40%"  stopColor="#d4aaff"/>
          <stop offset="100%" stopColor="#9a60e8"/>
        </linearGradient>
      </defs>

      {/* C vessel — the bridge, opens upward, drawn behind */}
      <path
        d="M 30,52 A 20,14 0 0 1 70,52"
        stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"
      />

      {/* Left Y — outer arm + inner arm */}
      <path d="M 4,10 L 24,52"  stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M 50,6 L 24,52"  stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"/>

      {/* Right Y — mirror */}
      <path d="M 96,10 L 76,52" stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M 50,6 L 76,52"  stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"/>

      {/* Stems — converge to single shared base: the chalice */}
      <path d="M 24,52 C 34,74 44,90 50,102" stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M 76,52 C 66,74 56,90 50,102" stroke="url(#ycy-g)" strokeWidth="5" strokeLinecap="round" fill="none"/>

      {/* Sparkle — shared apex, the seat of becoming */}
      <path
        transform="translate(50,6)"
        d="M0,-6.5 L0.84,-0.84 L6.5,0 L0.84,0.84 L0,6.5 L-0.84,0.84 L-6.5,0 L-0.84,-0.84 Z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  )
}
