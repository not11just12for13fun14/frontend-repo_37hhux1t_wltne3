import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Brand Systems', desc: 'Elegant, enduring identity frameworks' },
  { title: 'Portfolio Strategy', desc: 'Allocation and growth across vintages' },
  { title: 'Market Access', desc: 'Channel curation and private introductions' },
  { title: 'Narrative & Film', desc: 'Cinematic brand assets with restraint' },
]

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0A0A0A] py-28 sm:py-36 overflow-hidden">
      {/* Fluid morphing background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 h-[520px] w-[520px] rounded-[40%_60%_55%_45%/60%_35%_65%_40%] opacity-30"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(120,84,48,0.2), transparent 60%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-24 right-0 h-[640px] w-[640px] rounded-[55%_45%_60%_40%/40%_60%_35%_65%] opacity-25"
          style={{ background: 'radial-gradient(circle at 70% 70%, rgba(200,169,106,0.18), transparent 60%)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h3 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#F0EAE0]">Services</h3>
          <p className="mt-4 text-[#E9E3D8]/75">Discreet, high-precision advisory across brand, market, and storytelling.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#C8A96A1A] bg-[#0B0B0B]/80 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px_240px_at_20%_10%, rgba(200,169,106,0.12), transparent 60%)' }} />
              <div className="relative">
                <div className="text-[#C8A96A] tracking-wide">{s.title}</div>
                <div className="mt-2 text-[#E9E3D8]/70">{s.desc}</div>
                <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#C8A96A] to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
