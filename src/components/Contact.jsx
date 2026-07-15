import { contact, site } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const [ref, visible] = useReveal()
  return (
    <section className="section contact" id="contact" ref={ref}>
      <h2 className={`section-title center ${visible ? 'in' : ''}`}>
        <span className="title-index">05.</span> {contact.heading}
      </h2>
      <p className={`contact-text ${visible ? 'in' : ''}`}>{contact.text}</p>
      <a className={`btn ${visible ? 'in' : ''}`} href={`mailto:${site.email}`}>
        {contact.cta}
      </a>
      <footer className="footer">
        <p>Designed & built by Aitor González-Marfil.</p>
        <p>React · Vite</p>
      </footer>
    </section>
  )
}