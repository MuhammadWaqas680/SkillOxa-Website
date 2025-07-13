'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface ServiceCardProps {
  title: string
  description: string
  iconName: string
  features: string[]
  href: string
  delay?: number
}

// Icon mapping
const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'FaWordpress': require('react-icons/fa').FaWordpress,
    'FaSearch': require('react-icons/fa').FaSearch,
    'FaCode': require('react-icons/fa').FaCode,
    'FaPalette': require('react-icons/fa').FaPalette,
    'FaVideo': require('react-icons/fa').FaVideo,
  }
  return icons[iconName] || icons['FaCode']
}

export default function ServiceCard({
  title,
  description,
  iconName,
  features,
  href,
  delay = 0
}: ServiceCardProps) {
  const Icon = getIcon(iconName)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-8 card-shadow hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="group/link inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
      >
        Learn More
        <FaArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  )
}
