'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FaCheck } from 'react-icons/fa'

interface Service {
  icon: IconType
  title: string
  description: string
  features: string[]
}

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { icon: Icon, title, description, features } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-secondary-100 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
          <Icon className="text-white text-2xl" />
        </div>
        
        <h3 className="text-xl font-semibold text-secondary-900 mb-3">
          {title}
        </h3>
        
        <p className="text-secondary-600 mb-6 flex-grow">
          {description}
        </p>
        
        <div className="space-y-2">
          {features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaCheck className="text-green-600 text-xs" />
              </div>
              <span className="text-sm text-secondary-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
