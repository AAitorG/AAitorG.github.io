// Ported from Brittany Chiang's v4 `Contact` component
// (https://github.com/bchiang7/v4).

import { contact, site } from '../config'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="contact reveal" id="contact" ref={ref}>
      <h2 className="numbered-heading overline">{contact.heading}</h2>
      <h2 className="title">Get In Touch</h2>
      <p>{contact.text}</p>
      <a className="btn" href={`mailto:${site.email}`}>
        {contact.cta}
      </a>
    </section>
  )
}
