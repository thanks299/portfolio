'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import TechStack from './components/Tech Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero" className="py-16 sm:py-20">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="projects" className="py-16 sm:py-20">
          <Projects setActiveSection={setActiveSection} />
        </section>
        <section id="tech-stack" className="py-16 sm:py-20">
          <TechStack />
        </section>
        <section id="about" className="py-16 sm:py-20">
          <About setActiveSection={setActiveSection} />
        </section>
        <section id="contact" className="py-16 sm:py-20">
          <Contact />
        </section>
      </main>
      <Footer className="py-8 sm:py-12" />
      <ScrollArrow />
    </div>
  )
}