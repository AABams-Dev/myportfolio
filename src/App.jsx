import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Skills from './Components/Skills'

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Services />
      <Skills/>
    </div>
  )
}

export default App