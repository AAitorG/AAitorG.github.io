import { intro } from '../content'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      <p className="hero-hi">{intro.hi}</p>
      <h1 className="hero-name">{intro.name}</h1>
      <h2 className="hero-tagline">{intro.tagline}</h2>
      <p className="hero-desc">{intro.description}</p>
      <button className="btn" onClick={() => scrollTo('projects')}>
        {intro.cta}
      </button>
    </section>
  )
}