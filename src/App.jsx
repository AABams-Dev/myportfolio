import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default App