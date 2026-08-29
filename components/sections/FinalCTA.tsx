'use client'

import { motion } from 'framer-motion'
import EmailCapture from '@/components/ui/EmailCapture'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

const EASE = [0.22, 1, 0.36, 1] as const


export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 divider-glow" />

      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none opacity-55" aria-hidden>
        <ParticleCanvas particleCount={40} connectDistance={105} speed={0.65} />
      </div>

      {/* ── Atmospheric layers — dawn-breaking quality ─────────────────── */}

      {/* 1. Deep foundation bloom */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 65% at 50% 55%, rgba(120,55,230,0.2) 0%, rgba(90,30,180,0.08) 50%, transparent 75%)',
      }} />

      {/* 2. Bright crown — the "sunrise through space" moment */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '75vw', height: '60vh',
        background: 'radial-gradient(ellipse at center, rgba(200,150,255,0.15) 0%, rgba(160,100,255,0.07) 45%, transparent 70%)',
        filter: 'blur(28px)',
      }} />

      {/* 3. Warm luminous core — tight, bright, behind the headline */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '45vw', height: '45vh',
        background: 'radial-gradient(ellipse at center, rgba(230,190,255,0.1) 0%, rgba(200,150,255,0.05) 55%, transparent 70%)',
        filter: 'blur(18px)',
      }} />

      {/* 4. Breathing side orbs */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        top: '8%', left: '8%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(160,90,255,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'breathe 12s ease-in-out infinite',
      }} />
      <div aria-hidden className="absolute pointer-events-none" style={{
        bottom: '8%', right: '8%',
        width: '35vw', height: '35vw',
        background: 'radial-gradient(circle, rgba(210,165,255,0.09) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'breathe 15s ease-in-out 2.2s infinite',
      }} />

      {/* Sacred geometry — slightly more visible, more alive */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <motion.svg
          width="640" height="640" viewBox="0 0 400 400" fill="none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 110, ease: 'linear' }}
          style={{ opacity: 0.07 }}
        >
          <polygon points="200,10 390,390 10,390"
            stroke="rgba(210,175,255,1)" strokeWidth="0.5" fill="none"/>
          <polygon points="200,390 390,10 10,10"
            stroke="rgba(210,175,255,1)" strokeWidth="0.5" fill="none"/>
          <circle cx="200" cy="200" r="185"
            stroke="rgba(210,175,255,1)" strokeWidth="0.4" fill="none"/>
          <circle cx="200" cy="200" r="125"
            stroke="rgba(210,175,255,1)" strokeWidth="0.35" fill="none"/>
          <circle cx="200" cy="200" r="65"
            stroke="rgba(210,175,255,1)" strokeWidth="0.3" fill="none"/>
        </motion.svg>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="container-content relative z-10 flex flex-col items-center text-center">

        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-[10px] tracking-[0.3em] uppercase mb-8 block"
          style={{ color: 'rgba(210,175,255,0.65)' }}
        >
          Your next chapter begins now
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.08, duration: 0.9, ease: EASE }}
          className="font-display font-light italic text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.07] mb-7 max-w-[14ch]"
          style={{ letterSpacing: '-0.01em', color: '#f8f5ff' }}
        >
          Nothing is missing.
          <br />You&apos;re just ready
          <br /><span className="text-gradient">to remember.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.18, duration: 0.75, ease: EASE }}
          className="font-body text-[rgba(235,228,255,0.65)] text-[clamp(1rem,1.25vw,1.1rem)] max-w-[38ch] leading-[1.85] mb-12"
        >
          One practice. Lifetime access — nothing to renew, ever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.26, duration: 0.7, ease: EASE }}
          className="w-full max-w-[420px] flex flex-col items-center gap-4"
        >
          <EmailCapture
            placeholder="Your email address"
            size="lg"
          />
          <BeginPracticeButton variant="ghost" size="sm">
            Go straight to the app →
          </BeginPracticeButton>
        </motion.div>


        {/* Closing line — more present, warm */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display italic text-[1.05rem] mt-20"
          style={{ color: 'rgba(235,228,255,0.28)' }}
        >
          "You have always been the one you were waiting for."
        </motion.p>
      </div>
    </section>
  )
}
