import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Challenges from './pages/Challenges'
import Contact from './pages/Contact'
import Devlog from './pages/Devlog'
import { useHashRoute } from './hooks/useHashRoute'
import { useSolved } from './hooks/useProgress'

function App() {
  const route = useHashRoute()
  const solved = useSolved()

  return (
    <>
      <Navbar route={route} />
      <main>
        {route === 'home' && <Home unlocked={solved.includes(1)} />}
        {route === 'projects' && <Projects unlocked={solved.includes(2)} />}
        {route === 'skills' && <Skills />}
        {route === 'challenges' && <Challenges solved={solved} />}
        {route === 'devlog' && <Devlog />}
        {route === 'contact' && <Contact unlocked={solved.includes(3)} />}
      </main>
    </>
  )
}

export default App
