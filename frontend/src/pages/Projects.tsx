import { classifiedProject, projects } from '../data/content'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ unlocked }: { unlocked: boolean }) {
  return (
    <>
      <h2 className="page-title">PROJECTS</h2>
      <div className="pinboard">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} index={i + 1} featured={i === 0} {...p} />
        ))}
        {unlocked ? (
          <ProjectCard index={3} {...classifiedProject} />
        ) : (
          <div className="card locked">
            <span className="card-label">CASE FILE 03 · LOCKED</span>
            <h3>[ ENCRYPTED ]</h3>
            <p>Solve CHALLENGE_02 to open this file.</p>
          </div>
        )}
        <div className="card more">[ + more ]</div>
      </div>
    </>
  )
}
