// Ported from Brittany Chiang's v4 `Email` component
// (https://github.com/bchiang7/v4). Fixed vertical email link on the
// RIGHT side of the viewport.

import { site } from '../config'

export default function Email() {
  return (
    <div className="side side-right">
      <a className="email-link" href={`mailto:${site.email}`} aria-label="Email me">
        {site.email}
      </a>
    </div>
  )
}