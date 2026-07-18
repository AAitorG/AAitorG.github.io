// Ported from Brittany Chiang's v4 `Hero` component
// (https://github.com/bchiang7/v4).

import { hero } from '../config'

const items = [
  { key: 'greeting', el: 'h1', content: hero.greeting },
  { key: 'name', el: 'h2', className: 'big-heading', content: hero.name },
  { key: 'tagline', el: 'h3', className: 'medium-heading', content: hero.tagline },
  { key: 'desc', el: 'p', content: hero.description },
]

export default function Hero() {
  return (
    <section className="hero">
      {items.map((item, i) => {
        const Tag = item.el
        return (
          <Tag
            key={item.key}
            className={`fade-up${item.className ? ` ${item.className}` : ''}`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            {item.content}
          </Tag>
        )
      })}
      <a
        className="btn fade-up"
        href="#projects"
        style={{ animationDelay: `${(items.length + 1) * 100}ms` }}
      >
        Check out my work!
      </a>
    </section>
  )
}
