'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'
import { FaSearch, FaCalendar, FaUser, FaTags } from 'react-icons/fa'

const categories = [
  'All Posts',
  'Web Development',
  'WordPress',
  'SEO & Marketing',
  'UI/UX Design',
  'Business Tips',
  'Tutorials',
  'Industry News'
]

const blogPosts = [
  {
    title: "10 Essential WordPress Plugins Every Website Needs in 2024",
    excerpt: "Discover the must-have WordPress plugins that will enhance your website's functionality, security, and performance. From SEO optimization to security hardening.",
    thumbnail: "/images/blog/wordpress-plugins-2024.jpg",
    author: "Waqas",
    publishDate: new Date('2024-01-15'),
    readTime: "8 min read",
    category: "WordPress",
    href: "/blog/essential-wordpress-plugins-2024"
  },
  {
    title: "The Complete Guide to SEO in 2024: Strategies That Actually Work",
    excerpt: "Learn the latest SEO strategies and techniques that are driving results in 2024. From technical SEO to content optimization and link building.",
    thumbnail: "/images/blog/seo-guide-2024.jpg",
    author: "Waqas",
    publishDate: new Date('2024-01-10'),
    readTime: "12 min read",
    category: "SEO & Marketing",
    href: "/blog/complete-seo-guide-2024"
  },
  {
    title: "React vs Next.js: Which Should You Choose for Your Next Project?",
    excerpt: "A comprehensive comparison of React and Next.js, helping you make the right choice for your web development project based on your specific needs.",
    thumbnail: "/images/blog/react-vs-nextjs.jpg",
    author: "Waqas",
    publishDate: new Date('2024-01-05'),
    readTime: "10 min read",
    category: "Web Development",
    href: "/blog/react-vs-nextjs-comparison"
  },
  {
    title: "How to Create Stunning UI Designs That Convert Visitors to Customers",
    excerpt: "Learn the principles of effective UI design that not only look great but also drive conversions. Practical tips and real-world examples included.",
    thumbnail: "/images/blog/ui-design-conversion.jpg",
    author: "Waqas",
    publishDate: new Date('2023-12-28'),
    readTime: "9 min read",
    category: "UI/UX Design",
    href: "/blog/ui-design-conversion-tips"
  },
  {
    title: "Building a Successful Freelancing Business: Lessons from 5 Years",
    excerpt: "Insights and practical advice from building a successful freelancing business. Learn about client acquisition, pricing strategies, and scaling your services.",
    thumbnail: "/images/blog/freelancing-success.jpg",
    author: "Waqas",
    publishDate: new Date('2023-12-20'),
    readTime: "15 min read",
    category: "Business Tips",
    href: "/blog/freelancing-business-success"
  },
  {
    title: "WordPress Security: 15 Steps to Protect Your Website from Hackers",
    excerpt: "Comprehensive WordPress security guide covering everything from basic security measures to advanced protection techniques. Keep your website safe.",
    thumbnail: "/images/blog/wordpress-security.jpg",
    author: "Waqas",
    publishDate: new Date('2023-12-15'),
    readTime: "11 min read",
    category: "WordPress",
    href: "/blog/wordpress-security-guide"
  },
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the emerging trends and technologies shaping the future of web development. From AI integration to new frameworks and tools.",
    thumbnail: "/images/blog/web-dev-trends-2024.jpg",
    author: "Waqas",
    publishDate: new Date('2023-12-10'),
    readTime: "7 min read",
    category: "Industry News",
    href: "/blog/web-development-trends-2024"
  },
  {
    title: "Step-by-Step Guide: Creating Your First E-commerce Store with WooCommerce",
    excerpt: "Complete tutorial on building an e-commerce store with WooCommerce. From setup to payment integration and optimization for sales.",
    thumbnail: "/images/blog/woocommerce-tutorial.jpg",
    author: "Waqas",
    publishDate: new Date('2023-12-05'),
    readTime: "20 min read",
    category: "Tutorials",
    href: "/blog/woocommerce-ecommerce-tutorial"
  },
  {
    title: "Local SEO Strategies That Drive Foot Traffic to Your Business",
    excerpt: "Master local SEO techniques to improve your local search rankings and attract more customers to your physical business location.",
    thumbnail: "/images/blog/local-seo-strategies.jpg",
    author: "Waqas",
    publishDate: new Date('2023-11-28'),
    readTime: "13 min read",
    category: "SEO & Marketing",
    href: "/blog/local-seo-strategies"
  }
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [sortBy, setSortBy] = useState('newest')

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.publishDate.getTime() - a.publishDate.getTime()
        case 'oldest':
          return a.publishDate.getTime() - b.publishDate.getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const featuredPost = filteredPosts[0] || blogPosts[0]
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : []

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
              SkillOxa <span className="text-accent-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8">
              Stay updated with the latest insights, tutorials, and industry trends in web development, digital marketing, and online business.
            </p>
            <div className="flex items-center justify-center space-x-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <FaUser className="w-4 h-4 text-accent-400" />
                <span className="text-accent-300 font-medium">Expert Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendar className="w-4 h-4 text-accent-400" />
                <span className="text-accent-300 font-medium">Weekly Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTags className="w-4 h-4 text-accent-400" />
                <span className="text-accent-300 font-medium">Multiple Topics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Featured <span className="gradient-text">Article</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <BlogCard {...featuredPost} />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col space-y-6">
              {/* Search Bar */}
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Articles
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by title, content, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Alphabetical</option>
                  </select>
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedCategory !== 'All Posts' || searchTerm) && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-600 mr-2">Active filters:</span>
                  {selectedCategory !== 'All Posts' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('All Posts')}
                        className="ml-2 text-primary-600 hover:text-primary-800"
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

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('All Posts')
                    }}
                    className="btn-primary w-full"
                  >
                    Clear All Filters
                  </button>
                  <p className="text-sm text-gray-500">
                    or browse our <Link href="/courses" className="text-primary-600 hover:text-primary-700 font-medium">popular courses</Link>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {remainingPosts.length} Article{remainingPosts.length !== 1 ? 's' : ''} Found
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post, index) => (
                  <BlogCard
                    key={post.title}
                    {...post}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Never Miss an <span className="gradient-text">Update</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Learn More?"
        description="Explore our comprehensive courses and take your skills to the next level with expert-led training."
        primaryCTA={{
          text: "Browse Courses",
          href: "/courses"
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
