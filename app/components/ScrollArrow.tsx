'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const checkScrollTop = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        // Scrolling down
        setShowScroll(st > 100)
      } else {
        // Scrolling up
        setShowScroll(false)
      }
      setLastScrollTop(st <= 0 ? 0 : st)
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [lastScrollTop])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showScroll) return null

  return (
    <div className="fixed right-4 bottom-4 z-50 animate-bounce">
      <button
        onClick={scrollToTop}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  )
}

