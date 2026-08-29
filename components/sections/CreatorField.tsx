'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import CreatorFieldExplorer from './CreatorFieldExplorer'
import { beginCheckout } from '@/lib/checkout'

const EASE = [0.22, 1, 0.36, 1] as const

export default function CreatorField() {
  return (
    <section id="creator-field" className="section-pad relative overflow-hidden">

      <div className="absolute top-0 inset-x-0 divider-glow" />

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(ellipse, rgba(140,60,255,0.1) 0%, transparent 70%)',
            animation: 'breathe 11s ease-in-out infinite',
          }}
        />
      </div>

      <div className="container-site relative z-10">

        <div className="text-center mb-14 md:mb-18">
          <SectionLabel text="The Creator Field" />
          {/* Same full-bleed breakout + scale as the Hero headline (margin,
              not transform, so it doesn't fight this element's own y-animation). */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2.75rem,6.5vw,6.5rem)] font-light italic text-[#f0ecff] mt-6 leading-[1.08] px-2"
            style={{
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
            }}
          >
            Share your becoming.
            <br />
            <span className="text-gradient">Receive love. No noise.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="font-body text-[rgba(240,236,255,0.55)] text-[15px] leading-[1.8] max-w-[90ch] mx-auto mt-6"
          >
            Not a wall for performing. A field built around one idea: the moment someone
            shares something true, the worst thing that can happen isn&apos;t a bad reply —
            it&apos;s silence. Everything here exists to make sure that never happens.
          </motion.p>
        </div>

        <div className="mb-14">
          <CreatorFieldExplorer />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center gap-4"
        >
          <Button onClick={() => beginCheckout()} variant="primary" size="lg">
            Step Into The Field
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
