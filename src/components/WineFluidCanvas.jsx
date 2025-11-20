import React, { useEffect, useRef } from 'react'

// WineFluidCanvas renders a slow, elegant deep-red liquid motion using
// curl-noise advection for hundreds of tiny semi-transparent particles.
// It aims to evoke premium red wine flowing behind the bottle.
const WineFluidCanvas = ({ className = '' }) => {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    let width = canvas.width = canvas.offsetWidth
    let height = canvas.height = canvas.offsetHeight

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(width * DPR)
    canvas.height = Math.floor(height * DPR)
    ctx.scale(DPR, DPR)

    const particleCount = Math.floor((width * height) / 18000) // density scaled
    const particles = new Array(particleCount).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      age: Math.random() * 400,
      life: 400 + Math.random() * 600,
      size: 0.8 + Math.random() * 1.6,
      speed: 0.25 + Math.random() * 0.4
    }))

    // Smooth noise helpers
    const hash = (x, y) => {
      return Math.sin(x * 127.1 + y * 311.7) * 43758.5453 % 1
    }
    const noise = (x, y) => {
      const xi = Math.floor(x), yi = Math.floor(y)
      const xf = x - xi, yf = y - yi
      const s = hash(xi, yi)
      const t = hash(xi + 1, yi)
      const u = hash(xi, yi + 1)
      const v = hash(xi + 1, yi + 1)
      const fade = (a) => a * a * (3 - 2 * a)
      const nx1 = s + (t - s) * fade(xf)
      const nx2 = u + (v - u) * fade(xf)
      return nx1 + (nx2 - nx1) * fade(yf)
    }
    const curl = (x, y, t) => {
      const e = 0.001
      const n1 = noise(x * 0.002 + t, y * 0.002)
      const n2 = noise(x * 0.002, y * 0.002 + t)
      // pseudo curl from two noise samples
      const dx = n2 - n1
      const dy = n1 - n2
      return { x: dx, y: dy }
    }

    let lastTime = performance.now()

    const draw = (time) => {
      const dt = Math.min(33, time - lastTime) / 1000
      lastTime = time

      // Gentle fade to leave trails (like fluid dye) using dark background
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = 'rgba(10,10,10,0.28)'
      ctx.fillRect(0, 0, width, height)

      ctx.globalCompositeOperation = 'lighter'

      const t = time * 0.00006 // slow evolution
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const v = curl(p.x, p.y, t)
        p.x += v.x * p.speed * 60 * dt
        p.y += v.y * p.speed * 60 * dt
        p.age += 1

        // wrap & respawn softly to keep fill
        if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10 || p.age > p.life) {
          p.x = Math.random() * width
          p.y = Math.random() * height
          p.age = 0
          p.life = 400 + Math.random() * 600
          p.size = 0.8 + Math.random() * 1.6
          p.speed = 0.25 + Math.random() * 0.4
        }

        // deep red wine tone with depth variations
        const base = 0.18 + (p.size - 0.8) * 0.06
        ctx.fillStyle = `rgba(72, 8, 12, ${base})` // rich dark red
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size + 0.6, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(96, 12, 18, ${base * 0.7})`
        ctx.beginPath()
        ctx.arc(p.x + 0.5, p.y + 0.3, p.size * 0.9, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const handleResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      const DPR2 = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * DPR2)
      canvas.height = Math.floor(height * DPR2)
      ctx.setTransform(1,0,0,1,0,0)
      ctx.scale(DPR2, DPR2)
    }
    const ro = new ResizeObserver(handleResize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} />
}

export default WineFluidCanvas
