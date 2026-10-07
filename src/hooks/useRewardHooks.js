import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => (
    typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return reducedMotion
}

export function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (reducedMotion || !('IntersectionObserver' in window)) {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold })

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, reducedMotion, threshold])

  return inView
}

export function useCountUp(target, duration = 900) {
  const reducedMotion = useReducedMotion()
  const [value, setValue] = useState(reducedMotion ? target : 0)

  useEffect(() => {
    if (reducedMotion || document.visibilityState === 'hidden') {
      setValue(target)
      return undefined
    }

    let frameId
    const startTime = performance.now()
    const updateValue = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(target * progress))
      if (progress < 1) frameId = requestAnimationFrame(updateValue)
    }

    frameId = requestAnimationFrame(updateValue)
    return () => cancelAnimationFrame(frameId)
  }, [duration, reducedMotion, target])

  return value
}

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text) => {
    if (!navigator.clipboard?.writeText) {
      throw new Error('Clipboard access is unavailable.')
    }

    await navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return { copied, copyToClipboard }
}
