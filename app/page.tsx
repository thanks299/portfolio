'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
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
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [elementRef, options])

  return [elementRef, isIntersecting] as const
}

// Animated section component
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
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
      <main className="pt-16"> {/* Fixed padding for the header */}
        <AnimatedSection className="px-8"> {/* Removed responsive classes */}
          <Hero setActiveSection={setActiveSection} />
        </AnimatedSection>
        <AnimatedSection className="px-8">
          <Projects setActiveSection={setActiveSection} />
        </AnimatedSection>
        <AnimatedSection className="px-8">
          <TechStack />
        </AnimatedSection>
        <AnimatedSection className="px-8">
          <About setActiveSection={setActiveSection} />
        </AnimatedSection>
        <AnimatedSection className="px-8">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollArrow />
    </div>
  )
}

