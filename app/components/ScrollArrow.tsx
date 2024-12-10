'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false)
  const [scrollUp, setScrollUp] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const checkScrollTop = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        // Scrolling down
        setScrollUp(false)
      } else {
        // Scrolling up
        setScrollUp(true)
      }
      setLastScrollTop(st <= 0 ? 0 : st)
      setShowScroll(st > 100)
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [lastScrollTop])

  const scrollTo = (direction: 'up' | 'down') => {
    const currentPosition = window.pageYOffset
    const windowHeight = window.innerHeight
    const targetPosition = direction === 'up' ? currentPosition - windowHeight : currentPosition + windowHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }

  if (!showScroll) return null

  return (
    <div className="fixed right-4 bottom-4 z-50 animate-bounce">
      <button
        onClick={() => scrollTo(scrollUp ? 'up' : 'down')}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300"
        aria-label={scrollUp ? "Scroll up" : "Scroll down"}
      >
        {scrollUp ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
      </button>
    </div>
  )
}

