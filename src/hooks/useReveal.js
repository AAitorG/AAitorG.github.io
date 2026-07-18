import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

export default function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
} = {}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced, threshold, rootMargin])

  return ref
}
