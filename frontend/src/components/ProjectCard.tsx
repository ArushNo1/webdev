export interface Project {
  name: string
  tagline: string
  problem?: string
  approach?: string
  result?: string
  stack?: string[]
  github?: string
}

interface Props extends Project {
  index: number
  featured?: boolean
}

export default function ProjectCard({ index, featured, name, tagline, problem, approach, result, stack, github }: Props) {
  const body = (
    <>
      <span className="card-label">CASE FILE {String(index).padStart(2, '0')}</span>
      {featured && <span className="pinned">● pinned</span>}
      <h3>{name}</h3>
      {featured && problem ? (
        <ul className="case-lines">
          <li>{problem}</li>
          <li>{approach}</li>
          <li>{result}</li>
        </ul>
      ) : (
        <p>{tagline}</p>
      )}
      {stack && (
        <div className="tags">
          {stack.map((s) => (
            <span key={s}>[ {s} ]</span>
          ))}
        </div>
      )}
      {github && <span className="card-action">[VIEW CASE →]</span>}
    </>
  )
  const cls = `card${featured ? ' featured' : ''}`
  return github ? (
    <a className={cls} href={github} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}
