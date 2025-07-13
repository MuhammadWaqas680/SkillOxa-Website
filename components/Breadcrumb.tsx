'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaChevronRight } from 'react-icons/fa'

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  const breadcrumbItems = [
    { name: 'Home', href: '/', icon: FaHome }
  ]

  let currentPath = ''
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ')
    breadcrumbItems.push({ name, href: currentPath })
  })

  if (breadcrumbItems.length <= 1) return null

  return (
    <nav className="bg-gray-50 py-4 border-b border-gray-200">
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <FaChevronRight className="w-3 h-3 text-gray-400 mx-2" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-600 font-medium flex items-center">
                  {index === 0 && item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200 flex items-center"
                >
                  {index === 0 && item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
