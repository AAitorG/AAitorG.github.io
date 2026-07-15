import { about } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section className="section" id="about" ref={ref}>
      <h2 className={`section-title ${visible ? 'in' : ''}`}>
        <span className="title-index">01.</span> {about.heading}
      </h2>
      <div className={`section-body ${visible ? 'in' : ''}`}>
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="skills">
          {about.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}