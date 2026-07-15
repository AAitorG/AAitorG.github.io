import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  )
}