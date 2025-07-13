'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CourseCard from '@/components/CourseCard'
import CTASection from '@/components/CTASection'
import AnimatedCounter from '@/components/AnimatedCounter'
import { FaSearch, FaFilter, FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa'

const categories = [
  'All Courses',
  'Web Development',
  'WordPress',
  'SEO & Marketing',
  'UI/UX Design',
  'Video Editing',
  'Business'
]

const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

const courses = [
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
    href: "/courses/web-development-bootcamp",
    category: "Web Development"
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
    href: "/courses/wordpress-mastery",
    category: "WordPress"
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
    href: "/courses/seo-digital-marketing",
    category: "SEO & Marketing"
  },
  {
    title: "React & Next.js Masterclass",
    description: "Build modern web applications with React and Next.js. Learn hooks, context, routing, and deployment strategies.",
    thumbnail: "/images/courses/react-nextjs.jpg",
    duration: "35 hours",
    students: 1950,
    rating: 4.8,
    difficulty: "Intermediate" as const,
    price: 119,
    originalPrice: 229,
    href: "/courses/react-nextjs-masterclass",
    category: "Web Development"
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of user interface and user experience design. Create beautiful, functional designs that users love.",
    thumbnail: "/images/courses/ui-ux-design.jpg",
    duration: "20 hours",
    students: 1200,
    rating: 4.7,
    difficulty: "Beginner" as const,
    price: 69,
    originalPrice: 139,
    href: "/courses/ui-ux-design-fundamentals",
    category: "UI/UX Design"
  },
  {
    title: "YouTube Content Creation",
    description: "Master YouTube content creation, video editing, thumbnail design, and channel growth strategies.",
    thumbnail: "/images/courses/youtube-creation.jpg",
    duration: "18 hours",
    students: 2800,
    rating: 4.9,
    difficulty: "Beginner" as const,
    price: 59,
    originalPrice: 119,
    href: "/courses/youtube-content-creation",
    category: "Video Editing"
  },
  {
    title: "E-commerce with WooCommerce",
    description: "Build profitable online stores with WooCommerce. Learn payment integration, inventory management, and marketing.",
    thumbnail: "/images/courses/woocommerce.jpg",
    duration: "28 hours",
    students: 1600,
    rating: 4.8,
    difficulty: "Intermediate" as const,
    price: 95,
    originalPrice: 189,
    href: "/courses/ecommerce-woocommerce",
    category: "WordPress"
  },
  {
    title: "Freelancing Success Blueprint",
    description: "Learn how to start and grow a successful freelancing business. Client acquisition, pricing, and project management.",
    thumbnail: "/images/courses/freelancing.jpg",
    duration: "15 hours",
    students: 3500,
    rating: 4.9,
    difficulty: "Beginner" as const,
    price: 49,
    originalPrice: 99,
    href: "/courses/freelancing-success",
    category: "Business"
  },
  {
    title: "Advanced JavaScript & TypeScript",
    description: "Deep dive into JavaScript and TypeScript. Learn advanced concepts, patterns, and best practices for professional development.",
    thumbnail: "/images/courses/javascript-typescript.jpg",
    duration: "32 hours",
    students: 1400,
    rating: 4.8,
    difficulty: "Advanced" as const,
    price: 129,
    originalPrice: 249,
    href: "/courses/advanced-javascript-typescript",
    category: "Web Development"
  }
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Courses')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels')
  const [sortBy, setSortBy] = useState('popular')

  const filteredCourses = courses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'All Levels' || course.difficulty === selectedDifficulty
      
      return matchesSearch && matchesCategory && matchesDifficulty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.students - a.students
        case 'rating':
          return b.rating - a.rating
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        default:
          return 0
      }
    })

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
              Online <span className="text-accent-400">Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8">
              Master in-demand skills with our comprehensive online courses. Learn from industry experts and build real-world projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <AnimatedCounter
                    end={4.8}
                    suffix="/5"
                    className="text-2xl font-bold text-yellow-400"
                    delay={0.2}
                  />
                </div>
                <span className="text-primary-200 text-sm">Average Rating</span>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaUsers className="w-5 h-5 text-accent-400" />
                  <AnimatedCounter
                    end={10000}
                    suffix="+"
                    className="text-2xl font-bold text-accent-400"
                    delay={0.4}
                  />
                </div>
                <span className="text-primary-200 text-sm">Students Enrolled</span>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaGraduationCap className="w-5 h-5 text-green-400" />
                  <AnimatedCounter
                    end={50}
                    suffix="+"
                    className="text-2xl font-bold text-green-400"
                    delay={0.6}
                  />
                </div>
                <span className="text-primary-200 text-sm">Courses Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col space-y-6">
              {/* Search Bar */}
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Courses
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by course name, description, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedCategory !== 'All Courses' || selectedDifficulty !== 'All Levels' || searchTerm) && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-600 mr-2">Active filters:</span>
                  {selectedCategory !== 'All Courses' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('All Courses')}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedDifficulty !== 'All Levels' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                      Level: {selectedDifficulty}
                      <button
                        onClick={() => setSelectedDifficulty('All Levels')}
                        className="ml-2 text-accent-600 hover:text-accent-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {searchTerm && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-2 text-gray-600 hover:text-gray-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No courses found</h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find any courses matching your criteria. Try adjusting your search terms or filters.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('All Courses')
                      setSelectedDifficulty('All Levels')
                    }}
                    className="btn-primary w-full"
                  >
                    Clear All Filters
                  </button>
                  <p className="text-sm text-gray-500">
                    or check out our <a href="/services" className="text-primary-600 hover:text-primary-700 font-medium">professional services</a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <CourseCard
                    key={course.title}
                    {...course}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Start Learning Today"
        description="Join thousands of students who have transformed their careers with our comprehensive online courses."
        primaryCTA={{
          text: "Browse All Courses",
          href: "#courses"
        }}
        secondaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        backgroundType="gradient"
      />
    </>
  )
}
