'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

// Featured portals shown inside the phone — real portrait screenshots of the
// live app at app.youcreateyou.life (500×1028, matching the frame's 9:18.5
// aspect so object-cover doesn't crop). Copy matches ALL_TOOLS on this page.
const PORTALS = [
  {
    id: 'love',
    step: '09',
    name: 'The Love You Are',
    tagline: 'The foundation of everything.',
    description:
      'A journey from root to vow. The practice of meeting yourself — fully, without conditions — from the inside out.',
    color: 'rgba(235,105,145,0.12)',
    src: '/images/app-mobile-love.png',
    alt: 'Portal 09 — The Love You Are, the practice of meeting yourself',
  },
  {
    id: 'cinema',
    step: '15',
    name: 'The Inner Cinema',
    tagline: 'The most powerful portal in the practice.',
    description:
      'Not a mental movie watched from the outside. A felt reality inhabited from within. A guided 20-minute journey — 432 Hz, theta waves, binaural.',
    color: 'rgba(179,136,255,0.14)',
    src: '/images/app-mobile-cinema.png',
    alt: 'Portal 15 — The Inner Cinema, a 20-minute guided journey',
  },
  {
    id: 'thanks',
    step: '16',
    name: 'The Frequency of Thanks',
    tagline: 'The most powerful daily practice in the app.',
    description:
      'The real kind of gratitude does not feel like appreciation — it feels like the chest opening. Come not to list but to feel.',
    color: 'rgba(232,213,160,0.10)',
    src: '/images/app-mobile-thanks.png',
    alt: 'Portal 16 — The Frequency of Thanks, the daily gratitude practice',
  },
]

// Same status bar + frame visual language as the Creator Field phone mockup
// (CreatorFieldExplorer.tsx), with the screen filled by a real app screenshot.
function StatusBar() {
  return (
    <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 pt-2.5">
      <span className="font-mono text-[9px] font-semibold tracking-tight text-white/90">9:41</span>
      <div className="flex items-center gap-1">
        <svg width="12" height="8" viewBox="0 0 16 12" fill="none" aria-hidden>
          <rect x="0" y="7" width="2.6" height="5" rx="0.5" fill="white" />
          <rect x="4.4" y="5" width="2.6" height="7" rx="0.5" fill="white" />
          <rect x="8.8" y="3" width="2.6" height="9" rx="0.5" fill="white" />
          <rect x="13.2" y="0" width="2.6" height="12" rx="0.5" fill="white" fillOpacity="0.4" />
        </svg>
        <svg width="11" height="8" viewBox="0 0 16 12" fill="none" aria-hidden>
          <circle cx="8" cy="10" r="1.3" fill="white" />
          <path d="M4.3 6.6a5.2 5.2 0 017.4 0" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M1.7 3.8a9 9 0 0112.6 0" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeOpacity="0.55" />
        </svg>
        <svg width="18" height="9" viewBox="0 0 24 12" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="white" strokeOpacity="0.5" />
          <rect x="2" y="2" width="15" height="8" rx="1.3" fill="white" />
          <rect x="21.5" y="4" width="1.6" height="4" rx="0.7" fill="white" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  )
}

function PhoneScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[240px] aspect-[9/18.5] rounded-[2rem] border border-[rgba(179,136,255,0.2)] bg-[#0a0620] shadow-[0_30px_70px_-24px_rgba(90,25,170,0.5)] overflow-hidden">
      <Image src={src} alt={alt} fill sizes="240px" className="object-cover" />
      <StatusBar />
      {/* Dynamic-island-style notch */}
      <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-14 h-[16px] rounded-full bg-black z-20" />
      {/* Home indicator */}
      <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-24 h-[3px] rounded-full bg-white/25 z-20" />
    </div>
  )
}

export default function AppScreens() {
  const [active, setActive] = useState(0)
  const portal = PORTALS[active]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-5">

      {/* Selector */}
      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {PORTALS.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.07, duration: 0.55, ease: EASE }}
            suppressHydrationWarning
            className={`
              group relative flex-shrink-0 text-left px-8 py-6 rounded-xl border
              transition-all duration-300 cursor-pointer
              ${active === i
                ? 'border-[rgba(179,136,255,0.32)] bg-[rgba(179,136,255,0.08)] shadow-[0_2px_24px_rgba(0,0,0,0.35)]'
                : 'border-[rgba(179,136,255,0.07)] bg-transparent hover:border-[rgba(179,136,255,0.16)] hover:bg-[rgba(179,136,255,0.03)]'
              }
            `}
          >
            {active === i && (
              <motion.div
                layoutId="app-screen-pill"
                className="absolute left-0 top-1/4 bottom-1/4 w-[2px] rounded-full bg-accent/60"
              />
            )}
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.42)] block mb-1.5">
              Portal {p.step}
            </span>
            <p className={`font-display italic text-[1.6rem] leading-snug transition-colors duration-300 ${active === i ? 'text-[#f0ecff]' : 'text-[rgba(240,236,255,0.48)]'}`}>
              {p.name}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="lg:sticky lg:top-24 self-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: 0.38, ease: EASE }}
            className="relative rounded-2xl border border-[rgba(179,136,255,0.14)] overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 80% 60% at 20% 30%, ${portal.color} 0%, transparent 70%)` }}
            />

            <div className="relative z-10 p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

              <div>
                <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)]">
                  Portal {portal.step}
                </span>
                <h3 className="font-display italic text-[clamp(1.5rem,2.6vw,2rem)] text-[#f0ecff] mt-3 mb-2 font-light leading-[1.15]">
                  {portal.name}
                </h3>
                <p className="font-display italic text-[1rem] text-[rgba(200,166,255,0.65)] mb-5 leading-snug">
                  {portal.tagline}
                </p>
                <p className="font-body text-[rgba(240,236,255,0.58)] text-[14px] leading-[1.8] max-w-[42ch]">
                  {portal.description}
                </p>
              </div>

              <PhoneScreen src={portal.src} alt={portal.alt} />

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
