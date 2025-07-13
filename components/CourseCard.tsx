'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaClock, FaUsers, FaStar, FaPlay } from 'react-icons/fa'

interface CourseCardProps {
  title: string
  description: string
  thumbnail: string
  duration: string
  students: number
  rating: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  originalPrice?: number
  href: string
  delay?: number
}

export default function CourseCard({
  title,
  description,
  thumbnail,
  duration,
  students,
  rating,
  difficulty,
  price,
  originalPrice,
  href,
  delay = 0
}: CourseCardProps) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.div
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
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <FaPlay className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
          <div className="flex items-center space-x-2">
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
            )}
            <span className="text-lg font-bold text-primary-600">${price}</span>
          </div>
          {originalPrice && (
            <div className="text-xs text-green-600 font-semibold text-center">
              Save ${originalPrice - price}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaClock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaUsers className="w-4 h-4" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <FaStar className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold text-gray-700">{rating}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={href}
          className="w-full btn-primary text-center group-hover:bg-primary-600 transition-colors duration-300"
        >
          View Course
        </Link>
      </div>
    </motion.div>
  )
}
