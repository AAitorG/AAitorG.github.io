// Ported from Brittany Chiang's v4 `Nav` component
// (https://github.com/bchiang7/v4). Top header bar with hexagon logo,
// numbered nav links, and contact button.

import { navLinks } from '../config'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-logo" href="#top" aria-label="Home">
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
            fontFamily="'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace"
          >
            A
          </text>
        </svg>
      </a>
      <div className="nav-links">
        <ol>
          {navLinks.map((link, i) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ol>
        <a className="resume-button" href="mailto:aitorgacad@gmail.com">
          Say Hi 👋
        </a>
      </div>
    </header>
  )
}