'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

interface Testimonial {
  name: string
  company: string
  rating: number
  text: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { name, company, rating, text } = testimonial

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-secondary-100"
    >
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg" />
        ))}
      </div>
      
      <blockquote className="text-secondary-700 mb-6 italic">
        "{text}"
      </blockquote>
      
      <div className="border-t border-secondary-100 pt-4">
        <div className="font-semibold text-secondary-900">{name}</div>
        <div className="text-sm text-secondary-600">{company}</div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
