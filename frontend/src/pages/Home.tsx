import { profile, projects } from '../data/content'
import ProjectCard from '../components/ProjectCard'

export default function Home({ unlocked }: { unlocked: boolean }) {
  return (
    <>
      <section className="panel hero">
        <p className="muted">&gt; IDENTIFYING SUBJECT...</p>
        <h1>[ {profile.name} ]</h1>
        <p className="tagline">{profile.tagline}</p>
        <div className="actions">
          <a className="btn primary" href="#/projects">[VIEW PROJECTS]</a>
          <a className="btn" href="#/contact">[CONTACT]</a>
        </div>
      </section>

      <div className="grid-2">
        <section className="panel">
          <h2>ABOUT</h2>
          <p className="muted">{profile.about}</p>
        </section>
        <section className="panel">
          <h2>VITALS</h2>
          {profile.vitals.map(([k, v]) => (
            <div key={k} className="vital">
              <span>{k}</span>
              <span className="dots" aria-hidden />
              <span className="muted">{v}</span>
            </div>
          ))}
        </section>
      </div>

      <div className="grid-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} index={i + 1} {...p} />
        ))}
      </div>

      {unlocked && (
        <section className="panel dossier">
          <h2>DOSSIER // DECLASSIFIED</h2>
          <p className="muted">
            Clearance level 1 granted. I started on Codeforces, drifted into CTFs, and ended up
            building the tools I wished existed. RegiMon came from wondering why persistence that
            only lives in memory is so easy to miss.
          </p>
        </section>
      )}

      <a className="classified" href="#/challenges">
        <span>// CLASSIFIED: solve a challenge to unlock more of the site</span>
        <span>[{unlocked ? 'ACCESS GRANTED' : 'LOCKED'}] →</span>
      </a>
    </>
  )
}
