import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0A0A0A] py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="font-serif text-[#C8A96A] text-lg">VinoCEO</div>
          <div className="flex items-center gap-6 text-[#C8A96A] text-sm">
            <span className="h-px w-10 bg-[#C8A96A]/60" />
            <a href="#services" className="hover:text-[#EED7A1] transition-colors">Services</a>
            <a href="#work" className="hover:text-[#EED7A1] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#EED7A1] transition-colors">About</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
