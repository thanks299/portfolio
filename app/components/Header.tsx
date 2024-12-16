'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode.toString())
      if (newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newMode
    })
  }

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Agbeble Thanks</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-6 text-center">
            {['home', 'projects', 'tech-stack', 'about', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`capitalize text-base ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-4"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}