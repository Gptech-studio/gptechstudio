'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaCode, FaAd, FaSearch, FaRobot, FaArrowRight, FaCheck, FaStar, FaShoppingCart, FaChartLine, FaCog, FaExternalLinkAlt, FaShareAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaClock, FaPaperPlane, FaTag, FaCalendar } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import HeroServicesAnimation from '@/components/HeroServicesAnimation'

interface FormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form data:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Errore invio form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: FaCode,
      title: 'Sviluppo Web',
      description: 'Creiamo siti web moderni, responsive e ottimizzati per le prestazioni utilizzando le tecnologie più avanzate.',
      features: [
        'Siti web responsive e mobile-first',
        'E-commerce completi con gestione inventory',
        'Web app personalizzate',
        'Integrazione API e database',
        'Ottimizzazione prestazioni e SEO',
        'Manutenzione e aggiornamenti'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'],
      startingPrice: '€ 1.500'
    },
    {
      icon: FaAd,
      title: 'Campagne Pubblicitarie',
      description: 'Gestiamo campagne ads su tutte le principali piattaforme per massimizzare il tuo ROI e raggiungere il target giusto.',
      features: [
        'Google Ads (Search, Display, Shopping)',
        'Facebook e Instagram Ads',
        'LinkedIn Ads per B2B',
        'YouTube Ads',
        'Retargeting e lookalike audiences',
        'A/B testing e ottimizzazione continua'
      ],
      technologies: ['Google Ads', 'Facebook Business', 'LinkedIn Campaign', 'Google Analytics', 'Pixel tracking'],
      startingPrice: '€ 800/mese'
    },
    {
      icon: FaSearch,
      title: 'SEO & SEM',
      description: 'Ottimizziamo la tua presenza online per i motori di ricerca e gestiamo campagne di search engine marketing.',
      features: [
        'Audit SEO completo del sito',
        'Ricerca e analisi keywords',
        'Ottimizzazione on-page e tecnica',
        'Link building di qualità',
        'Content marketing strategy',
        'Monitoraggio ranking e traffico'
      ],
      technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Analytics'],
      startingPrice: '€ 600/mese'
    },
    {
      icon: FaRobot,
      title: 'Intelligenza Artificiale',
      description: 'Soluzioni AI innovative per automatizzare processi, migliorare l\'esperienza utente e ottimizzare le performance del business.',
      features: [
        'Chatbot intelligenti per customer service',
        'Automazione processi aziendali',
        'Analisi predittiva e machine learning',
        'Sistemi di raccomandazione personalizzati',
        'Elaborazione linguaggio naturale (NLP)',
        'Integrazione AI in sistemi esistenti'
      ],
      technologies: ['OpenAI GPT', 'TensorFlow', 'Python', 'LangChain', 'Vector Databases', 'Machine Learning'],
      startingPrice: '€ 1.200/mese'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Sviluppiamo negozi online completi con sistemi di pagamento, gestione ordini e integrazione logistica.',
      features: [
        'Piattaforme e-commerce custom',
        'Integrazione sistemi di pagamento',
        'Gestione inventory e ordini',
        'CRM e automazione marketing',
        'Analytics e-commerce avanzate',
        'Supporto e manutenzione'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mailchimp', 'Klaviyo'],
      startingPrice: '€ 2.500'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moda Italiana',
      category: 'E-commerce',
      type: 'web',
      description: 'Piattaforma e-commerce completa per brand di moda italiano con oltre 1000 prodotti, sistema di gestione ordini e integrazione con corrieri.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      results: [
        '+200% vendite online',
        '15% tasso di conversione',
        '< 2s tempo di caricamento'
      ],
      link: '#',
      year: '2024'
    },
    {
      id: 2,
      title: 'Campagna Google Ads Ristorante',
      category: 'Digital Marketing',
      type: 'ads',
      description: 'Campagna pubblicitaria Google Ads per catena di ristoranti con targeting geografico e ottimizzazione per prenotazioni.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['Google Ads', 'Google Analytics', 'Google My Business'],
      results: [
        '+150% prenotazioni',
        '€3.20 costo per prenotazione',
        '850% ROAS'
      ],
      link: '#',
      year: '2024'
    },
    {
      id: 4,
      title: 'SEO per Studio Legale',
      category: 'SEO',
      type: 'seo',
      description: 'Ottimizzazione SEO completa per studio legale con focus su keywords locali e content marketing specializzato.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['SEO Audit', 'Content Marketing', 'Local SEO'],
      results: [
        '+400% traffico organico',
        'Top 3 per 15 keywords',
        '+80% nuovi clienti'
      ],
      link: '#',
      year: '2024'
    },
    {
      id: 5,
      title: 'Social Media Marketing Hotel',
      category: 'Social Media',
      type: 'social',
      description: 'Gestione completa social media per hotel di lusso con focus su Instagram e Facebook, content creation e influencer marketing.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      technologies: ['Instagram', 'Facebook', 'Content Creation', 'Analytics'],
      results: [
        '+300% follower',
        '25% engagement rate',
        '+120% prenotazioni social'
      ],
      link: '#',
      year: '2023'
    },
    {
      id: 6,
      title: 'Piattaforma SaaS',
      category: 'Web Application',
      type: 'web',
      description: 'Piattaforma SaaS per gestione progetti con dashboard avanzate, sistema di billing e integrazione API multiple.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
      results: [
        '500+ utenti attivi',
        '€50k MRR',
        '99.9% uptime'
      ],
      link: '#',
      year: '2024'
    }
  ]

  const categories = ['Tutti', 'E-commerce', 'Digital Marketing', 'SEO', 'Social Media', 'Web Application']
  const filteredProjects = selectedCategory === 'Tutti' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getIcon = (type: string) => {
    switch (type) {
      case 'web': return FaCode
      case 'ads': return FaAd
      case 'seo': return FaSearch
      case 'social': return FaShareAlt
      case 'mobile': return FaCode
      default: return FaCode
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@gptechstudio.it',
      link: 'mailto:info@gptechstudio.it'
    },
    {
      icon: FaPhone,
      title: 'Telefono',
      value: '+39 123 456 7890',
      link: 'tel:+39123456789'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Sede',
      value: 'Italia',
      link: '#'
    },
    {
      icon: FaClock,
      title: 'Orari',
      value: 'Lun-Ven 9:00-18:00',
      link: '#'
    }
  ]

  const serviceOptions = [
    'Sviluppo Web',
    'E-commerce',
    'Campagne Pubblicitarie',
    'SEO & SEM',
    'Social Media Marketing',
    'Consulenza IT',
    'Altro'
  ]

  const budgetRanges = [
    '€ 1.000 - € 5.000',
    '€ 5.000 - € 10.000',
    '€ 10.000 - € 25.000',
    '€ 25.000 - € 50.000',
    '€ 50.000+',
    'Da definire'
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
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
      <section id="home" className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 flex items-center">
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
                  href="#contatti" 
                  variant="primary" 
                  size="lg"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Inizia il tuo progetto</span>
                  <FaArrowRight />
                </Button>
                <Button 
                  href="#portfolio" 
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
      <section id="servizi" className="py-20 bg-white">
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
                      href="#contatti" 
                      variant="outline" 
                      className="inline-flex items-center space-x-2 mt-4"
                    >
                      <span>Richiedi preventivo</span>
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
              href="#contatti" 
              variant="primary" 
              size="lg"
              className="inline-flex items-center space-x-2"
            >
              <span>Richiedi una consulenza</span>
              <FaArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacchetti" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              🌐 Pacchetti <span className="gradient-text">Web Development</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Scegli il pacchetto perfetto per far crescere la tua presenza online. 
              Soluzioni complete con tutto quello che ti serve per il successo digitale.
            </p>
          </motion.div>

          {/* Packages Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  💼 STARTER
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 mt-4">
                Starter Website
              </h3>
              
              <p className="text-secondary-600 mb-6">
                Per professionisti e piccole attività che vogliono una presenza online semplice ma efficace.
              </p>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-600">da €799</div>
                <div className="text-sm text-secondary-500">prezzo una tantum</div>
                <div className="text-sm text-secondary-500">+ €25/anno (dominio & gestione)</div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-secondary-900 mb-3">Cosa include:</h4>
                <ul className="space-y-2">
                  {[
                    'Sito Next.js (fino a 5 pagine)',
                    'Hosting incluso (Vercel Free)',
                    'Dominio gestito (1 anno)',
                    'SEO base (meta tag, sitemap, GA)',
                    'Certificato SSL',
                    'Supporto 1 mese'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCheck className="text-green-600 text-sm flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-secondary-600 mb-4">
                  👉 Il sito vetrina veloce e ottimizzato, pronto in pochi giorni.
                </p>
                <Button 
                  href="#contatti" 
                  variant="outline" 
                  className="w-full"
                >
                  Richiedi preventivo
                </Button>
              </div>
            </motion.div>

            {/* Business Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative border-2 border-primary-500"
            >
              <div className="absolute -top-4 left-6">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 BUSINESS
                </span>
              </div>
              
              <div className="absolute -top-2 -right-2">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  POPOLARE
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 mt-4">
                Business Website
              </h3>
              
              <p className="text-secondary-600 mb-6">
                Per aziende e studi professionali che vogliono un sito su misura, performante e scalabile.
              </p>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-600">da €1.800</div>
                <div className="text-sm text-secondary-500">prezzo una tantum</div>
                <div className="text-sm text-secondary-500">+ da €65/mese</div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-secondary-900 mb-3">Cosa include:</h4>
                <ul className="space-y-2">
                  {[
                    'Design UI/UX personalizzato',
                    'Sito Next.js (fino a 12 pagine + landing)',
                    'Hosting Pro incluso (Vercel Pro)',
                    'Database MongoDB (CRM base)',
                    'Email professionale (1 casella)',
                    'SEO avanzata (keyword research, GSC)',
                    'Ottimizzazione performance (Lighthouse)',
                    'Supporto 3 mesi'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCheck className="text-green-600 text-sm flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-secondary-600 mb-4">
                  👉 Il sito perfetto per PMI e aziende che vogliono crescere online.
                </p>
                <Button 
                  href="#contatti" 
                  variant="primary" 
                  className="w-full"
                >
                  Richiedi preventivo
                </Button>
              </div>
            </motion.div>

            {/* Growth Website + Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  📈 GROWTH
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 mt-4">
                Growth Website + Marketing
              </h3>
              
              <p className="text-secondary-600 mb-6">
                Per startup e imprese che vogliono combinare sviluppo tecnico e marketing digitale.
              </p>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-600">da €3.500</div>
                <div className="text-sm text-secondary-500">prezzo una tantum</div>
                <div className="text-sm text-secondary-500">+ da €130/mese</div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-secondary-900 mb-3">Cosa include:</h4>
                <ul className="space-y-2">
                  {[
                    'Tutto dal Business Website +',
                    'CMS headless (gestione autonoma)',
                    'Blog, portfolio, prenotazioni o e-commerce light',
                    'Hosting Pro + Database avanzato',
                    'Email professionale (2 caselle)',
                    'Backup & manutenzione inclusi',
                    'Analytics avanzati (GA4 + heatmap)',
                    'Campagna Google Ads (setup + 1° mese)',
                    'Supporto 6 mesi'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaCheck className="text-green-600 text-sm flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-secondary-600 mb-4">
                  👉 Il pacchetto completo per aziende che vogliono generare lead e vendite online.
                </p>
                <Button 
                  href="#contatti" 
                  variant="outline" 
                  className="w-full"
                >
                  Richiedi preventivo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
          >
            <div className="p-8 border-b border-secondary-200">
              <h3 className="text-2xl font-bold text-secondary-900 text-center">
                Confronta i Pacchetti
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-secondary-900">Caratteristiche</th>
                    <th className="text-center p-4 font-semibold text-secondary-900">Starter</th>
                    <th className="text-center p-4 font-semibold text-primary-600">Business</th>
                    <th className="text-center p-4 font-semibold text-secondary-900">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Numero pagine', 'Fino a 5', 'Fino a 12 + landing', 'Illimitate'],
                    ['Design personalizzato', '❌', '✅', '✅'],
                    ['Database/CRM', '❌', 'Base', 'Avanzato'],
                    ['Email professionale', '❌', '1 casella', '2 caselle'],
                    ['SEO', 'Base', 'Avanzata', 'Avanzata + Analytics'],
                    ['Supporto', '1 mese', '3 mesi', '6 mesi'],
                    ['CMS gestione contenuti', '❌', '❌', '✅'],
                    ['Google Ads incluso', '❌', '❌', '✅ (1° mese)'],
                    ['Backup automatico', '❌', '❌', '✅'],
                    ['Prezzo una tantum', 'da €799', 'da €1.800', 'da €3.500'],
                    ['Canone mensile/annuo', '€25/anno', 'da €65/mese', 'da €130/mese']
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-secondary-25' : 'bg-white'}>
                      <td className="p-4 font-medium text-secondary-900">{row[0]}</td>
                      <td className="p-4 text-center text-secondary-700">{row[1]}</td>
                      <td className="p-4 text-center text-secondary-700 bg-primary-50">{row[2]}</td>
                      <td className="p-4 text-center text-secondary-700">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Optional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              🔧 Servizi Opzionali
              <span className="block text-lg font-normal text-secondary-600 mt-2">
                (disponibili per ogni pacchetto)
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '📈',
                  title: 'Campagne Google Ads continuative',
                  description: 'Gestione professionale con fee % sul budget'
                },
                {
                  icon: '📱',
                  title: 'Social Ads',
                  description: 'Meta, LinkedIn, TikTok - strategie personalizzate'
                },
                {
                  icon: '✍️',
                  title: 'Blog & SEO Copywriting',
                  description: 'Pacchetti articoli mensili per content marketing'
                },
                {
                  icon: '🛒',
                  title: 'E-commerce Avanzato',
                  description: 'Stripe / Shopify headless con funzionalità complete'
                },
                {
                  icon: '🤖',
                  title: 'AI Integration',
                  description: 'Chatbot custom, automazioni con API/AI'
                },
                {
                  icon: '📊',
                  title: 'Analytics & Reporting',
                  description: 'Dashboard personalizzate e report automatici'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-secondary-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-secondary-600">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Non sai quale pacchetto scegliere?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Prenota una consulenza gratuita di 30 minuti e ti aiuteremo a trovare la soluzione perfetta per le tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="#contatti" 
                variant="primary" 
                size="lg"
                className="inline-flex items-center space-x-2"
              >
                <span>Prenota consulenza gratuita</span>
                <FaCalendar />
              </Button>
              <Button 
                href="tel:+39123456789" 
                variant="outline" 
                size="lg"
                className="inline-flex items-center space-x-2"
              >
                <span>Chiamaci ora</span>
                <FaPhone />
              </Button>
            </div>
          </motion.div>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Il Nostro <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Scopri i progetti che abbiamo realizzato e i risultati che abbiamo ottenuto 
              per i nostri clienti. Ogni progetto è un successo condiviso.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-secondary-600">Progetti Completati</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-secondary-600">Clienti Soddisfatti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">€2M+</div>
                <div className="text-sm text-secondary-600">Fatturato Generato</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15</div>
                <div className="text-sm text-secondary-600">Settori Diversi</div>
              </div>
            </div>
          </motion.div>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-primary-100 hover:text-primary-700 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = getIcon(project.type)
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-secondary-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-900 mb-2">Risultati:</h4>
                      <div className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-sm text-green-600 font-medium">
                            • {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        href="#contatti"
                        variant="outline"
                        size="sm"
                        className="flex-1 inline-flex items-center justify-center space-x-2"
                      >
                        <span>Richiedi preventivo</span>
                        <FaArrowRight className="text-xs" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
                href="#contatti" 
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

      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              <span className="gradient-text">Contattaci</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Hai un progetto in mente? Parliamone insieme. Offriamo consulenze gratuite 
              per aiutarti a definire la strategia migliore per il tuo business.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-md mx-auto p-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-green-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Messaggio Inviato!</h2>
              <p className="text-secondary-600 mb-6">
                Grazie per averci contattato. Ti risponderemo entro 24 ore.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="primary"
              >
                Invia un altro messaggio
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  Invia un Messaggio
                </h3>
                <p className="text-secondary-600 mb-8">
                  Compila il form e ti contatteremo entro 24 ore per discutere del tuo progetto.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nome *
                      </label>
                      <input
                        {...register('name', { required: 'Il nome è obbligatorio' })}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Il tuo nome"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'L\'email è obbligatoria',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email non valida'
                          }
                        })}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="la-tua-email@esempio.it"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Azienda
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Nome azienda"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Telefono
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                        Servizio di Interesse *
                      </label>
                      <select
                        {...register('service', { required: 'Seleziona un servizio' })}
                        id="service"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Seleziona un servizio</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                        Budget Previsto *
                      </label>
                      <select
                        {...register('budget', { required: 'Seleziona un budget' })}
                        id="budget"
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Seleziona budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      {...register('message', { required: 'Il messaggio è obbligatorio' })}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Descrivi il tuo progetto, i tuoi obiettivi e qualsiasi altro dettaglio utile..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <span>Invia Messaggio</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  Altre Informazioni
                </h3>
                <p className="text-secondary-600 mb-8">
                  Puoi contattarci anche attraverso i seguenti canali. 
                  Rispondiamo sempre entro 24 ore.
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                    Seguici sui Social
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                      >
                        <social.icon className="text-white text-xl" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl">
                  <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                    Domande Frequenti
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-secondary-900">Quanto tempo serve per un progetto?</h5>
                      <p className="text-sm text-secondary-600">Dipende dalla complessità, ma di solito 2-8 settimane.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-secondary-900">Offrite supporto post-lancio?</h5>
                      <p className="text-sm text-secondary-600">Sì, offriamo pacchetti di manutenzione e supporto.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-secondary-900">Lavorate con clienti internazionali?</h5>
                      <p className="text-sm text-secondary-600">Assolutamente, gestiamo progetti in tutta Europa.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
