'use client'

import { motion } from 'framer-motion'
import EmailCapture from '@/components/ui/EmailCapture'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

const EASE = [0.22, 1, 0.36, 1] as const

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } },
}

const ITEM = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.88, ease: EASE } },
}

const STATS = [
  { value: '21',  label: 'Portals for the Inner World' },
  { value: '4',   label: 'Phases Back to Yourself' },
  { value: '365', label: 'Days, Fully Guided' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center md:justify-center overflow-hidden pt-[68px] md:pt-0">

      {/* ── Particle field (floats above stars) ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-90" aria-hidden>
        <ParticleCanvas particleCount={55} connectDistance={115} speed={0.8} />
      </div>

      {/* ── Nebula atmosphere ────────────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Left — rose/magenta */}
        <div className="absolute" style={{
          left: '-20%', top: '-10%',
          width: '75vw', height: '75vw',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,148,185,0.22) 0%, rgba(220,100,160,0.08) 50%, transparent 72%)',
          filter: 'blur(48px)',
          animation: 'breathe 13s ease-in-out 1s infinite',
        }} />

        {/* Right — warm gold */}
        <div className="absolute" style={{
          right: '-18%', top: '0%',
          width: '68vw', height: '68vw',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,198,120,0.18) 0%, rgba(220,160,80,0.07) 50%, transparent 72%)',
          filter: 'blur(52px)',
          animation: 'breathe 15s ease-in-out 3s infinite',
        }} />

        {/* Center — lavender, dominant */}
        <div className="absolute" style={{
          left: '10%', top: '-15%',
          width: '80vw', height: '70vh',
          background: 'radial-gradient(ellipse at 50% 45%, rgba(210,155,255,0.26) 0%, rgba(185,120,245,0.10) 50%, transparent 74%)',
          filter: 'blur(40px)',
          animation: 'breathe 9s ease-in-out infinite',
        }} />

      </div>

      {/* Bottom fade */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
        height: '32vh',
        background: 'linear-gradient(to top, #07050f 0%, rgba(7,5,15,0.7) 55%, transparent 100%)',
      }} />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 container-content flex flex-col items-center text-center pt-6 pb-28 md:pt-24 md:pb-24">

        <motion.div
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {/* Headline — luminous, warm. Breaks out to full viewport width (via
              margin, not transform, so it doesn't fight framer-motion's own
              y-animation on this element) so it can run much bigger than the
              container-content column would otherwise allow. The section
              above has overflow-hidden, so the negative margins can't cause
              page-level horizontal scroll. */}
          <motion.h1
            variants={ITEM}
            className="font-display font-light italic text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[1.08] mb-4 px-2"
            style={{
              letterSpacing: '-0.01em',
              color: '#f8f5ff',
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
            }}
          >
            The version of you
            <br />
            who was here all along
            <br />
            <span className="text-gradient">exists.</span>
          </motion.h1>

          {/* Sub-headline — identity mirror. Same full-bleed breakout as the
              headline (margin, not transform) — this sentence is long enough
              that it needs the extra width to sit on one line at a bigger size. */}
          <motion.p
            variants={ITEM}
            className="font-body text-[rgba(235,228,255,0.68)] text-[clamp(1.05rem,1.85vw,1.55rem)] leading-[1.85] mb-6 px-2 whitespace-normal min-[1600px]:whitespace-nowrap"
            style={{
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
            }}
          >
            Not a new you. The real one.
            The one you&apos;ve always sensed underneath the noise — waiting to be lived.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={ITEM}
            className="w-full max-w-[440px] flex flex-col items-center gap-5"
          >
            <EmailCapture
              placeholder="Your email address"
              size="lg"
            />
          </motion.div>

          {/* Stats strip — brighter, more inviting */}
          <motion.div variants={ITEM} className="mt-10 md:mt-12 flex items-center gap-0">
            {STATS.map(({ value, label }, i) => (
              <div key={label} className="flex items-center">
                {i > 0 && (
                  <span className="h-8 w-px bg-[rgba(210,175,255,0.16)] mx-4 sm:mx-8 md:mx-10" />
                )}
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-display italic text-[1.65rem] font-light leading-none text-gradient">
                    {value}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(235,228,255,0.32)]">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2.5"
        aria-hidden
      >
        <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-[rgba(220,185,255,0.25)]">
          Scroll
        </span>
        <div className="relative w-px h-10 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'linear', repeatDelay: 0.4 }}
            className="absolute inset-x-0 top-0 h-full"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(210,175,255,0.65), transparent)' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
