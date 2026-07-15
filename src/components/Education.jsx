// Education section — adapted from Brittany Chiang's v4 layout patterns
// (https://github.com/bchiang7/v4). Displays degrees in a concise grid.

import { education } from '../config'

export default function Education() {
  return (
    <section id="education">
      <h2 className="numbered-heading">{education.heading}</h2>
      <div className="edu-list">
        {education.items.map((item) => (
          <div className="edu-item" key={item.degree}>
            <h3>{item.degree}</h3>
            <p className="school">{item.school}</p>
            <p className="range">{item.range}</p>
          </div>
        ))}
      </div>
    </section>
  )
}