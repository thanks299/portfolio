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
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-20 py-3"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3"> {/* Reduced space between logo and text */}
          <img
            src="/path-to-your-logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8" // Reduced logo size
          />
          <span className="text-lg font-bold text-gray-800 dark:text-white"> {/* Reduced font size */}
            Your Website Name
          </span>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="lg:flex lg:items-center lg:space-x-4 hidden">
          <ul className="flex space-x-6">
            {['home', 'projects', 'tech-stack', 'about', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`capitalize text-lg ${ // Reduced text size
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
              {/* Social Media Links with Icons */}
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaInstagram size={22} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (Hamburger / X) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 dark:text-gray-300 p-2"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`${
          isMenuOpen
            ? 'fixed inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center z-30 p-6'
            : 'hidden'
        } lg:hidden`}
      >
        {/* Close Header Button (X button) */}
        <button
          onClick={toggleMenu}
          aria-label="Close navigation menu"
          className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
        >
          <X className="h-6 w-6" />
        </button>

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

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="mt-6 text-white bg-gray-800 p-2 rounded-full"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </nav>
    </header>
  )
}