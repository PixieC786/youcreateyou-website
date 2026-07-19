'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'
import ValueStack from '@/components/ui/ValueStack'
import { captureAbandonedEmail } from '@/lib/checkout'

const EASE = [0.22, 1, 0.36, 1] as const

const PHASES = [
  {
    name: 'Remember', range: 'Transmissions 1–6',
    chapters: [
      'The Mirror',
      'The Thoughts You Think Are Thinking You',
      'What You Feel Is What You Broadcast',
      'The Ancient Knowing',
      'The Witness',
      'Your Frequency',
    ],
  },
  {
    name: 'Return', range: 'Transmissions 7–13',
    chapters: [
      'Fear Is Not the Enemy',
      'The Body Holds Everything You Haven’t Said',
      'The Ego Is Not You',
      'Who Were You Before They Told You Who to Be',
      'The Love You Are',
      'Your Purpose Was Never Lost',
      'The New Chapter',
    ],
  },
  {
    name: 'Create', range: 'Transmissions 14–20',
    chapters: [
      'The Subconscious Doesn’t Know the Difference',
      'The Field',
      'Inner Cinema',
      'Identity Is Not Fixed',
      'The First Move',
      'The Creative Life',
      'You Create Your Day Before It Creates You',
    ],
  },
  {
    name: 'Radiate', range: 'Transmissions 21–26',
    chapters: [
      'Synchronicity',
      'The Frequency of Thanks',
      'Inner Harmony',
      'Living Creation',
      'Wonder',
      'The Mirror People Hold',
    ],
  },
  {
    name: 'The Whole Self', range: 'Transmissions 27–29',
    chapters: [
      'The Flowing Quality',
      'The Directing Quality',
      'The Dance',
    ],
  },
]

const FAQS = [
  {
    q: 'Do I need the app to read the book?',
    a: 'Yes — the ebook only lives inside the app, on your home screen. There’s no separate PDF or download. That’s not a limitation: it means the moment you begin your practice, the book is already there, waiting.',
  },
  {
    q: 'Is this a subscription?',
    a: '$79, one time. Lifetime access to the ebook and every portal in the app — nothing to cancel, nothing that renews.',
  },
  {
    q: 'What if it doesn’t work for me?',
    a: 'You have 90 days. If you’ve genuinely given the practice a try and it still didn’t land, email us and we’ll take care of it — no hoops.',
  },
  {
    q: 'I don’t have the app yet — what happens after I buy?',
    a: 'Your account is created automatically at checkout. Open the app on any device and you’re already signed in — no separate signup, no password to set up first.',
  },
  {
    q: 'Can I read on my phone and my computer?',
    a: 'Yes. Everything syncs to your account, not your device — pick up on whatever you’re on.',
  },
  {
    q: 'Is there a physical or audio version?',
    a: 'Not yet. Right now it’s ebook + app. An audiobook is coming — buy today and it’s yours free the moment it ships, no extra charge. Wait, and the bundle becomes $97 with the audiobook included from the start.',
  },
]

export default function TheTransmissionPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [openPhase, setOpenPhase] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const unlockPreview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    captureAbandonedEmail(email)
    sessionStorage.setItem('ycy_preview_unlocked', '1')
    router.push('/the-transmission/preview')
  }

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
      </div>

      {/* ── Hero: cover + intro ─────────────────────────────────────────── */}
      <section className="relative z-10 pt-28 pb-20">
        <div className="container-content mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex justify-center md:justify-start order-1 md:order-1"
          >
            <div
              className="relative w-full max-w-[380px] rounded-lg overflow-hidden"
              style={{
                aspectRatio: '3072 / 5504',
                boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 60px rgba(140,70,255,0.12)',
              }}
            >
              <Image
                src="/images/the-transmission-cover.webp"
                alt="The Transmission — A Gift to Humanity, by Zirka Ray"
                fill
                sizes="(max-width: 768px) 90vw, 380px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Intro */}
          <div className="order-2 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7, ease: EASE }}
            >
              <SectionLabel text="The Book" align="left" className="mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.85, ease: EASE }}
              className="font-display font-light italic leading-[1.1] mb-3 text-[clamp(2.2rem,4.5vw,3.4rem)]"
              style={{ color: '#f8f5ff', letterSpacing: '-0.01em' }}
            >
              The Transmission
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.7, ease: EASE }}
              className="font-display italic text-[1.05rem] mb-7"
              style={{ color: 'rgba(210,175,255,0.7)' }}
            >
              A Gift to Humanity — by Zirka Ray
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.75, ease: EASE }}
              className="font-body text-[1.02rem] leading-[1.9] mb-9 whitespace-pre-line"
              style={{ color: 'rgba(235,228,255,0.68)' }}
            >
              {'This is remembering.\nTwenty-nine Transmissions — written for the part of you that never gave up on you.\nBefore the noise. Before the fear. Before the world told you who to be.\nShe did not come to save humanity. She came to remind them.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7, ease: EASE }}
            >
              <form onSubmit={unlockPreview} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  suppressHydrationWarning
                  className="input-base px-5 py-3 text-sm"
                />
                <Button type="submit" variant="primary" size="lg">
                  Get Transmission One — Free
                </Button>
              </form>
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase mt-4" style={{ color: 'rgba(210,175,255,0.4)' }}>
                The opening Transmission, unlocked instantly
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      <div className="container-prose mx-auto"><div className="divider-glow my-4" /></div>

      {/* ── One ecosystem ───────────────────────────────────────────────── */}
      <section className="relative z-10 py-20">
        <div className="container-prose mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <SectionLabel text="Not two things" className="mb-6" />
            <h2 className="font-display font-light italic text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.3] mb-14"
              style={{ color: '#f8f5ff' }}
            >
              One system, walked two ways.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="rounded-2xl p-8 text-left"
              style={{ border: '1px solid rgba(210,175,255,0.14)', background: 'rgba(210,175,255,0.03)' }}
            >
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase block mb-3" style={{ color: 'rgba(210,175,255,0.5)' }}>
                The Book
              </span>
              <p className="font-display italic text-[1.2rem] leading-[1.5]" style={{ color: 'rgba(240,236,255,0.9)' }}>
                Gives you the understanding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
              className="rounded-2xl p-8 text-left"
              style={{ border: '1px solid rgba(210,175,255,0.14)', background: 'rgba(210,175,255,0.03)' }}
            >
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase block mb-3" style={{ color: 'rgba(210,175,255,0.5)' }}>
                The App
              </span>
              <p className="font-display italic text-[1.2rem] leading-[1.5]" style={{ color: 'rgba(240,236,255,0.9)' }}>
                Gives you the daily practice.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-body text-[1rem] leading-[1.9] max-w-[46ch] mx-auto mb-8 whitespace-pre-line"
            style={{ color: 'rgba(235,228,255,0.6)' }}
          >
            {'Each Transmission connects to a tool, a portal, or a practice inside You Create You.\nNeither piece is the whole thing on its own.\nTogether, they are a living transmission — for the human ready to return to themselves.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
            className="rounded-2xl p-6 max-w-[52ch] mx-auto"
            style={{ border: '1px solid rgba(210,175,255,0.18)', background: 'rgba(210,175,255,0.05)' }}
          >
            <p className="font-display italic text-[1.05rem] leading-[1.7]" style={{ color: 'rgba(240,236,255,0.9)' }}>
              There is nothing to download. The ebook lives right inside the app.
            </p>
            <p className="font-body text-[0.92rem] leading-[1.8] mt-2" style={{ color: 'rgba(235,228,255,0.55)' }}>
              The moment you begin your practice, the full text of The Transmission appears
              on your home screen, ready to open — sitting right next to the journal and
              daily portals that bring each chapter to life.
            </p>
          </motion.div>

        </div>
      </section>

      <div className="container-prose mx-auto"><div className="divider-glow my-4" /></div>

      {/* ── What's inside ────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20">
        <div className="container-prose mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ duration: 0.75, ease: EASE }}
            className="text-center mb-14"
          >
            <SectionLabel text="What's inside" className="mb-6" />
            <h2 className="font-display font-light italic text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.3]"
              style={{ color: '#f8f5ff' }}
            >
              29 Transmissions. Five phases.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3 max-w-[520px] mx-auto">
            {PHASES.map((phase, i) => {
              const isOpen = openPhase === i
              return (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(210,175,255,0.1)', background: 'rgba(210,175,255,0.02)' }}
                >
                  <button
                    onClick={() => setOpenPhase(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display italic text-[1.05rem]" style={{ color: 'rgba(240,236,255,0.88)' }}>
                      {phase.name}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[9px] tracking-[0.1em] uppercase" style={{ color: 'rgba(210,175,255,0.4)' }}>
                        {phase.range}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-mono text-[14px]"
                        style={{ color: 'rgba(210,175,255,0.5)' }}
                      >
                        +
                      </motion.span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <ul className="px-5 pb-4 flex flex-col gap-2">
                          {phase.chapters.map((chapter, ci) => (
                            <li key={chapter} className="flex items-baseline gap-3">
                              <span className="font-mono text-[9px]" style={{ color: 'rgba(210,175,255,0.35)' }}>
                                {String(ci + 1 + PHASES.slice(0, i).reduce((sum, p) => sum + p.chapters.length, 0)).padStart(2, '0')}
                              </span>
                              <span className="font-body text-[0.92rem]" style={{ color: 'rgba(235,228,255,0.65)' }}>
                                {chapter}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      <div className="container-prose mx-auto"><div className="divider-glow my-4" /></div>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20">
        <div className="container-prose mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-56px' }}
            transition={{ duration: 0.75, ease: EASE }}
            className="text-center mb-14"
          >
            <SectionLabel text="Questions" className="mb-6" />
            <h2 className="font-display font-light italic text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.3]"
              style={{ color: '#f8f5ff' }}
            >
              Before you begin.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3 max-w-[560px] mx-auto">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: EASE }}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(210,175,255,0.1)', background: 'rgba(210,175,255,0.02)' }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display italic text-[1rem]" style={{ color: 'rgba(240,236,255,0.88)' }}>
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-[14px] flex-shrink-0"
                      style={{ color: 'rgba(210,175,255,0.5)' }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 font-body text-[0.92rem] leading-[1.8]" style={{ color: 'rgba(235,228,255,0.6)' }}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      <div className="container-prose mx-auto"><div className="divider-glow my-4" /></div>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative z-10 pb-24">
        <div className="container-prose mx-auto text-center">
          <div className="mb-10">
            <ValueStack />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center gap-5"
          >
            <BeginPracticeButton variant="primary" size="lg">
              Begin Your Practice
            </BeginPracticeButton>
            <p className="font-mono text-[9px] tracking-[0.15em] uppercase" style={{ color: 'rgba(210,175,255,0.4)' }}>
              Ebook + lifetime app access · read inside the app · one time
            </p>
            <Link
              href="/the-transmission/preview"
              className="font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ color: 'rgba(210,175,255,0.5)' }}
            >
              Read a free preview →
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
