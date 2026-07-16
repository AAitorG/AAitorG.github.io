// Ported from Brittany Chiang's v4 `Footer` component
// (https://github.com/bchiang7/v4). Includes attribution to the original
// design author.

import { site, socialMedia } from '../config'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <ul>
          {socialMedia.map(({ name, url }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-credit">
        <div className="footer-name-container">
          <a href="#top" className="footer-logo" aria-label="Back to top">
            <svg viewBox="0 0 42 42" width="22" height="22" fill="none">
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
          <div className="footer-name">{site.name}</div>
        </div>
        <br />
        <a href={site.attribution.url} target="_blank" rel="noopener noreferrer">
          {site.attribution.text}
        </a>
      </div>
    </footer>
  )
}