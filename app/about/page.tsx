'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'

const EASE = [0.22, 1, 0.36, 1] as const

const QUOTE_STYLE = {
  borderLeft: '2px solid rgba(179,136,255,0.4)',
} as const

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="font-display italic text-[clamp(1.3rem,2.1vw,1.9rem)] leading-[1.5] text-[rgba(240,236,255,0.92)] pl-8 my-12"
      style={QUOTE_STYLE}
    >
      {children}
    </blockquote>
  )
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 overflow-hidden">
      <section className="section-pad relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 divider-glow" />

        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ duration: 0.75, ease: EASE }}
            className="mb-10"
          >
            <SectionLabel text="The story" className="mb-6" />
            <h1 className="font-display font-light italic text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] text-[#f8f5ff]">
              Built to find the original one.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-body text-[rgba(235,228,255,0.75)] text-[clamp(1.1rem,1.45vw,1.45rem)] leading-[1.75] space-y-7"
          >
            <p>
              Before there was a practice — before there was a book — there was a moment of
              complete stillness.
            </p>

            <p>
              The kind where everything the world had said fell away. And in that silence,
              something that had always been there finally became impossible to ignore.
            </p>

            <p>
              A life had been built. A good one, by most measures. But it had been built from
              borrowed blueprints — from fear, from expectation, from a story repeated so many
              times it had been mistaken for truth.
            </p>

            <p>
              The version that had been constructed was not the real one.
              It was a shape learned to fit.
            </p>

            <p>
              And underneath it — quieter, older, more true — was someone who had almost been
              forgotten.
            </p>

            <Quote>You Create You was built to find that someone.</Quote>

            <p>
              Not a program. Not a brand. A practice of remembering,
              three hundred and sixty-five days a year. One question underneath all of it:
            </p>

            <Quote>
              What if the version of you who was here all along is not who you become —
              but who you already are?
            </Quote>

            <Quote>
              &ldquo;This system was not invented. It was remembered. One practice at a time.
              One question at a time. One honest look in the mirror at a time.&rdquo;
            </Quote>

            <p>
              What was not expected was what happened when others began to practice it.
            </p>

            <p>
              Not just the personal shifts — though those were real, and they were deep.
              Something larger began to move. When a human truly remembers who they are —
              in the body, in the quiet, beneath all the borrowed noise — they do not only
              change themselves. They change what is possible around them.
              They become a different signal in the world.
            </p>

            <p>
              We are at a point in our collective story where this matters more than it ever has.
            </p>

            <Quote>The practice is personal. The effect is planetary.</Quote>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative pb-20">
        <div className="container-site text-center">

          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ delay: 0.04, duration: 0.75, ease: EASE }}
            className="mb-10"
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
            <BeginPracticeButton variant="primary" size="md">
              Begin Your Practice
            </BeginPracticeButton>
          </motion.div>

        </div>
      </section>

    </main>
  )
}
