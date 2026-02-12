import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Platform from './components/Platform'
import Timeline from './components/Timeline'
import Video from './components/Video'
import Endorsements from './components/Endorsements'

import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-golden focus:text-navy focus:px-4 focus:py-2 focus:rounded font-heading text-sm"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Features />
        <About />
        <Platform />
        <Timeline />
        <Video />
        <Endorsements />
      </main>
      <Footer />
    </>
  )
}
