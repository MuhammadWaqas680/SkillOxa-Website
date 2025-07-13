'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'
import CourseCard from '@/components/CourseCard'
import TestimonialSlider from '@/components/TestimonialSlider'
import CTASection from '@/components/CTASection'
import AnimatedCounter from '@/components/AnimatedCounter'
import HighlightedTyping from '@/components/HighlightedTyping'
import {
  FaUsers,
  FaAward,
  FaRocket,
  FaArrowRight,
  FaYoutube
} from 'react-icons/fa'

// Metadata moved to layout.tsx since this is now a client component

const services = [
  {
    title: "WordPress Development",
    description: "Custom WordPress websites that are fast, secure, and optimized for search engines. From simple blogs to complex e-commerce solutions.",
    iconName: "FaWordpress",
    features: [
      "Custom theme development",
      "Plugin customization",
      "E-commerce integration",
      "Performance optimization"
    ],
    href: "/services#wordpress"
  },
  {
    title: "SEO Services",
    description: "Boost your online visibility with our comprehensive SEO strategies. Get more traffic, leads, and sales from search engines.",
    iconName: "FaSearch",
    features: [
      "Keyword research & analysis",
      "On-page optimization",
      "Technical SEO audit",
      "Link building campaigns"
    ],
    href: "/services#seo"
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies. Fast, secure, and scalable solutions for your business.",
    iconName: "FaCode",
    features: [
      "React & Next.js development",
      "Full-stack applications",
      "API integration",
      "Database design"
    ],
    href: "/services#web-dev"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, user-friendly designs that convert visitors into customers. We create experiences that users love.",
    iconName: "FaPalette",
    features: [
      "User interface design",
      "User experience research",
      "Prototyping & wireframing",
      "Design system creation"
    ],
    href: "/services#design"
  }
]

const featuredCourses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Master modern web development with HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and get job-ready skills.",
    thumbnail: "/images/courses/web-dev-bootcamp.jpg",
    duration: "40 hours",
    students: 2500,
    rating: 4.9,
    difficulty: "Beginner" as const,
    price: 99,
    originalPrice: 199,
    href: "/courses/web-development-bootcamp"
  },
  {
    title: "WordPress Mastery Course",
    description: "Learn to build professional WordPress websites from scratch. Includes themes, plugins, customization, and advanced techniques.",
    thumbnail: "/images/courses/wordpress-mastery.jpg",
    duration: "25 hours",
    students: 1800,
    rating: 4.8,
    difficulty: "Intermediate" as const,
    price: 79,
    originalPrice: 149,
    href: "/courses/wordpress-mastery"
  },
  {
    title: "SEO & Digital Marketing",
    description: "Complete guide to SEO and digital marketing. Learn to rank websites, drive traffic, and grow your online presence.",
    thumbnail: "/images/courses/seo-marketing.jpg",
    duration: "30 hours",
    students: 3200,
    rating: 4.9,
    difficulty: "Beginner" as const,
    price: 89,
    originalPrice: 179,
    href: "/courses/seo-digital-marketing"
  }
]

export default function HomePage() {
  return (
    <>
      {/* Clean Professional Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <HighlightedTyping
                texts={[
                  {
                    text: "Transform Your Digital Presence",
                    highlights: [
                      { word: "Digital", color: "text-accent-400" }
                    ]
                  },
                  {
                    text: "Learn - Build - Earn",
                    highlights: [
                      { word: "Build", color: "text-accent-400" }
                    ]
                  },
                  {
                    text: "Master Tech Skills Today",
                    highlights: [
                      { word: "Tech", color: "text-accent-400" }
                    ]
                  },
                  {
                    text: "Start Your Freelancing Journey",
                    highlights: [
                      { word: "Freelancing", color: "text-accent-400" }
                    ]
                  },
                  {
                    text: "Build Your Online Empire",
                    highlights: [
                      { word: "Online", color: "text-accent-400" }
                    ]
                  }
                ]}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed"
            >
              Professional digital services and online learning platform by{" "}
              <strong className="text-accent-400 whitespace-nowrap">Muhammad Waqas</strong>, founder of{" "}
              <strong className="text-accent-400">eLearning Guru</strong> YouTube channel with 10K+ subscribers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/services" className="btn-primary min-w-[180px]">
                Explore Services
              </Link>
              <Link href="/courses" className="btn-secondary min-w-[180px]">
                View Courses
              </Link>
            </motion.div>

            {/* Enhanced Stats with Color-Matched Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaUsers className="w-5 h-5 text-blue-400" />
                  <AnimatedCounter end={5000} suffix="+" className="text-3xl font-bold text-blue-400" />
                </div>
                <p className="text-primary-200 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaAward className="w-5 h-5 text-accent-400" />
                  <AnimatedCounter end={50} suffix="+" className="text-3xl font-bold text-accent-400" delay={0.2} />
                </div>
                <p className="text-primary-200 text-sm">Courses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaRocket className="w-5 h-5 text-green-400" />
                  <AnimatedCounter end={1000} suffix="+" className="text-3xl font-bold text-green-400" delay={0.4} />
                </div>
                <p className="text-primary-200 text-sm">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaYoutube className="w-5 h-5 text-red-400" />
                  <AnimatedCounter end={10} suffix="K+" className="text-3xl font-bold text-red-400" delay={0.6} />
                </div>
                <p className="text-primary-200 text-sm">eLearning Guru Subs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">SkillOxa</span>
              </h2>

              <div className="text-xl text-gray-600 mb-8 leading-relaxed space-y-4">
                <p>
                  Founded by <strong className="text-primary-600">Muhammad Waqas</strong>, CEO & Founder of SkillOxa and creator of
                  the popular <strong className="text-primary-600">"eLearning Guru"</strong> YouTube channel with 10K+ subscribers.
                </p>
                <p>
                  With over <strong className="text-primary-600">5 years of experience</strong> in tech, online earning, and freelancing,
                  Muhammad Waqas has helped thousands of individuals master digital skills and build successful online careers.
                </p>
                <p>
                  SkillOxa bridges the gap between professional digital services and accessible online education,
                  empowering businesses and individuals to thrive in the digital economy.
                </p>
              </div>

              {/* Compact Stats - Only 3 */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FaUsers className="w-6 h-6 text-primary-600" />
                  </div>
                  <AnimatedCounter
                    end={5000}
                    suffix="+"
                    delay={0.2}
                    duration={2500}
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FaAward className="w-6 h-6 text-accent-600" />
                  </div>
                  <AnimatedCounter
                    end={50}
                    suffix="+"
                    delay={0.4}
                    duration={2000}
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <p className="text-gray-600 text-sm">Courses</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FaRocket className="w-6 h-6 text-green-600" />
                  </div>
                  <AnimatedCounter
                    end={1000}
                    suffix="+"
                    delay={0.6}
                    duration={2200}
                    className="text-2xl font-bold text-gray-900 mb-1"
                  />
                  <p className="text-gray-600 text-sm">Projects</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group"
              >
                Learn More About Us
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Professional Founder Profile */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                {/* Content */}
                <div className="relative">
                  {/* Large Profile Image Area */}
                  <div className="text-center mb-6">
                    <div className="relative w-64 h-64 rounded-2xl mx-auto mb-6 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                      <img
                        src="/images/pp.jpg"
                        alt="Muhammad Waqas - CEO & Founder of SkillOxa"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />

                      {/* Small Professional Badge on hover */}
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                        <span className="text-gray-700 font-medium text-xs">CEO & Founder</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">Muhammad Waqas</h3>
                    <p className="text-primary-600 font-medium text-lg">CEO & Founder, SkillOxa</p>
                    <p className="text-gray-500 text-sm">Creator of <span className="text-accent-500 font-medium">"eLearning Guru"</span> Channel</p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    "Helping individuals master tech skills, online earning, and freelancing to build
                    successful digital careers through quality education and professional services."
                  </p>

                  {/* Enhanced YouTube Stats with Icon */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 text-center border border-red-100 group-hover:border-red-200 transition-colors duration-300">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaYoutube className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <AnimatedCounter
                          end={10}
                          suffix="K+"
                          delay={0.8}
                          duration={2400}
                          className="text-xl font-bold text-red-600"
                        />
                        <p className="text-gray-600 text-sm font-medium">"eLearning Guru" Subscribers</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span>⭐ Tech & Freelancing Expert</span>
                      <span>•</span>
                      <span>500K+ Views</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
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
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional digital solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Featured Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and master the skills that matter in today's digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={course.title}
                {...course}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Join thousands of satisfied clients and students who have transformed their businesses and careers with SkillOxa."
        primaryCTA={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Call Us Now",
          href: "tel:+1234567890"
        }}
        backgroundType="gradient"
      />
    </>
  )
}
