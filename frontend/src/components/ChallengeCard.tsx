import { useState, type FormEvent } from 'react'
import type { Challenge } from '../data/challenges'
import { sha256 } from '../lib/sha256'
import { markSolved } from '../hooks/useProgress'

interface Props {
  challenge: Challenge
  locked: boolean
  solved: boolean
}

export default function ChallengeCard({ challenge, locked, solved }: Props) {
  const [answer, setAnswer] = useState('')
  const [wrong, setWrong] = useState(false)
  const id = String(challenge.id).padStart(2, '0')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const hash = await sha256(answer.trim().toLowerCase())
    if (hash === challenge.hash) {
      setWrong(false)
      markSolved(challenge.id)
    } else {
      setWrong(true)
    }
  }

  const state = solved ? ' solved' : locked ? ' locked' : ''
  return (
    <form className={`card challenge${state}`} onSubmit={submit}>
      <span className="card-label">
        CHALLENGE CARD{locked ? ' · LOCKED' : solved ? ' · SOLVED' : ''}
      </span>
      <h3>CHALLENGE_{id} // {challenge.title}</h3>
      <p className="muted">// TIER {challenge.id} CIPHERTEXT — {challenge.prompt}</p>
      <code className="ciphertext">{challenge.ciphertext}</code>
      <label className="prompt-input">
        <span>&gt;</span>
        <input
          value={solved ? 'ACCESS GRANTED' : answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="answer"
          disabled={locked || solved}
          autoComplete="off"
          spellCheck={false}
          aria-label={`Answer for challenge ${id}`}
        />
      </label>
      {wrong && <p className="error" role="alert">ACCESS DENIED</p>}
      {!locked && !solved && <p className="muted hint">// hint: {challenge.hint}</p>}
      <button type="submit" className="action" disabled={locked || solved}>
        [SUBMIT]
      </button>
    </form>
  )
}
