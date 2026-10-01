import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard, { type Project } from './components/ProjectCard'
import Contact from './components/Contact'

const projects: Project[] = [
  {
    name: 'RegiMon',
    tagline: 'Real-time Windows Registry monitor that catches in-memory persistence your antivirus misses.',
    github: 'https://github.com/ArushNo1/RegiMon',
  },
  {
    name: 'Nexus',
    tagline: "Multi-agent AI that turns a student's learning gap into a playable game.",
    github: 'https://github.com/ArushNo1/nexus',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="projects" className="projects">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </section>
        <Contact />
      </main>
    </>
  )
}

export default App
