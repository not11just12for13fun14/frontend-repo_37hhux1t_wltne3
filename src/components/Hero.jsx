import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic spotlight and texture overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_20%,rgba(255,233,196,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_70%_80%,rgba(200,169,106,0.06),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Subtle drifting gold particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block h-[2px] w-[2px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,219,148,0.9) 0%, rgba(255,219,148,0.15) 70%, transparent 100%)', boxShadow: '0 0 12px rgba(200,169,106,0.35)' }}
            initial={{ opacity: 0, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ opacity: [0, 1, 0.6, 0.9, 0], x: ['-5%', '50%', '60%', '70%', '110%'], y: ['10%', '20%', '40%', '60%', '80%'] }}
            transition={{ duration: 20 + Math.random() * 20, delay: i * 0.4, repeat: Infinity, ease: 'linear' }}
          />
        ))}
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,transparent,rgba(0,0,0,0.5))]" />
    </section>
  )
}

export default Hero
