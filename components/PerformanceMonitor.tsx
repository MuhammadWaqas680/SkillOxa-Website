'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
        }
      })
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // First Input Delay (FID) - using first-input
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Type assertion for first-input entries which have processingStart
          const fidEntry = entry as any
          if (fidEntry.processingStart) {
            const fid = fidEntry.processingStart - entry.startTime
            console.log('FID:', fid)
          }
        }
      })

      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        console.log('CLS:', clsValue)
      })

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null // This component doesn't render anything
}
