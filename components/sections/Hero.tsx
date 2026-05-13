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
  { value: '20', label: 'Tools for the Inner World' },
  { value: '9',  label: 'Steps to a New Identity' },
  { value: '21', label: 'Days to Feel the Shift' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center md:justify-center overflow-hidden pt-[68px] md:pt-0">

      {/* ── Particle field (floats above stars) ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-90" aria-hidden>
        <ParticleCanvas particleCount={55} connectDistance={115} speed={0.8} />
      </div>

      {/* ── Atmospheric depth ────────────────────────────────────────────── */}

      {/* Warm rose drift — left */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        left: '-5%', top: '10%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(ellipse, rgba(255,148,185,0.11) 0%, transparent 68%)',
        filter: 'blur(55px)',
        animation: 'breathe 13s ease-in-out 1s infinite',
      }} />

      {/* Warm gold drift — right */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        right: '-5%', top: '20%',
        width: '48vw', height: '48vw',
        background: 'radial-gradient(ellipse, rgba(255,198,120,0.09) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'breathe 15s ease-in-out 3s infinite',
      }} />

      {/* Soft lavender center bloom */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        left: '50%', top: '8%', transform: 'translateX(-50%)',
        width: '65vw', height: '65vh',
        background: 'radial-gradient(ellipse, rgba(210,155,255,0.16) 0%, rgba(185,120,245,0.08) 45%, transparent 72%)',
        filter: 'blur(42px)',
        animation: 'breathe 9s ease-in-out infinite',
      }} />

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

          {/* THE EMERGENCE */}
          <motion.div variants={ITEM} className="mb-6 md:mb-8 relative flex items-center justify-center" aria-hidden>

            {/* Far outer — electric violet aurora */}
            <div className="absolute rounded-full pointer-events-none" style={{
              width:'600px', height:'600px',
              background:'radial-gradient(circle, rgba(160,60,255,0.22) 0%, rgba(200,80,255,0.12) 40%, rgba(255,100,200,0.06) 70%, transparent 85%)',
              filter:'blur(55px)',
              animation:'breathe 14s ease-in-out 2s infinite',
            }}/>

            {/* Mid — vivid magenta-violet */}
            <div className="absolute rounded-full pointer-events-none" style={{
              width:'440px', height:'440px',
              background:'radial-gradient(circle, rgba(185,60,255,0.38) 0%, rgba(255,60,200,0.2) 42%, rgba(120,40,255,0.08) 68%, transparent 83%)',
              filter:'blur(28px)',
              animation:'breathe 9s ease-in-out 1s infinite',
            }}/>

            {/* Vivid rings — electric violet, hot pink, bright purple */}
            {[
              { size: 400, color: 'rgba(180,60,255,0.35)',  delay: 0,   dur: 9  },
              { size: 330, color: 'rgba(255,60,190,0.28)',  delay: 1.5, dur: 7  },
              { size: 262, color: 'rgba(140,40,255,0.22)',  delay: 3,   dur: 11 },
            ].map((r, i) => (
              <div key={i} className="absolute rounded-full pointer-events-none" style={{
                width:`${r.size}px`, height:`${r.size}px`,
                border:`1.5px solid ${r.color}`,
                animation:`breathe ${r.dur}s ease-in-out ${r.delay}s infinite`,
              }}/>
            ))}

            {/* The Emergence — electric violet core */}
            <div className="relative rounded-full" style={{
              width:'240px', height:'240px',
              background:`radial-gradient(circle,
                rgba(255,255,255,0.98)  0%,
                rgba(235,180,255,0.88)  10%,
                rgba(195,80,255,0.75)   22%,
                rgba(255,60,200,0.52)   38%,
                rgba(150,40,255,0.28)   55%,
                rgba(100,20,200,0.1)    72%,
                transparent             86%
              )`,
              filter:'blur(2px)',
              boxShadow:`
                0 0 50px rgba(190,70,255,0.85),
                0 0 100px rgba(255,60,200,0.5),
                0 0 180px rgba(140,40,255,0.25)
              `,
              animation:'breathe 7s ease-in-out infinite',
            }}>
              {/* Inner bright layers */}
              {[
                { size: 150, bg: 'rgba(255,255,255,0.82) 0%, rgba(220,140,255,0.6) 40%, transparent 80%', dur: 6,  delay: 0   },
                { size: 90,  bg: 'rgba(255,255,255,0.92) 0%, rgba(255,120,230,0.7) 38%, transparent 78%', dur: 8,  delay: 1   },
                { size: 46,  bg: 'rgba(255,255,255,0.98) 0%, rgba(210,100,255,0.85) 50%, transparent 80%', dur: 5, delay: 2   },
              ].map((l, i) => (
                <div key={i} className="absolute inset-0 flex items-center justify-center">
                  <div style={{
                    width:`${l.size}px`, height:`${l.size}px`,
                    borderRadius:'50%',
                    background:`radial-gradient(circle, ${l.bg})`,
                    animation:`breathe ${l.dur}s ease-in-out ${l.delay}s infinite`,
                  }}/>
                </div>
              ))}

              {/* The spark — blinding white with violet corona */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div style={{
                  width:'11px', height:'11px', borderRadius:'50%',
                  background:'#ffffff',
                  boxShadow:'0 0 18px rgba(255,255,255,1), 0 0 40px rgba(220,140,255,1), 0 0 80px rgba(190,60,255,0.75)',
                  animation:'breathe 4s ease-in-out 0.5s infinite',
                }}/>
              </div>
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
              ctaText="Begin Free — 21 Days"
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
