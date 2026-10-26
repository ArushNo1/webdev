import type { Route } from '../hooks/useHashRoute'

const items: Array<[Route, string]> = [
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['challenges', 'Challenges'],
  ['devlog', 'Devlog'],
  ['contact', 'Contact'],
]

export default function Navbar({ route }: { route: Route }) {
  return (
    <header className="navbar">
      <a href="#/" className="navbar-name">[ Arush Bodla ]</a>
      <nav>
        {items.map(([r, label]) => (
          <a key={r} href={`#/${r}`} className={route === r ? 'active' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
