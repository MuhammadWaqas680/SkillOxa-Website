'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold gradient-text">SkillOxa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                  pathname === item.href
                    ? scrolled
                      ? 'text-primary-600'
                      : 'text-accent-400 font-semibold'
                    : scrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-accent-400'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5",
                      scrolled ? "bg-primary-500" : "bg-accent-400"
                    )}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md focus:outline-none transition-colors duration-200",
              scrolled
                ? "text-gray-700 hover:text-primary-600"
                : "text-white hover:text-accent-400"
            )}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span className={cn(
                'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
                isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              )} />
              <span className={cn(
                'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
                isOpen ? 'opacity-0' : 'opacity-100'
              )} />
              <span className={cn(
                'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
                isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-3 py-2 text-base font-medium transition-colors duration-200',
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50 rounded-lg'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
