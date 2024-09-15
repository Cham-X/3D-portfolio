// import React from 'react'
import About from './sections/About'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Project from './sections/Project'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Clients />
      <Contact />
    </main>
  )
}

export default App
