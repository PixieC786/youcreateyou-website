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
  { value: '21', label: 'Tools for the Inner World' },
  { value: '4',  label: 'Phases Back to Yourself' },
  { value: '21', label: 'Days to Feel the Shift' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center md:justify-center overflow-hidden pt-[68px] md:pt-0">

      {/* ── Particle field (floats above stars) ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-90" aria-hidden>
        <ParticleCanvas particleCount={55} connectDistance={115} speed={0.8} />
      </div>

      {/* ── Organic nebula atmosphere ─────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Left — rose/magenta lobe, organic polygon shape */}
        <div className="absolute" style={{
          left: '-5%', top: '5%',
          width: '52vw', height: '55vw',
          background: 'radial-gradient(ellipse at 42% 48%, rgba(255,148,185,0.38) 0%, rgba(220,100,160,0.16) 42%, transparent 68%)',
          clipPath: 'polygon(18% 4%, 44% 0%, 66% 7%, 80% 20%, 86% 38%, 83% 57%, 70% 71%, 50% 79%, 28% 76%, 10% 63%, 3% 42%, 7% 21%)',
          filter: 'blur(30px)',
          animation: 'breathe 13s ease-in-out 1s infinite',
        }} />

        {/* Right — warm gold lobe, different irregular shape */}
        <div className="absolute" style={{
          right: '-8%', top: '12%',
          width: '46vw', height: '52vw',
          background: 'radial-gradient(ellipse at 54% 44%, rgba(255,198,120,0.30) 0%, rgba(220,160,80,0.12) 44%, transparent 70%)',
          clipPath: 'polygon(24% 3%, 52% 0%, 74% 11%, 86% 30%, 90% 53%, 80% 72%, 60% 82%, 36% 80%, 15% 68%, 4% 48%, 8% 26%, 15% 12%)',
          filter: 'blur(34px)',
          animation: 'breathe 15s ease-in-out 3s infinite',
        }} />

        {/* Center — lavender nebula, largest irregular mass */}
        <div className="absolute" style={{
          left: '20%', top: '-5%',
          width: '60vw', height: '65vh',
          background: 'radial-gradient(ellipse at 50% 48%, rgba(210,155,255,0.34) 0%, rgba(185,120,245,0.14) 48%, transparent 72%)',
          clipPath: 'polygon(14% 9%, 34% 2%, 56% 0%, 74% 9%, 87% 24%, 92% 44%, 88% 64%, 74% 78%, 54% 84%, 32% 82%, 14% 72%, 4% 54%, 6% 30%)',
          filter: 'blur(26px)',
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
          {/* Eyebrow badge */}
          <motion.div variants={ITEM} className="mb-8 md:mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[rgba(210,175,255,0.25)] bg-[rgba(210,175,255,0.07)]"
              style={{ boxShadow: '0 0 20px rgba(180,120,255,0.1), inset 0 1px 0 rgba(255,255,255,0.06)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(220,185,255,0.9)] animate-breathe" style={{ boxShadow: '0 0 6px rgba(210,175,255,0.8)' }} />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[rgba(220,185,255,0.82)]">
                You already know who you&apos;re becoming
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

          {/* Sub-headline — identity mirror */}
          <motion.p
            variants={ITEM}
            className="font-body text-[rgba(235,228,255,0.68)] text-[clamp(1rem,1.5vw,1.18rem)] max-w-[40ch] leading-[1.85] mb-6"
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
