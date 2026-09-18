import { useEffect, useState } from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Project from './sections/Project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setIsLoading(false), 1200)
    return () => window.clearTimeout(splashTimer)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="startup-splash" role="status" aria-label="Loading portfolio">
          <div className="splash-mark">ChamX<span>.</span></div>
          <div className="splash-track"><i /></div>
          <p>loading the workspace</p>
        </div>
      )}
      <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      </main>
    </>
  )
}

export default App
