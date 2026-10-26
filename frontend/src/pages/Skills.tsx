import { skills } from '../data/content'
import SkillRow from '../components/SkillRow'

export default function Skills() {
  return (
    <>
      <h2 className="page-title">SKILLS</h2>
      <div className="grid-2">
        {skills.map((group) => (
          <section key={group.category} className="panel">
            <h2>[ {group.category} ]</h2>
            <ul className="skill-list">
              {group.items.map(([skill, tool]) => (
                <SkillRow key={skill} skill={skill} tool={tool} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
