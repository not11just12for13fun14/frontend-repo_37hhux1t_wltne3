import React, { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Bottle from './Bottle'
import WineFluidCanvas from './WineFluidCanvas'

const Hero = () => {
  // Optional: extremely subtle warm-gold dust (tiny count)
  const seeds = useMemo(() => Array.from({ length: 5 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    d: 30 + Math.random() * 30,
    delay: Math.random() * 8,
    size: 1 + Math.random() * 2,
    driftX: 20 + Math.random() * 30,
    driftY: 16 + Math.random() * 24
  })), [])

  // Parallax for centerpiece
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotY = useTransform(mx, [-50, 50], [-5, 5])
  const rotX = useTransform(my, [-50, 50], [3, -3])
  const transX = useTransform(mx, [-50, 50], [-6, 6])
  const transY = useTransform(my, [-50, 50], [5, -5])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    mx.set(x - 50)
    my.set(y - 50)
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative h-[100svh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* BACKGROUND: Only deep black base + 3D flowing red-wine liquid behind bottle */}
      <div className="absolute inset-0">
        <WineFluidCanvas />
      </div>

      {/* Optional warm-gold dust (minimal, realistic glow) */}
      <div className="pointer-events-none absolute inset-0">
        {seeds.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${s.y}%`,
              left: `${s.x}%`,
              width: s.size,
              height: s.size,
              background: 'radial-gradient(circle, rgba(238,215,161,0.35) 0%, rgba(238,215,161,0.10) 70%, transparent 100%)',
              filter: 'blur(1.2px)',
              boxShadow: '0 0 12px rgba(200,169,106,0.15)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0.15, 0.28, 0.1, 0], x: [0, s.driftX], y: [0, s.driftY] }}
            transition={{ duration: s.d, delay: s.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Centerpiece: premium matte-black wine bottle with subtle warm-gold reflections */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        <motion.div style={{ rotateY: rotY, rotateX: rotX, x: transX, y: transY }}>
          <Bottle className="w-[18vw] max-w-[260px] min-w-[130px]" duration={28} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C8A96A1A] bg-black/30 px-4 py-2 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'linear-gradient(90deg,#EED7A1,#C8A96A)' }} />
              <span className="text-[12px] tracking-[0.2em] uppercase text-[#E9E3D8]/70">VinoCEO</span>
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.95] tracking-tight text-[#F0EAE0]">
              Executive Wine Strategy,
              <br /> Crafted with Quiet Luxury
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#E9E3D8]/75">
              Boutique consulting for vineyards and wine portfolios. We blend market insight, brand minimalism, and cinematic storytelling to elevate your label with restraint and precision.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#about" className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm tracking-wide text-[#E9E3D8]" style={{ border: '1px solid rgba(200,169,106,0.45)', boxShadow: 'inset 0 0 0 1px rgba(200,169,106,0.18)' }}>
                <span className="transition-colors">Explore the House</span>
                <span className="h-[1px] w-6 bg-[#C8A96A] transition-all duration-300 group-hover:w-10" />
              </a>
              <button className="relative inline-flex items-center rounded-full px-5 py-3 text-sm text-[#E9E3D8]/80">
                <span className="opacity-80">Request a Private Consultation</span>
                <span className="absolute inset-0 rounded-full transition-shadow duration-500" style={{ boxShadow: '0 0 0 0 rgba(200,169,106,0.0)' }} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle vignette for cinematic framing */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,transparent,rgba(0,0,0,0.55))]" />
    </section>
  )
}

export default Hero
