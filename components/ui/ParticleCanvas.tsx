'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number
  baseAlpha: number
  color: string
  twinkleSpeed: number
  twinkleOffset: number
}

interface ParticleCanvasProps {
  className?: string
  particleCount?: number
  connectDistance?: number
  speed?: number
}

const COLORS = [
  '#b388ff', '#9c6fff', '#d4aaff', '#7c4dff',
  '#c8a6ff', '#ffffff', '#e8d8ff',
]

export default function ParticleCanvas({
  className = '',
  particleCount = 70,
  connectDistance = 130,
  speed = 1,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasMaybe = canvasRef.current
    if (!canvasMaybe) return
    const ctxMaybe = canvasMaybe.getContext('2d')
    if (!ctxMaybe) return
    // Assign to typed consts so TypeScript narrowing persists inside nested closures
    const el: HTMLCanvasElement = canvasMaybe
    const ctx: CanvasRenderingContext2D = ctxMaybe

    let animId: number
    let W = 0, H = 0
    let particles: Particle[] = []
    let t = 0

    function isMobile() { return window.innerWidth < 640 }

    function initParticles() {
      const count = isMobile()
        ? Math.floor(particleCount * 0.45)
        : particleCount

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18 * speed,
        vy: (Math.random() - 0.5) * 0.18 * speed,
        r: 0.4 + Math.random() * 2.2,
        baseAlpha: 0.12 + Math.random() * 0.55,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        twinkleSpeed: 0.004 + Math.random() * 0.012,
        twinkleOffset: Math.random() * Math.PI * 2,
      }))
    }

    function resize() {
      W = el.width  = el.offsetWidth  * (window.devicePixelRatio || 1)
      H = el.height = el.offsetHeight * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      W = el.offsetWidth
      H = el.offsetHeight
      initParticles()
    }

    function hex2rgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${alpha.toFixed(3)})`
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.01

      // Connecting lines (skip on mobile for performance)
      if (!isMobile()) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx   = particles[i].x - particles[j].x
            const dy   = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < connectDistance) {
              const alpha = (1 - dist / connectDistance) * 0.07
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(179,136,255,${alpha})`
              ctx.lineWidth   = 0.4
              ctx.stroke()
            }
          }
        }
      }

      // Subtle rotating hexagon (sacred geometry)
      const hexR = Math.min(W, H) * 0.42
      ctx.save()
      ctx.translate(W / 2, H / 2)
      ctx.rotate(t * 0.018)
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 6
        i === 0
          ? ctx.moveTo(Math.cos(a) * hexR, Math.sin(a) * hexR)
          : ctx.lineTo(Math.cos(a) * hexR, Math.sin(a) * hexR)
      }
      ctx.closePath()
      ctx.strokeStyle = 'rgba(179,136,255,0.03)'
      ctx.lineWidth   = 1
      ctx.stroke()

      // Inner hexagon
      ctx.rotate(Math.PI / 6)
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 6
        i === 0
          ? ctx.moveTo(Math.cos(a) * hexR * 0.62, Math.sin(a) * hexR * 0.62)
          : ctx.lineTo(Math.cos(a) * hexR * 0.62, Math.sin(a) * hexR * 0.62)
      }
      ctx.closePath()
      ctx.strokeStyle = 'rgba(179,136,255,0.025)'
      ctx.stroke()
      ctx.restore()

      // Particles
      particles.forEach(p => {
        const twinkle = Math.sin(t / p.twinkleSpeed + p.twinkleOffset) * 0.35 + 0.65
        const alpha   = p.baseAlpha * twinkle

        // Soft outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
        grd.addColorStop(0, hex2rgba(p.color, alpha * 0.4))
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = hex2rgba(p.color, alpha)
        ctx.fill()

        // Move + wrap
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = W + 20
        if (p.x > W + 20) p.x = -20
        if (p.y < -20) p.y = H + 20
        if (p.y > H + 20) p.y = -20
      })

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
  }, [particleCount, connectDistance, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}
