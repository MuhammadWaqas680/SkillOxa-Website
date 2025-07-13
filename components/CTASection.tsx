'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaPhone } from 'react-icons/fa'

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundType?: 'gradient' | 'pattern' | 'solid'
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundType = 'gradient'
}: CTASectionProps) {
  const getBackgroundClass = () => {
    switch (backgroundType) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary-600 to-primary-800'
      case 'pattern':
        return 'bg-primary-600 relative overflow-hidden'
      case 'solid':
        return 'bg-primary-600'
      default:
        return 'bg-gradient-to-r from-primary-600 to-primary-800'
    }
  }

  return (
    <section className={`section-padding ${getBackgroundClass()}`}>
      {/* Pattern Background */}
      {backgroundType === 'pattern' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      )}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href={primaryCTA.href}
              className="group bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {primaryCTA.text}
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg border border-white/20 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                <FaPhone className="mr-2 w-4 h-4" />
                {secondaryCTA.text}
              </Link>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-100"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              <span className="text-sm">Money-Back Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
