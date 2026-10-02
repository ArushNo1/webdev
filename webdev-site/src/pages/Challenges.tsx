import { challenges } from '../data/challenges'
import ChallengeCard from '../components/ChallengeCard'

export default function Challenges({ solved }: { solved: number[] }) {
  return (
    <>
      <div className="title-row">
        <h2 className="page-title">CHALLENGES</h2>
        <span className="muted">PROGRESS [ {solved.length} / {challenges.length} ] SOLVED</span>
      </div>
      <div className="grid-3">
        {challenges.map((c) => (
          <ChallengeCard
            key={c.id}
            challenge={c}
            solved={solved.includes(c.id)}
            locked={c.id > 1 && !solved.includes(c.id - 1)}
          />
        ))}
      </div>
      <section className="panel warn">
        <h2>UNLOCKS</h2>
        <ul className="unlock-list">
          {challenges.map((c) => (
            <li key={c.id} className={solved.includes(c.id) ? 'done' : undefined}>
              CHALLENGE_{String(c.id).padStart(2, '0')} → {c.unlocks}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
