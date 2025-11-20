import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0B0A09] py-28 sm:py-36 overflow-hidden">
      {/* Warm reflections */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 -left-10 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(120,84,48,0.18), transparent 60%)' }} />
        <div className="absolute -bottom-10 -right-10 h-96 w-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 70% 70%, rgba(200,169,106,0.12), transparent 60%)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-[#F0EAE0]">Quiet Authority in the World of Wine</h2>
            <p className="mt-6 text-[#E9E3D8]/80 leading-relaxed">
              We advise vintners, estates, and premium labels on strategy, brand systems, distribution, and discreet market expansion. Our method is cinematic yet restrained—minimal inputs, maximal clarity.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { k: 'Brand Architecture', v: 'Minimal systems for timeless labels' },
                { k: 'Portfolio Strategy', v: 'Curated growth for discerning markets' },
                { k: 'Market Intelligence', v: 'Signals over noise, always' },
                { k: 'Executive Advisory', v: 'Private, precise, confidential' },
              ].map((i) => (
                <div key={i.k} className="rounded-xl border border-[#C8A96A1A] bg-black/20 p-5">
                  <div className="text-[#C8A96A] font-medium">{i.k}</div>
                  <div className="mt-1 text-sm text-[#E9E3D8]/70">{i.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visuals */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#C8A96A1A] bg-gradient-to-b from-black to-[#1a1510] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Parallax layers */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent 30%)' }} />
              <div className="absolute inset-0 bg-[radial-gradient(500px_220px_at_70%_20%,rgba(200,169,106,0.12),transparent_60%)]" />
              {/* Mock accessories silhouettes */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2">
                <div className="absolute bottom-6 left-8 h-40 w-24 rounded-t-2xl bg-gradient-to-b from-[#0E0E0E] to-black" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.02)' }} />
                <div className="absolute bottom-10 left-40 h-28 w-28 rounded-full bg-gradient-to-b from-[#111] to-black" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.02)' }} />
                <div className="absolute bottom-20 right-10 h-24 w-40 rounded-3xl bg-gradient-to-b from-[#111] to-black" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.02)' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
