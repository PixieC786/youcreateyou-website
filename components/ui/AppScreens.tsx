'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const
const DURATION = 6000

// Real screenshots of the live app at app.youcreateyou.life, all 1915×991.
const SCREENS = [
  {
    src: '/images/app-home-screen.png',
    alt: 'You Create You — app home screen with the Inner Cosmos',
    caption: 'Your Inner Cosmos — the home screen',
  },
  {
    src: '/images/app-ancient-wisdom.png',
    alt: 'Portal 01 — Ancient Wisdom Library, a daily wisdom transmission',
    caption: 'Portal 01 · Ancient Wisdom Library',
  },
  {
    src: '/images/app-frequency-tuner.png',
    alt: 'Portal 03 — The Frequency Tuner, naming your inner state',
    caption: 'Portal 03 · The Frequency Tuner',
  },
]

export default function AppScreens() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startRef = useRef<number>(Date.now())

  const start = () => {
    startRef.current = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (elapsed >= DURATION) {
        setActive(prev => (prev + 1) % SCREENS.length)
        setProgress(0)
        startRef.current = Date.now()
      }
    }, 30)
  }
  const stop = () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  const goTo = (i: number) => { stop(); setActive(i); setProgress(0); start() }

  useEffect(() => {
    start()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[1200px] px-6">
      <div
        className="relative rounded-2xl overflow-hidden mx-auto"
        style={{
          aspectRatio: '1915 / 991',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(140,70,255,0.14)',
          border: '1px solid rgba(210,175,255,0.12)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="absolute inset-0"
          >
            <Image
              src={SCREENS[active].src}
              alt={SCREENS[active].alt}
              fill
              sizes="(max-width: 1200px) 90vw, 1200px"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center gap-4 mt-7">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.6)]"
          >
            {SCREENS[active].caption}
          </motion.p>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-3">
          {SCREENS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`App screen ${i + 1}`}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-400"
              style={{ width: active === i ? '48px' : '12px', background: 'rgba(179,136,255,0.15)' }}
            >
              {active === i && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[rgba(179,136,255,0.55)] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
