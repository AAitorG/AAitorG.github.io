import { useState, useEffect } from 'react'
import { site } from '../content'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar() {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map((i) => document.getElementById(i.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header className="sidebar">
        <a className="logo" href="#top" onClick={() => scrollTo('top')}>
          AG
        </a>
        <nav className="side-nav">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              className={`nav-link ${active === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="side-socials">
          {site.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
              {s.name[0]}
            </a>
          ))}
        </div>
      </header>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item, i) => (
            <button key={item.id} className="mobile-link" onClick={() => scrollTo(item.id)}>
              <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}