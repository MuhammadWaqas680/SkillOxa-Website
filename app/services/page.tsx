'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import { 
  FaWordpress, 
  FaSearch, 
  FaCode, 
  FaPalette, 
  FaVideo,
  FaCheck,
  FaTimes
} from 'react-icons/fa'

const services = [
  {
    title: "WordPress Development",
    description: "Custom WordPress websites that are fast, secure, and optimized for search engines. From simple blogs to complex e-commerce solutions.",
    iconName: "FaWordpress",
    features: [
      "Custom theme development",
      "Plugin customization & development",
      "E-commerce integration (WooCommerce)",
      "Performance optimization",
      "Security hardening",
      "Maintenance & support"
    ],
    href: "#wordpress"
  },
  {
    title: "SEO Services",
    description: "Boost your online visibility with our comprehensive SEO strategies. Get more traffic, leads, and sales from search engines.",
    iconName: "FaSearch",
    features: [
      "Keyword research & analysis",
      "On-page optimization",
      "Technical SEO audit",
      "Link building campaigns",
      "Local SEO optimization",
      "Monthly reporting & analytics"
    ],
    href: "#seo"
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies. Fast, secure, and scalable solutions for your business.",
    iconName: "FaCode",
    features: [
      "React & Next.js development",
      "Full-stack applications",
      "API development & integration",
      "Database design & optimization",
      "Progressive Web Apps (PWA)",
      "Cloud deployment & hosting"
    ],
    href: "#web-dev"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, user-friendly designs that convert visitors into customers. We create experiences that users love.",
    iconName: "FaPalette",
    features: [
      "User interface design",
      "User experience research",
      "Prototyping & wireframing",
      "Design system creation",
      "Mobile app design",
      "Usability testing"
    ],
    href: "#design"
  },
  {
    title: "Video Editing & Thumbnails",
    description: "Professional video editing and eye-catching thumbnail design for YouTube, social media, and marketing campaigns.",
    iconName: "FaVideo",
    features: [
      "YouTube video editing",
      "Thumbnail design",
      "Motion graphics",
      "Color correction & grading",
      "Audio enhancement",
      "Social media video content"
    ],
    href: "#video"
  }
]

const pricingPlans = [
  {
    name: "Starter",
    price: 499,
    description: "Perfect for small businesses and startups",
    features: [
      "5-page website",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 month support",
      "Social media integration"
    ],
    notIncluded: [
      "E-commerce functionality",
      "Advanced animations",
      "Custom integrations"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 999,
    description: "Ideal for growing businesses",
    features: [
      "10-page website",
      "Custom design",
      "Advanced SEO optimization",
      "E-commerce ready",
      "3 months support",
      "Analytics setup",
      "Performance optimization",
      "Content management training"
    ],
    notIncluded: [
      "Custom app development",
      "Advanced integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 2499,
    description: "For large businesses and complex projects",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced integrations",
      "Full SEO package",
      "6 months support",
      "Priority support",
      "Custom training",
      "Performance monitoring",
      "Security audit",
      "Backup & maintenance"
    ],
    notIncluded: [],
    popular: false
  }
]

// Quote Modal Component
function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Quote request:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Get a Quote</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="wordpress">WordPress Development</option>
                <option value="seo">SEO Services</option>
                <option value="web-dev">Web Development</option>
                <option value="design">UI/UX Design</option>
                <option value="video">Video Editing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-plus">$10,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project requirements..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary"
            >
              Send Quote Request
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('Professional')

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8">
              Comprehensive digital solutions to help your business thrive in the digital landscape.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages include our quality guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 cursor-pointer ${
                  selectedPlan === plan.name
                    ? 'bg-primary-50 ring-2 ring-primary-500 shadow-2xl scale-105'
                    : plan.popular
                    ? 'bg-white ring-2 ring-accent-400 shadow-xl scale-102'
                    : 'bg-white shadow-lg hover:bg-primary-50 hover:shadow-xl hover:scale-102 hover:ring-2 hover:ring-primary-400'
                } transition-all duration-300`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {selectedPlan === plan.name && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Selected
                    </span>
                  </div>
                )}
                {plan.popular && selectedPlan !== plan.name && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary-600">
                    ${plan.price}
                    <span className="text-lg text-gray-500 font-normal">/project</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 opacity-50">
                      <FaTimes className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan.name
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-primary-500 hover:text-white text-gray-900 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {selectedPlan === plan.name ? 'Get This Plan' : 'Select Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss your requirements and create a custom solution that perfectly fits your business needs."
        primaryCTA={{
          text: "Get Free Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "/portfolio"
        }}
        backgroundType="gradient"
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  )
}
