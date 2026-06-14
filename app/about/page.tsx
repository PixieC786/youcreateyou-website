'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const EASE = [0.22, 1, 0.36, 1] as const

const PARA = "font-display text-[clamp(1.05rem,1.4vw,1.2rem)] font-light leading-[1.95] mb-7"
const DIM  = { color: 'rgba(235,228,255,0.72)' } as const
const ACCENT = { color: 'rgba(210,175,255,0.9)' } as const

function Para({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-56px' }}
      transition={{ delay, duration: 0.75, ease: EASE }}
      className={PARA} style={DIM}
    >
      {children}
    </motion.p>
  )
}

function Beat({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.7, ease: EASE }}
      className="font-display italic text-[clamp(1.1rem,1.6vw,1.35rem)] font-light leading-[1.8] mb-3 text-center"
      style={ACCENT}
    >
      {text}
    </motion.p>
  )
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Ambient atmosphere */}
      <div aria-hidden className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '70vw', height: '55vh',
          background: 'radial-gradient(ellipse at top, rgba(140,70,255,0.14) 0%, rgba(100,45,200,0.06) 50%, transparent 75%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '5%',
          width: '35vw', height: '35vw',
          background: 'radial-gradient(circle, rgba(210,165,255,0.07) 0%, transparent 70%)',
          filter: 'blur(55px)',
          animation: 'breathe 14s ease-in-out infinite',
        }} />
      </div>

      {/* Header */}
      <section className="relative z-10 pt-28 pb-16">
        <div className="container-prose mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel text="The story" className="mb-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.88, ease: EASE }}
            className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light italic mb-14 leading-[1.15] text-center"
            style={{ color: '#f8f5ff', letterSpacing: '-0.01em' }}
          >
            Built to find<br />
            <span className="text-gradient">the real one.</span>
          </motion.h1>

          <Para>
            Before there was a practice — before there was a book — there was a moment of complete stillness.
          </Para>

          <Para delay={0.04}>
            The kind where everything the world had said fell away. And in that silence, something
            that had always been there finally became impossible to ignore.
          </Para>

          <Para delay={0.04}>
            A life had been built. A good one, by most measures. But it had been built from borrowed
            blueprints — from fear, from expectation, from a story repeated so many times
            it had been mistaken for truth.
          </Para>

          <Para delay={0.04}>
            The version that had been constructed was not the real one.
            It was a shape learned to fit.
          </Para>

          <Para delay={0.04}>
            And underneath it — quieter, older, more true — was someone who had almost been forgotten.
          </Para>

          <Beat delay={0.06} text="You Create You was built to find that someone." />

          <Para delay={0.04}>
            Not a program. Not a brand. A practice of remembering.
            Twenty-one tools. Four phases. 365 days. One question underneath all of them:
          </Para>

          <Beat delay={0.06} text="What if the version of you who has everything is not who you become — but who you already are?" />

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1, duration: 0.88, ease: EASE }}
            className="relative my-12 py-8 px-8 md:px-12 rounded-2xl text-center overflow-hidden"
            style={{
              border: '1px solid rgba(210,175,255,0.14)',
              background: 'rgba(210,175,255,0.04)',
              boxShadow: '0 0 48px rgba(140,70,255,0.07) inset',
            }}
          >
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(180,120,255,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <p className="relative font-display italic text-[clamp(1.2rem,2.2vw,1.6rem)] font-light leading-[1.65]"
              style={{
                background: 'linear-gradient(150deg, #f0e4ff 0%, #d4aaff 50%, #b388ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              "This system was not invented.
              It was remembered. One practice at a time.
              One question at a time.
              One honest look in the mirror at a time."
            </p>
          </motion.div>

          <Para>
            What was not expected was what happened when others began to practice it.
          </Para>

          <Para delay={0.04}>
            Not just the personal shifts — though those were real, and they were deep.
            Something larger began to move. When a human truly remembers who they are —
            in the body, in the quiet, beneath all the borrowed noise — they do not only
            change themselves. They change what is possible around them.
            They become a different signal in the world.
          </Para>

          <Para delay={0.04}>
            We are at a point in our collective story where this matters more than it ever has.
          </Para>

          <Beat delay={0.06} text="The practice is personal. The effect is planetary." />

        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 pb-20">
        <div className="container-prose mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ delay: 0.04, duration: 0.75, ease: EASE }}
            className="mb-10 text-center"
          >
            <p className="font-display italic text-[clamp(1.5rem,2.8vw,2.2rem)] font-light leading-[1.4] mb-6 text-gradient">
              You Create You —
            </p>
            <p
              className="font-display italic text-[clamp(1.05rem,1.3vw,1.15rem)] leading-[2.2]"
              style={{ color: 'rgba(210,175,255,0.65)' }}
            >
              for everyone ready to remember.
            </p>
          </motion.div>

          <div className="divider-glow my-10" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: EASE }}
            className="flex justify-center"
          >
            <Button href="/start" variant="primary" size="md">
              21 Days to Remember Who You Are
            </Button>
          </motion.div>

        </div>
      </section>

    </main>
  )
}
