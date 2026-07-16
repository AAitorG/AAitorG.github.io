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
        <div className="footer-name">{site.name}</div>
        <br />
        <a href={site.attribution.url} target="_blank" rel="noopener noreferrer">
          {site.attribution.text}
        </a>
      </div>
    </footer>
  )
}