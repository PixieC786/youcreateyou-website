'use client'

import { useRef, useState, useEffect } from 'react'

function formatTime(sec: number) {
  if (!isFinite(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function AudioSample() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const onTime = () => setCurrent(el.currentTime)
    const onMeta = () => setDuration(el.duration)
    const onEnd = () => setPlaying(false)
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('loadedmetadata', onMeta)
    el.addEventListener('ended', onEnd)
    return () => {
      el.removeEventListener('timeupdate', onTime)
      el.removeEventListener('loadedmetadata', onMeta)
      el.removeEventListener('ended', onEnd)
    }
  }, [])

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (playing) { el.pause() } else { el.play() }
    setPlaying(!playing)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audioRef.current
    if (!el || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    el.currentTime = pct * duration
  }

  const progress = duration ? (current / duration) * 100 : 0

  return (
    <div
      className="rounded-xl p-4 max-w-md"
      style={{ border: '1px solid rgba(210,175,255,0.15)', background: 'rgba(210,175,255,0.04)' }}
    >
      <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: 'rgba(210,175,255,0.6)' }}>
        Listen — Transmission I (sample)
      </p>

      <audio ref={audioRef} preload="none">
        <source src="/audio/transmission-1-sample.mp3" type="audio/mpeg" />
      </audio>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label={playing ? 'Pause' : 'Play'}
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: 'rgba(155,90,230,0.22)', border: '1px solid rgba(179,136,255,0.4)' }}
        >
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(230,210,255,0.95)"><rect x="5" y="4" width="5" height="16" rx="1" /><rect x="14" y="4" width="5" height="16" rx="1" /></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(230,210,255,0.95)" style={{ marginLeft: '2px' }}><path d="M6 4l15 8-15 8V4z" /></svg>
          )}
        </button>

        <div className="flex-1 h-1 rounded-full cursor-pointer" style={{ background: 'rgba(210,175,255,0.15)' }} onClick={seek}>
          <div className="h-full rounded-full" style={{ width: `${progress}%`, background: 'rgba(210,175,255,0.7)' }} />
        </div>

        <span className="font-mono text-[10px] flex-shrink-0 tabular-nums" style={{ color: 'rgba(235,228,255,0.4)' }}>
          {formatTime(current)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  )
}
