'use client' 

import { useState } from 'react'

export default function Header({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="text-lg font-bold">My Portfolio</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className={`hover:underline ${activeSection === 'home' ? 'underline' : ''}`} onClick={() => setActiveSection('home')}>Home</a>
          <a href="#projects" className={`hover:underline ${activeSection === 'projects' ? 'underline' : ''}`} onClick={() => setActiveSection('projects')}>Projects</a>
          <a href="#tech-stack" className={`hover:underline ${activeSection === 'tech-stack' ? 'underline' : ''}`} onClick={() => setActiveSection('tech-stack')}>Tech Stack</a>
          <a href="#about" className={`hover:underline ${activeSection === 'about' ? 'underline' : ''}`} onClick={() => setActiveSection('about')}>About</a>
          <a href="#contact" className={`hover:underline ${activeSection === 'contact' ? 'underline' : ''}`} onClick={() => setActiveSection('contact')}>Contact</a>
        </nav>

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
        <nav className="md:hidden bg-gray-200 dark:bg-gray-800">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#hero" onClick={() => { setActiveSection('home'); setIsMenuOpen(false) }}>Home</a>
            </li>
            <li>
              <a href="#projects" onClick={() => { setActiveSection('projects'); setIsMenuOpen(false) }}>Projects</a>
            </li>
            <li>
              <a href="#tech-stack" onClick={() => { setActiveSection('tech-stack'); setIsMenuOpen(false) }}>Tech Stack</a>
            </li>
            <li>
              <a href="#about" onClick={() => { setActiveSection('about'); setIsMenuOpen(false) }}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={() => { setActiveSection('contact'); setIsMenuOpen(false) }}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}