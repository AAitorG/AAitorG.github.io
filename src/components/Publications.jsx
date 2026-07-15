import { publications } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function Publications() {
  const [ref, visible] = useReveal()
  return (
    <section className="section" id="publications" ref={ref}>
      <h2 className={`section-title ${visible ? 'in' : ''}`}>
        <span className="title-index">04.</span> {publications.heading}
      </h2>
      <div className={`section-body ${visible ? 'in' : ''}`}>
        <p className="pub-text">{publications.text}</p>
        <a className="btn" href={publications.link.url} target="_blank" rel="noreferrer">
          {publications.link.label}
        </a>
      </div>
    </section>
  )
}