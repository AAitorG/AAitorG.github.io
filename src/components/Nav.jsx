// Ported from Brittany Chiang's v4 `Nav` component
// (https://github.com/bchiang7/v4). Top header bar with logo, numbered
// nav links, and resume button.

import { navLinks } from '../config'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-logo" href="#top" aria-label="Home">
        AG
      </a>
      <div className="nav-links">
        <ol>
          {navLinks.map((link, i) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ol>
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </header>
  )
}