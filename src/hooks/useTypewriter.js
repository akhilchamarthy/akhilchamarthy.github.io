import { useState, useEffect } from 'react'

export function useTypewriter(words, typeSpeed = 75, deleteSpeed = 45, pauseMs = 2000) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]

    if (!deleting && charIndex === word.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex(i => i + 1)
      return
    }

    const t = setTimeout(
      () => setCharIndex(c => deleting ? c - 1 : c + 1),
      deleting ? deleteSpeed : typeSpeed
    )
    return () => clearTimeout(t)
  }, [charIndex, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return words[wordIndex % words.length].slice(0, charIndex)
}
