export interface Project {
  name: string
  tagline: string
  github: string
}

export default function ProjectCard({ name, tagline, github }: Project) {
  return (
    <a className="card" href={github} target="_blank" rel="noreferrer">
      <h3>{name}</h3>
      <p>{tagline}</p>
    </a>
  )
}
