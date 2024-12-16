'use client' 


import { useState } from 'react'

export default function Header({
  activeSection,
  setActiveSection,
}: {
  activeSection: string
  setActiveSection: (section: string) => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Brand Logo */}
        <div className="text-lg font-bold">
          <a href="#hero" onClick={() => setActiveSection('home')}>
            My Portfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#hero"
            className={`hover:underline ${
              activeSection === 'home' ? 'underline' : ''
            }`}
            onClick={() => setActiveSection('home')}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`hover:underline ${
              activeSection === 'projects' ? 'underline' : ''
            }`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </a>
          <a
            href="#tech-stack"
            className={`hover:underline ${
              activeSection === 'tech-stack' ? 'underline' : ''
            }`}
            onClick={() => setActiveSection('tech-stack')}
          >
            Tech Stack
          </a>
          <a
            href="#about"
            className={`hover:underline ${
              activeSection === 'about' ? 'underline' : ''
            }`}
            onClick={() => setActiveSection('about')}
          >
            About
          </a>
          <a
            href="#contact"
            className={`hover:underline ${
              activeSection === 'contact' ? 'underline' : ''
            }`}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </a>
        </nav>

        {/* Theme Toggle and Social Media Links */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>

          {/* Social Media Icons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/path/to/github-icon.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
            >
              <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Burger Menu */}
        <button
          className="block md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 dark:bg-gray-800 p-6 flex flex-col items-center">
          <nav className="space-y-6">
            <a
              href="#hero"
              className="text-xl hover:underline"
              onClick={() => {
                setActiveSection('home')
                setIsMenuOpen(false)
              }}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-xl hover:underline"
              onClick={() => {
                setActiveSection('projects')
                setIsMenuOpen(false)
              }}
            >
              Projects
            </a>
            <a
              href="#tech-stack"
              className="text-xl hover:underline"
              onClick={() => {
                setActiveSection('tech-stack')
                setIsMenuOpen(false)
              }}
            >
              Tech Stack
            </a>
            <a
              href="#about"
              className="text-xl hover:underline"
              onClick={() => {
                setActiveSection('about')
                setIsMenuOpen(false)
              }}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xl hover:underline"
              onClick={() => {
                setActiveSection('contact')
                setIsMenuOpen(false)
              }}
            >
              Contact
            </a>
          </nav>

          {/* Social Media Icons (Mobile) */}
          <div className="mt-8 flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <img src="/path/to/github-icon.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
            >
              <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}