'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl md:text-9xl font-bold mb-4 gradient-text"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-primary-100 mb-12 leading-relaxed"
          >
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="group bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaHome className="mr-2 w-4 h-4" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg border border-white/20 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              <FaArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </button>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
              <FaSearch className="mr-2 w-4 h-4" />
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link href="/services" className="text-accent-400 hover:text-accent-300 transition-colors">
                Our Services
              </Link>
              <Link href="/courses" className="text-accent-400 hover:text-accent-300 transition-colors">
                Online Courses
              </Link>
              <Link href="/blog" className="text-accent-400 hover:text-accent-300 transition-colors">
                Blog Articles
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
