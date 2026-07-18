// Ported from Brittany Chiang's v4 `Social` component
// (https://github.com/bchiang7/v4). Fixed vertical social links on the
// LEFT side of the viewport.

import { socialMedia } from '../config'
import Icon from './Icon'

export default function Social() {
  return (
    <div className="side side-left side-enter">
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
  )
}
