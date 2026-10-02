export default function SkillRow({ skill, tool }: { skill: string; tool?: string }) {
  return (
    <li className="skill-row">
      <span>{skill}</span>
      {tool && <span className="skill-tool"> — {tool}</span>}
    </li>
  )
}
