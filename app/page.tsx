'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaCode, FaAd, FaSearch, FaRobot, FaArrowRight, FaCheck, FaStar } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import HeroServicesAnimation from '@/components/HeroServicesAnimation'

export default function Home() {
  const services = [
    {
      icon: FaCode,
      title: 'Sviluppo Web',
      description: 'Siti web moderni, responsive e ottimizzati per le prestazioni. Da landing page a e-commerce complessi.',
      features: ['Next.js & React', 'Design Responsive', 'Ottimizzazione SEO', 'Performance elevate']
    },
    {
      icon: FaAd,
      title: 'Campagne Pubblicitarie',
      description: 'Campagne ads mirate su Google, Facebook, Instagram e LinkedIn per massimizzare il ROI.',
      features: ['Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Ads', 'Analisi ROI']
    },
    {
      icon: FaSearch,
      title: 'SEO & SEM',
      description: 'Ottimizzazione per motori di ricerca e campagne di marketing sui motori di ricerca.',
      features: ['Audit SEO', 'Ricerca Keywords', 'Link Building', 'Google Analytics']
    },
    {
      icon: FaRobot,
      title: 'Intelligenza Artificiale',
      description: 'Soluzioni AI innovative per automatizzare processi e migliorare l\'esperienza utente.',
      features: ['Chatbot AI', 'Automazione', 'Machine Learning', 'Analisi Predittiva']
    }
  ]

  const testimonials = [
    {
      name: 'Marco Rossi',
      company: 'Tech Solutions SRL',
      rating: 5,
      text: 'GPTech Studio ha trasformato completamente la nostra presenza online. Il nuovo sito web ha aumentato le conversioni del 150%.'
    },
    {
      name: 'Laura Bianchi',
      company: 'Fashion Boutique',
      rating: 5,
      text: 'Le campagne pubblicitarie create dal team hanno portato un aumento del 200% delle vendite online. Servizio eccellente!'
    },
    {
      name: 'Giuseppe Verde',
      company: 'Ristorante da Giuseppe',
      rating: 5,
      text: 'Grazie al loro lavoro sui social media, abbiamo triplicato la nostra clientela. Professionalità e risultati concreti.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Progetti Completati' },
    { number: '98%', label: 'Clienti Soddisfatti' },
    { number: '150%', label: 'ROI Medio' },
    { number: '24/7', label: 'Supporto' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Contenuto principale - Sinistra */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
                Trasforma la tua{' '}
                <span className="gradient-text">presenza digitale</span>
              </h1>
              <p className="text-lg lg:text-xl text-secondary-600 mb-8 leading-relaxed">
                Sviluppiamo siti web moderni e creiamo campagne pubblicitarie efficaci 
                per far crescere il tuo business online. Risultati garantiti e ROI misurabile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Button 
                  href="/contatti" 
                  variant="primary" 
                  size="lg"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Inizia il tuo progetto</span>
                  <FaArrowRight />
                </Button>
                <Button 
                  href="/portfolio" 
                  variant="outline" 
                  size="lg"
                >
                  Vedi i nostri lavori
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-xs lg:text-sm text-secondary-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Animazione servizi - Destra */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <HeroServicesAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Layout Verticale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              I Nostri <span className="gradient-text">Servizi</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Soluzioni digitali complete con tecnologie innovative e strategie personalizzate 
              per far crescere il tuo business online.
            </p>
          </motion.div>

          {/* Layout Verticale con Animazioni */}
          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Contenuto Servizio */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="text-white text-2xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <FaCheck className="text-green-600 text-sm flex-shrink-0" />
                        <span className="text-secondary-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      href="/servizi" 
                      variant="outline" 
                      className="inline-flex items-center space-x-2 mt-4"
                    >
                      <span>Scopri di più</span>
                      <FaArrowRight />
                    </Button>
                  </motion.div>
                </div>

                {/* Animazione Personalizzata per Servizio */}
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Sviluppo Web */}
                    {service.title === 'Sviluppo Web' && (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-xl">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.02, 1],
                            boxShadow: [
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                              "0 20px 40px -5px rgba(59, 130, 246, 0.2)",
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            ]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <motion.div
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            className="h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3"
                          />
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ width: ["0%", "85%"] }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 3 }}
                                className="h-2 bg-gray-200 rounded"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Campagne Pubblicitarie */}
                    {service.title === 'Campagne Pubblicitarie' && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-xl">
                        <motion.div
                          animate={{ rotate: [0, 1, -1, 0] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="text-center mb-4">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-3xl font-bold text-green-600"
                            >
                              ROI +150%
                            </motion.div>
                            <div className="text-sm text-gray-600">Performance Ads</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 h-16">
                            {[60, 80, 90].map((height, i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [`${height}%`, `${height + 15}%`, `${height}%`] }}
                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                className="bg-gradient-to-t from-green-400 to-green-500 rounded-t w-full"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* SEO & SEM */}
                    {service.title === 'SEO & SEM' && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 shadow-xl">
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="flex items-center space-x-2 mb-4">
                            <FaSearch className="text-purple-600" />
                            <div className="flex-1 h-6 bg-gray-100 rounded-full px-3 flex items-center">
                              <span className="text-xs text-gray-600">sviluppo web</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.5, repeat: Infinity, repeatDelay: 4 }}
                                className="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs"
                              >
                                <div className="text-blue-600 font-semibold">
                                  GPTech Studio #{i}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Intelligenza Artificiale */}
                    {service.title === 'Intelligenza Artificiale' && (
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl p-8 shadow-xl">
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                              "0 20px 40px -5px rgba(6, 182, 212, 0.3)",
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="flex items-center space-x-2 mb-4">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center"
                            >
                              <FaRobot className="text-white text-sm" />
                            </motion.div>
                            <div className="text-sm font-semibold text-gray-800">
                              AI Assistant
                            </div>
                          </div>
                          <div className="space-y-2">
                            <motion.div
                              animate={{ opacity: [0, 1, 1, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="bg-cyan-100 rounded-lg p-2 text-xs"
                            >
                              <div className="text-cyan-800">
                                👋 Come posso aiutarti?
                              </div>
                            </motion.div>
                            <motion.div
                              animate={{ opacity: [0, 0, 1, 1, 0] }}
                              transition={{ duration: 4, delay: 1, repeat: Infinity }}
                              className="bg-gray-100 rounded-lg p-2 ml-4 text-xs"
                            >
                              <div className="text-gray-700">
                                Analizza i dati vendite
                              </div>
                            </motion.div>
                            <motion.div
                              animate={{ opacity: [0, 0, 0, 1, 1] }}
                              transition={{ duration: 4, delay: 2, repeat: Infinity }}
                              className="bg-green-100 rounded-lg p-2 text-xs"
                            >
                              <div className="text-green-800">
                                ✅ Analisi completata!
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button 
              href="/servizi" 
              variant="primary" 
              size="lg"
              className="inline-flex items-center space-x-2"
            >
              <span>Vedi tutti i servizi</span>
              <FaArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Come Lavoriamo
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Un processo collaudato in 4 step per garantire il successo del tuo progetto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analisi',
                description: 'Studiamo il tuo business e i tuoi obiettivi per creare la strategia perfetta.'
              },
              {
                step: '02', 
                title: 'Strategia',
                description: 'Definiamo un piano dettagliato con timeline, milestone e KPI da raggiungere.'
              },
              {
                step: '03',
                title: 'Sviluppo',
                description: 'Realizziamo il progetto con aggiornamenti costanti e feedback continuo.'
              },
              {
                step: '04',
                title: 'Lancio & Ottimizzazione',
                description: 'Lanciamo il progetto e lo ottimizziamo continuamente per massimizzare i risultati.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary-200 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{process.title}</h3>
                  <p className="text-secondary-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-primary-300 text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra priorità. 
              Ecco cosa pensano del nostro lavoro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto a Far Crescere il Tuo Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contattaci oggi per una consulenza gratuita e scopri come possiamo 
              aiutarti a raggiungere i tuoi obiettivi digitali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contatti" 
                variant="secondary"
                size="lg"
                className="inline-flex items-center space-x-2"
              >
                <span>Richiedi una consulenza gratuita</span>
                <FaArrowRight />
              </Button>
              <Button 
                href="tel:+39123456789" 
                variant="outline-white"
                size="lg"
              >
                Chiamaci ora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
