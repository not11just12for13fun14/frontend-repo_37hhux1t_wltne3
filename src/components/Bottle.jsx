import React from 'react'
import { motion } from 'framer-motion'

// Reusable matte-black wine bottle with subtle warm-gold reflections
// Props: size (px or tailwind width via className), height (px), className, animate (boolean), duration (seconds)
const Bottle = ({ className = '', animate = true, duration = 18, delay = 0 }) => {
  return (
    <motion.div
      initial={animate ? { rotate: -2 } : false}
      animate={animate ? { rotate: [ -2, 2, -2 ] } : undefined}
      transition={animate ? { duration, delay, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className={`relative ${className}`}
      style={{ aspectRatio: '3/8', minWidth: 60 }}
    >
      {/* bottle shadow */}
      <div className="absolute -bottom-2 left-1/2 h-3 w-[120%] -translate-x-1/2 rounded-full bg-black/40 blur-[10px] opacity-40" />

      {/* body */}
      <div className="absolute inset-0 rounded-b-[24px]" style={{
        background: 'linear-gradient(180deg, #0B0A09 0%, #14110F 60%, #0B0A09 100%)',
        boxShadow: 'inset 0 -40px 60px rgba(0,0,0,0.6), inset 0 20px 40px rgba(0,0,0,0.4)'
      }} />

      {/* shoulders */}
      <div className="absolute left-1/2 top-[10%] h-[18%] w-[84%] -translate-x-1/2 rounded-[40%/60%]" style={{
        background: 'radial-gradient(ellipse at 50% 30%, #0E0D0C 0%, #0A0A0A 70%)',
        filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.6))'
      }} />

      {/* neck */}
      <div className="absolute left-1/2 top-[0%] h-[24%] w-[26%] -translate-x-1/2 rounded-[10px]" style={{
        background: 'linear-gradient(180deg, #0E0D0C 0%, #14110F 100%)'
      }} />

      {/* lip */}
      <div className="absolute left-1/2 -top-[1.5%] h-[3%] w-[32%] -translate-x-1/2 rounded-[10px] bg-[#0F0E0D]" />

      {/* label (matte, optional hint) */}
      <div className="absolute left-1/2 top-[48%] h-[16%] w-[58%] -translate-x-1/2 rounded-md" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), inset 0 -1px 0 rgba(255,255,255,0.02)'
      }} />

      {/* subtle warm-gold rim light */}
      <div className="pointer-events-none absolute inset-0 rounded-b-[24px]" style={{
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
    </motion.div>
  )
}

export default Bottle
