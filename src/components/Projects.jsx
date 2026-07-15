import { projects } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function Projects() {
  const [ref, visible] = useReveal()
  return (
    <section className="section" id="projects" ref={ref}>
      <h2 className={`section-title ${visible ? 'in' : ''}`}>
        <span className="title-index">03.</span> {projects.heading}
      </h2>
      <div className={`section-body ${visible ? 'in' : ''}`}>
        <div className="projects-grid">
          {projects.items.map((proj) => (
            <article className="project-card" key={proj.name}>
              <div className="project-top">
                <span className="project-folder">★</span>
                <div className="project-links">
                  {proj.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer" aria-label={l.label}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="project-name">{proj.name}</h3>
              <p className="project-desc">{proj.description}</p>
              <ul className="project-tags">
                {proj.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}