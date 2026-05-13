'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import StarLifeCycle from '@/components/sections/StarLifeCycle'

const EASE = [0.22, 1, 0.36, 1] as const

const PARA = "font-body text-[clamp(1.05rem,1.3vw,1.15rem)] font-normal leading-[1.9] mb-8"
const DIM  = { color: 'rgba(235,228,255,0.78)' } as const
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

function Stanza({ lines, delay = 0 }: { lines: string[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-56px' }}
      transition={{ delay, duration: 0.75, ease: EASE }}
      className="mb-8 pl-6 border-l-2 border-purple-400/30"
    >
      {lines.map((line, i) => (
        <p key={i}
          className="font-display italic text-[clamp(1.05rem,1.3vw,1.15rem)] leading-[2.2] mb-0"
          style={ACCENT}
        >{line}</p>
      ))}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ── Ambient atmosphere ─────────────────────────────────────────── */}
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

      {/* ── Header + Body ─────────────────────────────────────────────── */}
      <section className="relative z-10 pt-28 pb-16">
        <div className="container-prose mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel text="Our story" className="mb-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.88, ease: EASE }}
            className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light italic mb-10 leading-[1.15] text-center"
            style={{ color: '#f8f5ff', letterSpacing: '-0.01em' }}
          >
            Built from the{' '}
            <span className="text-gradient">inside out.</span>
          </motion.h1>

          <Para>
            YCY did not begin as a business plan, a content strategy, or a market gap.
            It began with a question.
          </Para>

          <Para delay={0.04}>In 2017, I started asking myself why.</Para>

          <Stanza delay={0.06} lines={[
            'Why do I live the way I live?',
            'Why do I have what I have?',
            'Why do I feel the way I feel?',
          ]} />

          <Para>
            That was the beginning.
            Just me, myself, and I — thinking, questioning, searching, and slowly realizing
            that so much of what I lived on the outside was a reflection of what was happening within.
          </Para>

          <Para delay={0.04}>And then the questions changed.</Para>

          <Stanza delay={0.06} lines={[
            'How do I want to live?',
            'What do I want to have?',
            'How do I want to feel?',
            'Who do I want to become?',
          ]} />

          <Para>That shift changed everything.</Para>

          <Para delay={0.04}>
            Because real change does not begin on the outside. It begins within.
            In the thoughts you think, the beliefs you hold, the emotions you live in,
            the patterns you repeat, the identity you carry, and the energy you embody.
          </Para>

          <Para delay={0.04}>
            The outer life mirrors the inner one. What you live is often a reflection of what you believe.
            What you hold inside shapes what you create outside.
            And when something changes at the root, life begins to respond in a new way.
          </Para>

          <Para delay={0.04}>
            I kept coming back to this in my own life — testing it, questioning it, living it.
            That is the essence of YCY. To work from the inside out.
            To see the outer world as a mirror. To create from within.
          </Para>

          <Para delay={0.04}>
            Nine years of exploring, learning, testing, unlearning, and rebuilding — not because I had every answer,
            but because something in me knew there was more. More alignment. More truth. More possibility. More life. More love.
          </Para>

          <Para delay={0.04}>
            And now I am here — creating YCY. Not with a perfect map.
            Not with the need to know exactly where it will lead.
            But with a deep knowing that this is real, that it matters,
            and that the process itself has already been life-changing.
          </Para>

          {/* Pull quote — the emotional centrepiece */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1, duration: 0.88, ease: EASE }}
            className="relative my-10 py-8 px-8 md:px-12 rounded-2xl text-center overflow-hidden"
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
            <p className="relative font-display italic text-[clamp(1.2rem,2.2vw,1.6rem)] font-light leading-[1.62]"
              style={{
                background: 'linear-gradient(150deg, #f0e4ff 0%, #d4aaff 50%, #b388ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              So I built it. For myself first. Then I realized it was for everyone
              who had ever felt like they were working so hard on themselves —
              and still missing something.
            </p>
          </motion.div>

          <Para>
            YCY became the space where everything I had been seeking began to come together.
            Not as more information. Not as another idea to admire.
            But as practice. As embodiment. As conscious creation.
          </Para>

          <Para delay={0.04}>
            Inside YCY, you will find 20 practices — rooted in neuroscience, ancient wisdom,
            somatic work, and quantum thinking. Not theory. Not more content to consume.
            A daily practice that works on your mind, your body, your subconscious, and your
            identity — simultaneously. No guru. Just you, showing up for yourself.
          </Para>

        </div>
      </section>

      <StarLifeCycle />

      <section className="relative z-10 pb-16">
        <div className="container-prose mx-auto">

          {/* Closing philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ delay: 0.04, duration: 0.75, ease: EASE }}
            className="mb-8"
          >
            <p className={`${PARA} mb-3`} style={DIM}>Because the name is the philosophy.</p>
            <p className="font-display italic text-[clamp(1.5rem,2.8vw,2.2rem)] font-light leading-[1.4] mb-6 text-gradient">
              You create you.
            </p>
            {[
              'From the inside out.',
              'From thought into form.',
              'From identity into reality.',
              'From the unseen into the seen.',
            ].map((line, i) => (
              <p key={i}
                className="font-display italic text-[clamp(1.05rem,1.3vw,1.15rem)] leading-[2.2] mb-0"
                style={{ color: 'rgba(210,175,255,0.7)' }}
              >{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ delay: 0.04, duration: 0.75, ease: EASE }}
            className="mb-10"
          >
            {['Not your past.', 'Not your conditioning.', 'Not your circumstances.', 'YOU.'].map((line, i) => (
              <p key={i}
                className="font-display italic text-[clamp(1.05rem,1.3vw,1.15rem)] leading-[2.2] mb-0"
                style={DIM}
              >{line}</p>
            ))}
          </motion.div>

          <Para delay={0.04}>
            And maybe that is where everything begins — with the willingness to ask why,
            the courage to look within, and the choice to become.
          </Para>

          {/* Divider */}
          <div className="divider-glow my-8" />

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/begin" variant="primary" size="md">
              Start Your Practice
            </Button>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
