'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  baseAlpha: number
  twinkleSpeed: number
  twinkleOffset: number
  tier: 'dim' | 'mid' | 'bright'
}

interface StarFieldProps {
  className?: string
  density?: number        // multiplier, default 1
  connectDistance?: number
  showLines?: boolean
}

const STAR_COLORS = {
  bright: 'rgba(255,248,255,',   // near-white warm
  mid:    'rgba(225,200,255,',   // soft lavender
  dim:    'rgba(185,160,230,',   // muted violet
}

export default function StarField({
  className = '',
  density = 1,
  connectDistance = 110,
  showLines = true,
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasMaybe = canvasRef.current
    if (!canvasMaybe) return
    const ctxMaybe = canvasMaybe.getContext('2d')
    if (!ctxMaybe) return

    const el: HTMLCanvasElement = canvasMaybe
    const ctx: CanvasRenderingContext2D = ctxMaybe

    let animId: number
    let W = 0, H = 0
    let stars: Star[] = []
    let t = 0

    const isMobile = () => window.innerWidth < 640

    function initStars() {
      const base = isMobile() ? 140 : 240
      const count = Math.floor(base * density)

      stars = Array.from({ length: count }, () => {
        const roll = Math.random()
        const tier: Star['tier'] = roll > 0.93 ? 'bright' : roll > 0.65 ? 'mid' : 'dim'

        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r: tier === 'bright' ? 1.1 + Math.random() * 0.9
           : tier === 'mid'    ? 0.55 + Math.random() * 0.55
           :                     0.25 + Math.random() * 0.35,
          baseAlpha: tier === 'bright' ? 0.72 + Math.random() * 0.28
                   : tier === 'mid'    ? 0.32 + Math.random() * 0.25
                   :                    0.1  + Math.random() * 0.18,
          twinkleSpeed: tier === 'bright' ? 0.003 + Math.random() * 0.007
                      : tier === 'mid'    ? 0.005 + Math.random() * 0.01
                      :                    0.006 + Math.random() * 0.013,
          twinkleOffset: Math.random() * Math.PI * 2,
          tier,
        }
      })
    }

    function resize() {
      W = el.width  = el.offsetWidth  * (window.devicePixelRatio || 1)
      H = el.height = el.offsetHeight * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      W = el.offsetWidth
      H = el.offsetHeight
      initStars()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.01

      // ── Constellation lines ──
      if (showLines && !isMobile()) {
        for (let i = 0; i < stars.length; i++) {
          if (stars[i].tier === 'dim') continue  // only mid + bright form lines
          for (let j = i + 1; j < stars.length; j++) {
            if (stars[j].tier === 'dim') continue
            const dx = stars[i].x - stars[j].x
            const dy = stars[i].y - stars[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < connectDistance) {
              const alpha = (1 - dist / connectDistance) * 0.14
              ctx.beginPath()
              ctx.moveTo(stars[i].x, stars[i].y)
              ctx.lineTo(stars[j].x, stars[j].y)
              ctx.strokeStyle = `rgba(200,170,255,${alpha.toFixed(3)})`
              ctx.lineWidth = 0.45
              ctx.stroke()
            }
          }
        }
      }

      // ── Stars ──
      for (const star of stars) {
        const twinkle = Math.sin(t / star.twinkleSpeed + star.twinkleOffset) * 0.38 + 0.62
        const alpha = star.baseAlpha * twinkle

        // Glow halo — only on mid + bright
        if (star.tier !== 'dim') {
          const haloR = star.r * (star.tier === 'bright' ? 7 : 4.5)
          const grd = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, haloR)
          grd.addColorStop(0, `${STAR_COLORS[star.tier]}${(alpha * 0.45).toFixed(3)})`)
          grd.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.beginPath()
          ctx.arc(star.x, star.y, haloR, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()

          // Cross sparkle on brightest stars
          if (star.tier === 'bright' && alpha > 0.65) {
            const len = star.r * 4 * (alpha - 0.4)
            ctx.save()
            ctx.strokeStyle = `rgba(255,248,255,${(alpha * 0.25).toFixed(3)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(star.x - len, star.y)
            ctx.lineTo(star.x + len, star.y)
            ctx.moveTo(star.x, star.y - len)
            ctx.lineTo(star.x, star.y + len)
            ctx.stroke()
            ctx.restore()
          }
        }

        // Star core dot
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `${STAR_COLORS[star.tier]}${alpha.toFixed(3)})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(el)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [density, connectDistance, showLines])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}
