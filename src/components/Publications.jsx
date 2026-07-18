// Publications section — adapted from Brittany Chiang's v4 layout
// (https://github.com/bchiang7/v4) to surface Aitor's papers.

import { publications } from '../config'
import useReveal from '../hooks/useReveal'

export default function Publications() {
  const ref = useReveal()

  return (
    <section id="publications" className="reveal" ref={ref}>
      <h2 className="numbered-heading">{publications.heading}</h2>
      <div className="pubs-list">
        {publications.papers.map((paper, i) => (
          <div className="pub-item" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
            <h3 className="pub-title">
              <a href={paper.url} target="_blank" rel="noopener noreferrer">
                {paper.title}
              </a>
            </h3>
            <p className="pub-meta">
              {paper.journal} · {paper.year}
            </p>
          </div>
        ))}
      </div>
      <div className="pub-spacer"></div>
      <div className="pub-button-wrap">
        <a className="btn" href={publications.link.url} target="_blank" rel="noopener noreferrer">
          {publications.link.label}
        </a>
      </div>
    </section>
  )
}
