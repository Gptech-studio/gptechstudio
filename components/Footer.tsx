'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
    { href: '#', icon: FaTwitter, label: 'Twitter' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
  ]

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/servizi', label: 'Servizi' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contatti', label: 'Contatti' },
  ]

  const services = [
    'Sviluppo Web',
    'E-commerce',
    'Digital Marketing',
    'SEO & SEM',
    'Social Media Marketing',
    'Consulenza IT',
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaChartLine className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">GPTech Studio</span>
            </div>
            <p className="text-secondary-300 mb-4">
              La tua agenzia di fiducia per lo sviluppo web e il digital marketing. 
              Trasformiamo le idee in soluzioni digitali di successo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                >
                  <social.icon className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Link Veloci</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">I Nostri Servizi</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-secondary-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400" />
                <span className="text-secondary-300">info@gptechstudio.it</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400" />
                <span className="text-secondary-300">+39 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary-400" />
                <span className="text-secondary-300">Italia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary-800 mt-8 pt-8 text-center"
        >
          <p className="text-secondary-400">
            © {currentYear} GPTech Studio. Tutti i diritti riservati.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
