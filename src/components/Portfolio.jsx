import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Estate Reserve', tag: 'Brand Architecture' },
  { title: 'Noir Cellars', tag: 'Film & Narrative' },
  { title: 'Alta Vigna', tag: 'Market Strategy' },
  { title: 'Gran Cuvée', tag: 'Portfolio Curation' },
]

const Portfolio = () => {
  return (
    <section id="work" className="relative w-full bg-[#14110F] py-28 sm:py-36 overflow-hidden">
      {/* Brown texture feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(120,84,48,0.18),transparent_60%)]" />

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
              <div className="absolute inset-0 transition-transform duration-[20000ms] group-hover:scale-110" style={{ background: 'radial-gradient(700px_320px_at_80%_20%, rgba(200,169,106,0.12), transparent 60%)' }} />
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
