'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import {
  FaYoutube,
  FaUsers,
  FaAward,
  FaRocket,
  FaHeart,
  FaLightbulb,
  FaBullseye,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa'

const stats = [
  { icon: FaUsers, value: 5000, suffix: '+', label: 'Students Taught' },
  { icon: FaAward, value: 50, suffix: '+', label: 'Courses Created' },
  { icon: FaRocket, value: 1000, suffix: '+', label: 'Projects Completed' },
  { icon: FaYoutube, value: 10, suffix: 'K+', label: 'eLearning Guru Subscribers' },
]

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.'
  },
  {
    icon: FaHeart,
    title: 'Passion',
    description: 'Our love for technology and education drives us to create exceptional experiences for our clients and students.'
  },
  {
    icon: FaBullseye,
    title: 'Excellence',
    description: 'We are committed to delivering high-quality work that exceeds expectations and drives real results.'
  },
  {
    icon: FaGlobe,
    title: 'Accessibility',
    description: 'We believe in making quality education and digital services accessible to everyone, everywhere.'
  },
]

export default function AboutPage() {
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
              About <span className="text-accent-400">SkillOxa</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Founded by <strong className="text-accent-400">Muhammad Waqas</strong>, creator of <strong className="text-accent-400">"eLearning Guru"</strong> YT Channel. 
              Empowering businesses and individuals through innovative digital solutions and comprehensive online education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group cursor-pointer">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ring-4 ring-white hover:ring-primary-200 transform group-hover:-translate-y-2">
                  <img
                    src="/images/speech-pic.jpg"
                    alt="Muhammad Waqas - Founder of SkillOxa and Creator of eLearning Guru"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Professional Badge on hover */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-primary-700 font-semibold text-sm">CEO & Founder</span>
                  </div>

                  {/* Bottom info on hover */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-primary-700 font-semibold text-sm">Muhammad Waqas</p>
                    <p className="text-gray-600 text-xs">Creator of "eLearning Guru" YouTube Channel</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:bg-accent-600 group-hover:rotate-12">
                  <FaYoutube className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet <span className="gradient-text">Muhammad Waqas</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>CEO & Founder of SkillOxa | Creator of "eLearning Guru"</strong>
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Muhammad Waqas</strong> is a passionate educator and digital entrepreneur specializing in tech, online earning,
                and freelancing. With his popular <strong>"eLearning Guru"</strong> YouTube channel boasting <strong>10K+</strong> subscribers, he has
                helped thousands of individuals build successful digital careers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                His journey began with a mission to make quality tech education accessible to everyone. Today, <strong>SkillOxa </strong>
                stands as a testament to that vision, offering both professional digital services and comprehensive
                online courses focused on practical, career-ready skills.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-full flex items-center space-x-2">
                  <FaYoutube className="w-4 h-4" />
                  <span className="font-semibold">eLearning Guru</span>
                </div>
                <div className="bg-primary-50 text-primary-600 px-4 py-2 rounded-full">
                  <span className="font-semibold">10K+ Subscribers</span>
                </div>
                <div className="bg-accent-50 text-accent-600 px-4 py-2 rounded-full">
                  <span className="font-semibold">Digital Expert</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our community places in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  delay={index * 0.2}
                  duration={2000}
                />
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-primary-50 via-primary-25 to-white rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <FaBullseye className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary-700 transition-colors duration-300">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  To democratize access to quality digital education and professional services, empowering
                  individuals and businesses to thrive in the digital age.
                </p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  We believe that everyone deserves access to world-class education and digital solutions,
                  regardless of their background or location.
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <FaArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-accent-50 via-orange-25 to-white rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-200/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <FaLightbulb className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-accent-700 transition-colors duration-300">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  To become the world's leading platform where education meets innovation, creating a
                  global community of skilled professionals and successful businesses.
                </p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  We envision a future where learning is continuous, accessible, and directly applicable
                  to real-world challenges and opportunities.
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <FaArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaYoutube className="w-20 h-20 text-red-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to <strong className="text-accent-400">"eLearning Guru"</strong> YouTube channel for free tutorials, tips, and insights on tech,
              online earning, and freelancing. Join <strong className="text-accent-400">10K+</strong> learners worldwide!
            </p>
            <a
              href="https://youtube.com/@elearningguru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              <FaYoutube className="mr-2 w-5 h-5" />
              Subscribe Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
