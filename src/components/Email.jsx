// Ported from Brittany Chiang's v4 `Email` component
// (https://github.com/bchiang7/v4). Fixed vertical email link on the
// RIGHT side of the viewport, with a line below the email.

import { site } from '../config'

export default function Email() {
  return (
    <div className="side side-right side-enter">
      <a
        className="email-link"
        href={`mailto:${site.email}`}
        aria-label="Email me"
        style={{ fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif' }}
      >
        {site.email}
      </a>
    </div>
  )
}
