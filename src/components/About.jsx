import React from 'react'
import { motion } from 'framer-motion'
import Bottle from './Bottle'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0B0A09] py-28 sm:py-36 overflow-hidden">
      {/* Decorative motion: remove abstract shapes, add subtle bottle silhouettes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div className="absolute -left-6 top-16 opacity-[0.35]" animate={{ y: [0, -6, 0] }} transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}>
          <Bottle className="w-12" duration={24} />
        </motion.div>
        <motion.div className="absolute right-2 bottom-24 opacity-[0.28]" animate={{ y: [0, 8, 0] }} transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}>
          <Bottle className="w-10" duration={28} />
        </motion.div>
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

          {/* Visuals: replace abstract forms with composition featuring bottle */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#C8A96A1A] bg-gradient-to-b from-black to-[#1a1510] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Parallax layers and soft red-wine glow */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent 30%)' }} />
              <div className="absolute inset-0 bg-[radial-gradient(500px_220px_at_70%_20%,rgba(62,8,12,0.35),transparent_60%)]" />
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                <Bottle className="w-24" duration={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
