'use client'

import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import TechStack from './components/Tech Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return [ref, isIntersecting]
}

// Animated section component
function AnimatedSection({ children, className = '' }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <AnimatedSection>
          <Hero setActiveSection={setActiveSection} />
        </AnimatedSection>
        <AnimatedSection>
          <Projects setActiveSection={setActiveSection} />
        </AnimatedSection>
        <AnimatedSection>
          <TechStack />
        </AnimatedSection>
        <AnimatedSection>
          <About setActiveSection={setActiveSection} />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollArrow />
    </div>
  )
}

' in "return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  )