// Ported from Brittany Chiang's v4 `Nav` component
// (https://github.com/bchiang7/v4). Top header bar with hexagon logo,
// numbered nav links, contact button, and mobile menu.

import { useEffect, useState } from 'react'
import { navCta, navLinks } from '../config'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      if (!menuOpen) {
        setHidden(y > 100 && y > lastY)
      }
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduced, menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navClass = [
    'nav',
    'nav-enter',
    scrolled ? 'nav--scrolled' : '',
    hidden && !menuOpen ? 'nav--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={navClass}>
        <a className="nav-logo" href="#top" aria-label="Home" onClick={closeMenu}>
          <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
            <polygon points="21,1 40,11 40,31 21,41 2,31 2,11" fill="none" stroke="var(--green)" strokeWidth="3" />
            <text
              x="50%"
              y="52%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--green)"
              fontSize="22"
              fontWeight="700"
              fontFamily="var(--font-mono)"
            >
              A
            </text>
          </svg>
        </a>

        <div className="nav-links">
          <ol>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ol>
          <a
            className="resume-button"
            href={navCta.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {navCta.name}
          </a>
        </div>

        <button
          type="button"
          className={`menu-button${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="hamburger">
            <span className="ham-box">
              <span className="ham-inner" />
            </span>
          </span>
        </button>
      </header>

      {/* Outside header so backdrop-filter / transforms don't trap position:fixed */}
      <aside
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav>
          <ol>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url} onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            className="resume-button"
            href={navCta.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {navCta.name}
          </a>
        </nav>
      </aside>

      <div
        className={`menu-backdrop${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}
