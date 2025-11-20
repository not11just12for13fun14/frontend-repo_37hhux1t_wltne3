import React, { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  // Generate particle seeds once
  const seeds = useMemo(() => Array.from({ length: 10 }, () => ({
    x: Math.random() * 100, // percent
    y: Math.random() * 100, // percent
    d: 24 + Math.random() * 24, // duration seconds
    delay: Math.random() * 6,
    size: 2 + Math.random() * 3,
    driftX: 40 + Math.random() * 40,
    driftY: 30 + Math.random() * 40
  })), [])

  // Subtle pointer parallax for bottle
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotY = useTransform(mx, [-50, 50], [-6, 6])
  const rotX = useTransform(my, [-50, 50], [4, -4])
  const transX = useTransform(mx, [-50, 50], [-8, 8])
  const transY = useTransform(my, [-50, 50], [6, -6])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    mx.set(x - 50)
    my.set(y - 50)
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative h-[100svh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Spline cover background (kept subtle) */}
      <div className="absolute inset-0 opacity-[0.85]">
        <Spline scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic spotlight and texture overlays (warmer but restrained) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_20%,rgba(238,215,161,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_70%_80%,rgba(200,169,106,0.04),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Low-density warm bokeh particles (background) */}
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
              background: 'radial-gradient(circle, rgba(238,215,161,0.55) 0%, rgba(238,215,161,0.12) 65%, transparent 100%)',
              filter: 'blur(1.5px)',
              boxShadow: '0 0 18px rgba(200,169,106,0.20), 0 0 32px rgba(200,169,106,0.10)'
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0.25, 0.5, 0.15, 0],
              x: [0, s.driftX],
              y: [0, s.driftY]
            }}
            transition={{ duration: s.d, delay: s.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Centerpiece: matte-black wine bottle */}
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        <motion.div
          style={{ rotateY: rotY, rotateX: rotX, x: transX, y: transY }}
          className="relative"
        >
          {/* Bottle group */}
          <div className="relative">
            {/* Bottle shadow/ground */}
            <div className="mx-auto h-6 w-[46vw] max-w-[520px] min-w-[260px] translate-y-1 rounded-full bg-black/40 blur-[10px] opacity-40" />

            {/* Bottle body */}
            <div className="mx-auto relative w-[18vw] max-w-[220px] min-w-[120px] h-[48vh] max-h-[600px] min-h-[420px]">
              {/* main silhouette */}
              <div className="absolute inset-0 rounded-b-[28px]" style={{
                background: 'linear-gradient(180deg, #0B0A09 0%, #14110F 60%, #0B0A09 100%)',
                boxShadow: 'inset 0 -40px 60px rgba(0,0,0,0.6), inset 0 20px 40px rgba(0,0,0,0.4)'
              }} />

              {/* shoulders */}
              <div className="absolute left-1/2 top-[8%] h-[18%] w-[84%] -translate-x-1/2 rounded-[40%/60%]" style={{
                background: 'radial-gradient(ellipse at 50% 30%, #0E0D0C 0%, #0A0A0A 70%)',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.6))'
              }} />

              {/* neck */}
              <div className="absolute left-1/2 top-[0%] h-[24%] w-[26%] -translate-x-1/2 rounded-[10px]" style={{
                background: 'linear-gradient(180deg, #0E0D0C 0%, #14110F 100%)'
              }} />

              {/* lip */}
              <div className="absolute left-1/2 top-[-2%] h-[3%] w-[32%] -translate-x-1/2 rounded-[10px] bg-[#0F0E0D]" />

              {/* subtle gold rim light (very restrained) */}
              <div className="pointer-events-none absolute inset-0 rounded-b-[28px]" style={{
                background: 'linear-gradient(90deg, rgba(238,215,161,0.00) 0%, rgba(238,215,161,0.06) 35%, rgba(200,169,106,0.10) 50%, rgba(238,215,161,0.04) 65%, rgba(238,215,161,0.00) 100%)',
                mixBlendMode: 'screen',
                filter: 'blur(0.4px)'
              }} />

              {/* faint vertical specular */}
              <div className="pointer-events-none absolute left-[34%] top-[6%] h-[70%] w-[10%] rounded-full" style={{
                background: 'linear-gradient(180deg, rgba(238,215,161,0.03) 0%, rgba(255,255,255,0.06) 30%, rgba(238,215,161,0.02) 100%)',
                filter: 'blur(2px)',
                opacity: 0.35
              }} />

              {/* label placeholder (matte black-on-black) */}
              <div className="absolute left-1/2 top-[48%] h-[16%] w-[58%] -translate-x-1/2 rounded-md" style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), inset 0 -1px 0 rgba(255,255,255,0.02)'
              }} />
            </div>
          </div>
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

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,transparent,rgba(0,0,0,0.55))]" />
    </section>
  )
}

export default Hero
