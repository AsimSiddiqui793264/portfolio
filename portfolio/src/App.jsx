import { useEffect } from 'react'
import './App.css'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -36px 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
