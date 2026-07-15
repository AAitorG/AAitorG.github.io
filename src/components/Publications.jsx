// Publications section — adapted from Brittany Chiang's v4 layout
// (https://github.com/bchiang7/v4) to surface Aitor's papers.

import { publications } from '../config'

export default function Publications() {
  return (
    <section id="publications">
      <h2 className="numbered-heading">{publications.heading}</h2>
      <p className="pub-text">{publications.text}</p>
      <a className="btn" href={publications.link.url} target="_blank" rel="noopener noreferrer">
        {publications.link.label}
      </a>
    </section>
  )
}