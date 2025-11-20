import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-[#E9E3D8] font-[var(--font-sans)]">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
