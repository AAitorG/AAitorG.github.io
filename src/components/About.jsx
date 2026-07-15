// Ported from Brittany Chiang's v4 `About` component
// (https://github.com/bchiang7/v4).

import { about } from '../config'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="numbered-heading">{about.heading}</h2>
      <div className="inner">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="skills-list">
            {about.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            <img className="img" src={about.imageUrl} alt="Aitor González Marfil" />
          </div>
        </div>
      </div>
    </section>
  )
}