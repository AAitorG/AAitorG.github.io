// App — mirrors Brittany Chiang's v4 page composition
// (https://github.com/bchiang7/v4/src/pages/index.js) with Aitor's sections.

import Nav from './components/Nav'
import Social from './components/Social'
import Email from './components/Email'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="root">
      <Nav />
      <Social />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}