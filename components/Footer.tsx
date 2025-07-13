import Link from 'next/link'
import { 
  FaFacebook, 
  FaLinkedin, 
  FaYoutube, 
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'WordPress Development', href: '/services#wordpress' },
  { name: 'SEO Services', href: '/services#seo' },
  { name: 'Web Development', href: '/services#web-dev' },
  { name: 'UI/UX Design', href: '/services#design' },
  { name: 'Video Editing', href: '/services#video' },
]

const courses = [
  { name: 'Web Development', href: '/courses#web-dev' },
  { name: 'Digital Marketing', href: '/courses#marketing' },
  { name: 'WordPress Mastery', href: '/courses#wordpress' },
  { name: 'SEO Fundamentals', href: '/courses#seo' },
  { name: 'UI/UX Design', href: '/courses#design' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'eLearning Guru YouTube', href: 'https://youtube.com/@elearningguru', icon: FaYoutube },
  { name: 'WhatsApp', href: 'https://wa.me/923131685672', icon: FaWhatsapp },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold gradient-text">SkillOxa</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by <strong className="text-accent-400">Muhammad Waqas</strong>, creator of <strong className="text-accent-400">"eLearning Guru"</strong> YouTube channel.
              <strong className="text-accent-400">SkillOxa</strong> provides professional digital services and comprehensive online learning in tech, online earning, and freelancing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 w-4 h-4" />
                <span className="text-gray-300">contact@skilloxa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 w-4 h-4" />
                <span className="text-gray-300">+92 313 1685672</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary-400 w-4 h-4" />
                <span className="text-gray-300">Global Remote Services</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link 
                    href={course.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest updates, courses, and digital insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} <strong className="text-accent-400">SkillOxa</strong>. All rights reserved. | Founded by <strong className="text-accent-400">Muhammad Waqas</strong> - Creator of <strong className="text-accent-400">"eLearning Guru"</strong>
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
