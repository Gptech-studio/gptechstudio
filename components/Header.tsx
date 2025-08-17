'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaCode, FaChartLine, FaEnvelope, FaHome, FaBriefcase, FaTag } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: '#home', label: 'Home', icon: FaHome },
    { href: '#servizi', label: 'Servizi', icon: FaCode },
    { href: '#pacchetti', label: 'Pacchetti', icon: FaTag },
    { href: '#portfolio', label: 'Portfolio', icon: FaBriefcase },
    { href: '#contatti', label: 'Contatti', icon: FaEnvelope },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaChartLine className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold gradient-text">GPTech Studio</span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
              >
                <item.icon className="text-sm" />
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary-700 hover:text-primary-600 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center space-x-3 py-3 px-4 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <item.icon className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
