'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const EASE = [0.22, 1, 0.36, 1] as const

const INCLUDES = [
  'All 20 consciousness tools',
  '9-step daily morning practice',
  'Guided meditations with Natasha',
  'Your personal journey journal',
  '365 days · cancel any time',
]

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* Top rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.18)] to-transparent" />

      <div className="container-site">
        <div className="max-w-[640px] mx-auto text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-[9px] tracking-[0.28em] uppercase text-[rgba(179,136,255,0.5)] mb-7"
          >
            Begin your practice
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-light italic text-[rgba(240,236,255,0.95)] leading-[1.3] mb-4"
          >
            Your first 21 days<br />are completely free.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="font-body text-[1rem] font-light text-[rgba(240,236,255,0.42)] leading-[1.85] mb-14"
          >
            No card. No pressure. Just you and the practice.<br />
            After your trial, choose the plan that feels right.
          </motion.p>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 mb-12"
          >

            {/* Monthly */}
            <div className="border border-[rgba(179,136,255,0.15)] rounded-[20px] p-8 bg-[rgba(179,136,255,0.04)] hover:border-[rgba(179,136,255,0.3)] transition-colors duration-300">
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.5)] mb-4">Monthly</p>
              <div className="font-display text-[2.8rem] font-light text-[rgba(240,236,255,0.95)] leading-none mb-1">
                <span className="text-[1.1rem] text-[rgba(240,236,255,0.4)]">$</span>9.99
              </div>
              <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[rgba(240,236,255,0.28)]">per month</p>
            </div>

            {/* Yearly */}
            <div className="relative border border-[rgba(179,136,255,0.35)] rounded-[20px] p-8 bg-[rgba(179,136,255,0.07)] hover:border-[rgba(179,136,255,0.55)] transition-colors duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.2em] uppercase text-[rgba(179,136,255,0.9)] bg-[#07050f] border border-[rgba(179,136,255,0.35)] rounded-full px-3 py-1 whitespace-nowrap">
                ✦ Best value
              </div>
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.5)] mb-4">Yearly</p>
              <div className="font-display text-[2.8rem] font-light text-[rgba(240,236,255,0.95)] leading-none mb-1">
                <span className="text-[1.1rem] text-[rgba(240,236,255,0.4)]">$</span>79
              </div>
              <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[rgba(240,236,255,0.28)] mb-2">per year</p>
              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[rgba(179,136,255,0.7)]">~$6.58/month · save 35%</p>
            </div>

          </motion.div>

          {/* Ornament */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="font-mono text-[13px] tracking-[0.1em] text-[rgba(179,136,255,0.35)] mb-10"
          >
            — ✦ —
          </motion.p>

          {/* Includes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mb-12 space-y-2"
          >
            {INCLUDES.map((item) => (
              <p key={item} className="font-body text-[1rem] font-light text-[rgba(240,236,255,0.42)] leading-relaxed">
                <span className="text-[rgba(179,136,255,0.6)] mr-2">✦</span>{item}
              </p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
          >
            <Link
              href="https://youcreateyou.life"
              className="inline-block font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(220,190,255,0.95)] bg-[rgba(155,90,230,0.15)] border border-[rgba(179,136,255,0.4)] rounded-full px-12 py-[18px] hover:bg-[rgba(155,90,230,0.28)] hover:border-[rgba(179,136,255,0.7)] transition-all duration-300 mb-5"
            >
              Begin Free — 21 Days
            </Link>
            <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[rgba(240,236,255,0.18)]">
              No credit card required · cancel any time
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
