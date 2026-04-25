'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
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
  { value: '20',     label: 'Consciousness Tools' },
  { value: '1 hour', label: 'Daily Practice' },
  { value: '4',      label: 'Phases of Change' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Particle field (floats above stars) ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-90" aria-hidden>
        <ParticleCanvas particleCount={55} connectDistance={115} speed={0.8} />
      </div>

      {/* ── Atmospheric depth ────────────────────────────────────────────── */}

      {/* 1. Deep nebula floor */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 70% at 50% 65%, rgba(90,35,175,0.28) 0%, rgba(60,20,130,0.1) 55%, transparent 75%)',
      }} />

      {/* 2. Crown bloom — the "galaxy above" feel */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        top: '-8%', left: '50%', transform: 'translateX(-50%)',
        width: '90vw', height: '80vh',
        background: 'radial-gradient(ellipse at center, rgba(160,85,255,0.32) 0%, rgba(130,60,230,0.14) 40%, transparent 68%)',
        filter: 'blur(36px)',
      }} />

      {/* 3. Warm luminous headline halo — direct glow behind text */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        top: '18%', left: '50%', transform: 'translateX(-50%)',
        width: '60vw', height: '50vh',
        background: 'radial-gradient(ellipse at center, rgba(220,170,255,0.16) 0%, rgba(190,130,255,0.07) 50%, transparent 72%)',
        filter: 'blur(22px)',
      }} />

      {/* 4. Side orbs — breathing depth */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        left: '2%', top: '20%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(150,85,255,0.15) 0%, transparent 70%)',
        filter: 'blur(55px)',
        animation: 'breathe 9s ease-in-out infinite',
      }} />
      <div aria-hidden className="absolute pointer-events-none" style={{
        right: '2%', bottom: '18%',
        width: '36vw', height: '36vw',
        background: 'radial-gradient(circle, rgba(210,155,255,0.13) 0%, transparent 70%)',
        filter: 'blur(55px)',
        animation: 'breathe 12s ease-in-out 1.8s infinite',
      }} />

      {/* 5. Bottom fade into next section */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
        height: '32vh',
        background: 'linear-gradient(to top, #0b091a 0%, rgba(11,9,26,0.65) 55%, transparent 100%)',
      }} />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 container-content flex flex-col items-center text-center pt-20 pb-28 md:pt-24 md:pb-24">

        <motion.div
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow badge — warmer, more luminous */}
          <motion.div variants={ITEM} className="mb-5 md:mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[rgba(210,175,255,0.25)] bg-[rgba(210,175,255,0.07)]"
              style={{ boxShadow: '0 0 20px rgba(180,120,255,0.1), inset 0 1px 0 rgba(255,255,255,0.06)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(220,185,255,0.9)] animate-breathe" style={{ boxShadow: '0 0 6px rgba(210,175,255,0.8)' }} />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[rgba(220,185,255,0.82)]">
                Consciousness · Neuroscience · Transformation
              </span>
            </div>
          </motion.div>

          {/* Headline — luminous, warm */}
          <motion.h1
            variants={ITEM}
            className="font-display font-light italic text-[clamp(2.85rem,7.5vw,6rem)] leading-[1.06] mb-4 max-w-[18ch]"
            style={{ letterSpacing: '-0.01em', color: '#f8f5ff' }}
          >
            The version of you
            <br />
            who has everything —
            <br />
            <span className="text-gradient">exists.</span>
          </motion.h1>

          {/* Sub-headline — warmer, more readable */}
          <motion.p
            variants={ITEM}
            className="font-body text-[rgba(235,228,255,0.68)] text-[clamp(1rem,1.5vw,1.18rem)] max-w-[44ch] leading-[1.85] mb-6"
          >
            The science-backed, soul-aligned practice for rewiring your mind,
            reclaiming your identity, and creating the life you actually want.
          </motion.p>

          {/* CTA cluster */}
          <motion.div
            variants={ITEM}
            className="w-full max-w-[440px] flex flex-col items-center gap-5"
          >
            <EmailCapture
              placeholder="Your email address"
              ctaText="Begin — It's Free"
              size="lg"
            />
            <div className="flex items-center gap-6">
              <Button href="https://app.youcreateyou.life" external variant="ghost" size="md" className="text-[11px] text-[rgba(240,236,255,0.65)] tracking-[0.2em]">
                Open the App
              </Button>
              <span className="h-4 w-px bg-[rgba(210,175,255,0.2)]" />
              <Button href="#practice" variant="ghost" size="md" className="text-[11px] text-[rgba(240,236,255,0.65)] tracking-[0.2em]">
                See the Practice
              </Button>
            </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
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
