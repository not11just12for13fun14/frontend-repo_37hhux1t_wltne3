import React from 'react'
import { motion } from 'framer-motion'
import Bottle from './Bottle'

const projects = [
  { title: 'Estate Reserve', tag: 'Brand Architecture' },
  { title: 'Noir Cellars', tag: 'Film & Narrative' },
  { title: 'Alta Vigna', tag: 'Market Strategy' },
  { title: 'Gran Cuvée', tag: 'Portfolio Curation' },
]

const Portfolio = () => {
  return (
    <section id="work" className="relative w-full bg-[#14110F] py-28 sm:py-36 overflow-hidden">
      {/* Subtle grid texture and deep tone */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* Optional soft red-wine liquid motion behind section title */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-16 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-[50%] opacity-[0.18]"
        style={{ background: 'radial-gradient(closest-side, rgba(62,8,12,0.5), rgba(40,6,8,0.28) 60%, rgba(20,4,6,0.0) 80%)', filter: 'blur(40px)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h3 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#F0EAE0]">Selected Work</h3>
          <p className="mt-4 text-[#E9E3D8]/75">Case studies in discretion and effect.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[#C8A96A1A] bg-gradient-to-b from-[#0F0F0F] to-[#0B0B0B] p-6 sm:p-8"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
            >
              {/* Decorative mini bottle replacing abstract zoom overlays */}
              <div className="absolute right-6 top-6 opacity-40">
                <Bottle className="w-10" duration={22} />
              </div>
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.22em] text-[#C8A96A]">{p.tag}</div>
                <div className="mt-3 font-serif text-3xl text-[#F0EAE0]">{p.title}</div>
                <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#C8A96A] to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
