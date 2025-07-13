'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HighlightedText {
  text: string
  highlights: Array<{
    word: string
    color: string
  }>
}

interface HighlightedTypingProps {
  texts: HighlightedText[]
  className?: string
}

export default function HighlightedTyping({
  texts,
  className = ''
}: HighlightedTypingProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[currentTextIndex].text

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, wait 1 second then delete
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setCharIndex(0)
        }
      }
    }, isDeleting ? 20 : 60) // 60ms typing, 20ms deleting

    return () => clearTimeout(timer)
  }, [charIndex, currentTextIndex, isDeleting, texts])

  const renderHighlightedText = () => {
    const currentTextData = texts[currentTextIndex]
    const words = displayText.split(' ')

    return words.map((word, index) => {
      const highlight = currentTextData.highlights.find(h => h.word.toLowerCase() === word.toLowerCase())

      if (highlight) {
        return (
          <span key={index} className={highlight.color}>
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }

      return (
        <span key={index} className="text-white">
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      )
    })
  }

  return (
    <span className={className}>
      {renderHighlightedText()}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-accent-400 ml-1"
      >
        |
      </motion.span>
    </span>
  )
}
