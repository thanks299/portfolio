'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false) // Close menu after clicking
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeHeader = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Agbeble Thanks</h1>
        
        {/* Menu Button - Only visible on mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 dark:text-gray-300"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Menu - Always visible on desktop, only visible on mobile if the menu is open */}
        <nav
          className={`${
            isMenuOpen
              ? 'fixed inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center z-30'
              : 'hidden'
          } lg:flex lg:items-center lg:space-x-4`}
        >
          <ul className="space-y-6 lg:space-y-0 lg:flex lg:space-x-4 text-center">
            {['home', 'projects', 'tech-stack', 'about', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`capitalize text-2xl lg:text-base ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              </li>
            ))}
            <li className="flex flex-col items-center space-y-4">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl lg:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="mt-4 lg:mt-0"
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </li>
            <li>
              <button
                onClick={closeHeader}
                className="text-gray-600 dark:text-gray-300"
                aria-label="Close header"
              >
                <X className="h-6 w-6" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}