// Ported from Brittany Chiang's v4 `Hero` component
// (https://github.com/bchiang7/v4).

import { hero } from '../config'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1>{hero.greeting}</h1>
      <h2 className="big-heading">{hero.name}</h2>
      <h3 className="medium-heading">{hero.tagline}</h3>
      <p>{hero.description}</p>
      <a className="btn" href="#projects">
        Check out my work!
      </a>
    </section>
  )
}