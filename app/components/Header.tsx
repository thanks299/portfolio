'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

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
    setIsMenuOpen(false) // Close menu after clicking on mobile
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

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Desktop Navigation Menu - Only visible on desktop */}
        <nav
          className="lg:flex lg:items-center lg:space-x-4 hidden"
        >
          <ul className="flex space-x-6">
            {['home', 'projects', 'tech-stack', 'about', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`capitalize text-xl ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              </li>
            ))}
            <li className="flex space-x-4">
              {/* Social Media Links with Icons, aligned horizontally */}
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle - Centered */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Menu Button - Only visible on mobile (Far right) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 dark:text-gray-300 absolute right-6"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Visible when the menu is open */}
      <nav
        className={`${
          isMenuOpen
            ? 'fixed inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center z-30'
            : 'hidden'
        } lg:hidden`}
      >
        <ul className="space-y-6 text-center">
          {['home', 'projects', 'tech-stack', 'about', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleNavClick(section)}
                className={`capitalize text-2xl ${
                  activeSection === section
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {section.replace('-', ' ')}
              </button>
            </li>
          ))}
          <li className="flex space-x-6">
            {/* Social Media Links with Icons */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaInstagram size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}