'use client'

import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Servizi - Sviluppo Web e Digital Marketing | GPTech Studio',
  description: 'Scopri i nostri servizi: sviluppo web, e-commerce, campagne pubblicitarie, SEO, social media marketing e app mobile. Soluzioni digitali complete per il tuo business.',
  keywords: ['sviluppo web', 'e-commerce', 'campagne pubblicitarie', 'SEO', 'SEM', 'social media marketing', 'app mobile', 'digital marketing'],
  openGraph: {
    title: 'Servizi - Sviluppo Web e Digital Marketing | GPTech Studio',
    description: 'Soluzioni digitali complete: sviluppo web, e-commerce, campagne ads, SEO e social media marketing.',
    type: 'website',
  },
}
import { FaCode, FaAd, FaSearch, FaRobot, FaShoppingCart, FaMobile, FaChartLine, FaCog, FaArrowRight, FaCheck } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import HeroServicesAnimation from '@/components/HeroServicesAnimation'

export default function ServiziPage() {
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
    },
    {
      icon: FaMobile,
      title: 'App Mobile',
      description: 'Progettiamo e sviluppiamo app mobile native e cross-platform per iOS e Android.',
      features: [
        'App native iOS e Android',
        'App cross-platform (React Native)',
        'Progressive Web Apps (PWA)',
        'Integrazione con backend',
        'Push notifications',
        'Pubblicazione su store'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      startingPrice: '€ 3.000'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Consulenza Iniziale',
      description: 'Analizziamo il tuo business, i tuoi obiettivi e definiamo la strategia migliore per raggiungerli.'
    },
    {
      step: 2,
      title: 'Proposta e Pianificazione',
      description: 'Creiamo una proposta dettagliata con timeline, milestone e budget trasparente.'
    },
    {
      step: 3,
      title: 'Sviluppo e Implementazione',
      description: 'Realizziamo il progetto con aggiornamenti costanti e testing continuo.'
    },
    {
      step: 4,
      title: 'Lancio e Ottimizzazione',
      description: 'Lanciamo il progetto e lo monitoriamo per ottimizzare le performance.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              I Nostri <span className="gradient-text">Servizi</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Offriamo soluzioni digitali complete per far crescere il tuo business online. 
              Dalla progettazione alla realizzazione, fino al marketing e alla crescita.
            </p>
            <Button href="/contatti" variant="primary" size="lg">
              Richiedi una consulenza gratuita
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Interactive Section */}
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
              Esplora i nostri servizi interattivi e scopri come possiamo trasformare il tuo business digitale
            </p>
          </motion.div>

          {/* Interactive Services with Animations */}
          <div className="max-w-7xl mx-auto">
            <HeroServicesAnimation />
          </div>

          {/* Detailed Services List */}
          <div className="mt-20 space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Info - Left/Right alternating */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="text-white text-3xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary-900 mb-1">
                        {service.title}
                      </h3>
                      <div className="text-primary-600 font-semibold text-lg">
                        A partire da {service.startingPrice}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-4 text-lg">
                        Cosa Include:
                      </h4>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <FaCheck className="text-green-600 text-sm mt-1 flex-shrink-0" />
                            <span className="text-secondary-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-secondary-900 mb-4 text-lg">
                        Tecnologie:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:shadow-md transition-shadow"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      href="/contatti" 
                      variant="primary" 
                      size="lg"
                      className="inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <span>Richiedi preventivo personalizzato</span>
                      <FaArrowRight />
                    </Button>
                  </motion.div>
                </div>

                {/* Service Visual - Interactive Animation */}
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Custom animation containers per ogni servizio */}
                    {service.title === 'Sviluppo Web' && (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100">
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
                            animate={{ width: ["0%", "100%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            className="h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4"
                          />
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ width: ["0%", "85%", "85%"] }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatDelay: 3 }}
                                className="h-3 bg-gray-200 rounded"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {service.title === 'Campagne Pubblicitarie' && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-100">
                        <motion.div
                          animate={{ rotate: [0, 2, -2, 0] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="text-center mb-4">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-4xl font-bold text-green-600"
                            >
                              ROI +150%
                            </motion.div>
                            <div className="text-sm text-gray-600">Performance Ads</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {[65, 85, 95].map((height, i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [`${height}%`, `${height + 10}%`, `${height}%`] }}
                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                className="bg-gradient-to-t from-green-400 to-green-500 rounded-t"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {service.title === 'SEO & SEM' && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="flex items-center space-x-2 mb-4">
                            <FaSearch className="text-purple-600" />
                            <div className="flex-1 h-6 bg-gray-100 rounded-full px-3 flex items-center">
                              <span className="text-xs text-gray-600">sviluppo web milano</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.5, repeat: Infinity, repeatDelay: 4 }}
                                className="p-2 bg-yellow-50 border border-yellow-200 rounded"
                              >
                                <div className="text-xs text-blue-600 font-semibold">
                                  GPTech Studio - Posizione #{i}
                                </div>
                                <div className="text-xs text-gray-600">
                                  Siti web professionali...
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {service.title === 'Intelligenza Artificiale' && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100">
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
                              className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                            >
                              <FaRobot className="text-white text-sm" />
                            </motion.div>
                            <div className="text-sm font-semibold text-gray-800">
                              Assistente AI Attivo
                            </div>
                          </div>
                          <div className="space-y-2">
                            <motion.div
                              animate={{ opacity: [0, 1, 1, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="bg-blue-100 rounded-lg p-2"
                            >
                              <div className="text-xs text-blue-800">
                                👋 Come posso aiutarti oggi?
                              </div>
                            </motion.div>
                            <motion.div
                              animate={{ opacity: [0, 0, 1, 1, 0] }}
                              transition={{ duration: 4, delay: 1, repeat: Infinity }}
                              className="bg-gray-100 rounded-lg p-2 ml-4"
                            >
                              <div className="text-xs text-gray-700">
                                Prenotazione consulenza
                              </div>
                            </motion.div>
                            <motion.div
                              animate={{ opacity: [0, 0, 0, 1, 1] }}
                              transition={{ duration: 4, delay: 2, repeat: Infinity }}
                              className="bg-green-100 rounded-lg p-2"
                            >
                              <div className="text-xs text-green-800">
                                ✅ Appuntamento confermato!
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {(service.title === 'E-commerce Solutions' || service.title === 'App Mobile') && (
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl border border-orange-100">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                          <div className="text-center mb-4">
                            <motion.div
                              animate={{ color: ["#EA580C", "#DC2626", "#EA580C"] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="text-2xl font-bold"
                            >
                              {service.title === 'E-commerce Solutions' ? '🛒' : '📱'}
                            </motion.div>
                            <div className="text-sm text-gray-600 mt-2">
                              {service.title === 'E-commerce Solutions' ? 'Vendite Online' : 'App Native'}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ 
                                  x: [0, 10, 0],
                                  backgroundColor: ["#FEF3C7", "#FDE68A", "#FEF3C7"]
                                }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                                className="h-3 bg-yellow-200 rounded"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Il Nostro Processo
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Un approccio strutturato e trasparente per garantire il successo di ogni progetto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
              </motion.div>
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
              Hai un Progetto in Mente?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita. Analizzeremo insieme le tue esigenze 
              e ti proporremo la soluzione migliore per il tuo business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contatti" 
                variant="secondary"
                size="lg"
                className="inline-flex items-center space-x-2"
              >
                <span>Inizia il tuo progetto</span>
                <FaArrowRight />
              </Button>
              <Button 
                href="/portfolio" 
                variant="outline-white"
                size="lg"
              >
                Vedi i nostri lavori
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
