'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Portfolio - I Nostri Progetti di Successo | GPTech Studio',
  description: 'Scopri i progetti che abbiamo realizzato: e-commerce, app mobile, campagne pubblicitarie e siti web. Oltre 50 progetti completati con risultati eccezionali.',
  keywords: ['portfolio web development', 'progetti e-commerce', 'app mobile sviluppate', 'campagne pubblicitarie successo', 'casi studio digital marketing'],
  openGraph: {
    title: 'Portfolio - I Nostri Progetti di Successo | GPTech Studio',
    description: 'Oltre 50 progetti completati con risultati eccezionali. Scopri le nostre realizzazioni.',
    type: 'website',
  },
}

'use client'
import Image from 'next/image'
import { FaExternalLinkAlt, FaCode, FaAd, FaSearch, FaShareAlt, FaArrowRight, FaCalendar, FaTag } from 'react-icons/fa'
import Button from '@/components/ui/Button'

export default function PortfolioPage() {
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
      id: 3,
      title: 'App Mobile Fitness',
      category: 'Mobile App',
      type: 'mobile',
      description: 'App mobile per fitness tracking con workout personalizzati, integrazione wearable e community features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Stripe'],
      results: [
        '10k+ download',
        '4.8/5 rating store',
        '70% retention rate'
      ],
      link: '#',
      year: '2023'
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

  const categories = ['Tutti', 'E-commerce', 'Digital Marketing', 'Mobile App', 'SEO', 'Social Media', 'Web Application']
  const [selectedCategory, setSelectedCategory] = useState('Tutti')

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
              Il Nostro <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Scopri i progetti che abbiamo realizzato e i risultati che abbiamo ottenuto 
              per i nostri clienti. Ogni progetto è un successo condiviso.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-secondary-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                        href={project.link}
                        variant="outline"
                        size="sm"
                        className="flex-1 inline-flex items-center justify-center space-x-2"
                      >
                        <span>Dettagli</span>
                        <FaExternalLinkAlt className="text-xs" />
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
              Il Prossimo Progetto di Successo Potrebbe Essere il Tuo
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Hai un'idea o un progetto in mente? Lavoriamo insieme per trasformarlo 
              in una storia di successo come quelle che hai appena visto.
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
                href="/servizi" 
                variant="outline-white"
                size="lg"
              >
                Scopri i nostri servizi
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
