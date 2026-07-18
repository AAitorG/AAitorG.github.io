// Ported from Brittany Chiang's v4 `Featured` / `Projects` components
// (https://github.com/bchiang7/v4). Alternating two-column layout with
// GitHub/external links and tech tags.

import { projects } from '../config'
import useReveal from '../hooks/useReveal'
import Icon from './Icon'

export default function Projects() {
  const headingRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="projects">
      <h2 className="numbered-heading reveal" ref={headingRef}>
        {projects.heading}
      </h2>
      <ul className="projects-grid reveal-stagger" ref={gridRef}>
        {projects.items.map((proj) => (
          <li className="project" key={proj.name}>
            {proj.image && (
              <a
                href={proj.external || proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${proj.image})`,
                    minHeight: proj.imageHeight ? `${proj.imageHeight}px` : undefined,
                  }}
                />
              </a>
            )}
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  {proj.external || proj.github ? (
                    <a href={proj.external || proj.github} target="_blank" rel="noopener noreferrer">
                      {proj.name}
                    </a>
                  ) : (
                    proj.name
                  )}
                </h3>
                <div className="project-description">
                  <p>{proj.description}</p>
                </div>
                {proj.tags.length > 0 && (
                  <ul className="project-tech-list">
                    {proj.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                      <Icon name="GitHub" />
                    </a>
                  )}
                  {proj.external && (
                    <a href={proj.external} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="external">
                      <Icon name="External" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
