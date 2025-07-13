'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  thumbnail: string
  author: string
  publishDate: Date
  readTime: string
  category: string
  href: string
  delay?: number
}

export default function BlogCard({
  title,
  excerpt,
  thumbnail,
  author,
  publishDate,
  readTime,
  category,
  href,
  delay = 0
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            {readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaUser className="w-3 h-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCalendar className="w-3 h-3" />
              <span>{formatDate(publishDate)}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <FaClock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={href}
          className="group/link inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.article>
  )
}
