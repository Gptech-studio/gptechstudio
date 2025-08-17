'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Contatti - Richiedi una Consulenza Gratuita | GPTech Studio',
  description: 'Contattaci per una consulenza gratuita. Sviluppiamo siti web e campagne pubblicitarie per far crescere il tuo business. Risposta garantita entro 24 ore.',
  keywords: ['contatti web agency', 'consulenza gratuita sviluppo web', 'preventivo sito web', 'agenzia digital marketing contatti'],
  openGraph: {
    title: 'Contatti - Richiedi una Consulenza Gratuita | GPTech Studio',
    description: 'Contattaci per una consulenza gratuita. Risposta garantita entro 24 ore.',
    type: 'website',
  },
}

'use client'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaClock, FaCheck, FaPaperPlane } from 'react-icons/fa'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export default function ContattiPage() {
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
    
    // Simula invio form (sostituire con API reale)
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

  const services = [
    'Sviluppo Web',
    'E-commerce',
    'Campagne Pubblicitarie',
    'SEO & SEM',
    'Social Media Marketing',
    'App Mobile',
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

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 flex items-center justify-center">
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
      </div>
    )
  }

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
              <span className="gradient-text">Contattaci</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Hai un progetto in mente? Parliamone insieme. Offriamo consulenze gratuite 
              per aiutarti a definire la strategia migliore per il tuo business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Invia un Messaggio
              </h2>
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
                      {services.map((service) => (
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
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Altre Informazioni
              </h2>
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
                      <h3 className="font-semibold text-secondary-900">{info.title}</h3>
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
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  Seguici sui Social
                </h3>
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
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  Domande Frequenti
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-secondary-900">Quanto tempo serve per un progetto?</h4>
                    <p className="text-sm text-secondary-600">Dipende dalla complessità, ma di solito 2-8 settimane.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Offrite supporto post-lancio?</h4>
                    <p className="text-sm text-secondary-600">Sì, offriamo pacchetti di manutenzione e supporto.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">Lavorate con clienti internazionali?</h4>
                    <p className="text-sm text-secondary-600">Assolutamente, gestiamo progetti in tutta Europa.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
