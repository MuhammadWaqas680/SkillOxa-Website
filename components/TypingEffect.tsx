'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MultiTypingEffectProps {
  texts: Array<{
    text: string
    color: string
  }>
  speed?: number
  delay?: number
  pauseDuration?: number
  className?: string
}

export default function TypingEffect({
  texts,
  speed = 20,
  delay = 0,
  pauseDuration = 2000,
  className = ''
}: MultiTypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      const currentText = texts[currentTextIndex].text

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
          timeout = setTimeout(type, speed)
        } else {
          // Finished typing, wait then start deleting
          timeout = setTimeout(() => {
            setIsDeleting(true)
            type()
          }, pauseDuration)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
          timeout = setTimeout(type, 10)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          timeout = setTimeout(type, 50)
        }
      }
    }

    // Start typing after initial delay
    timeout = setTimeout(type, delay)

    return () => clearTimeout(timeout)
  }, [displayText, currentTextIndex, isDeleting, texts, speed, pauseDuration, delay])

  const currentColor = texts[currentTextIndex]?.color || 'text-accent-400'

  return (
    <span className={className}>
      <span className={currentColor}>
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`${currentColor} ml-1`}
      >
        |
      </motion.span>
    </span>
  )
}
