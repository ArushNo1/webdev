import { useState, type FormEvent } from 'react'
import { links } from '../data/content'

export default function Contact({ unlocked }: { unlocked: boolean }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value })

  // TODO(you): decide what "send" does. There is no backend and no email
  // address in this repo on purpose. Options to explore:
  //   - a form service (Formspree, Web3Forms) that POSTs to their endpoint
  //   - a serverless function that you call with fetch()
  //   - leave it out and rely on the links above
  // Whatever you pick, start by calling e.preventDefault() and reading `form`.
  function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <h2 className="page-title">CONTACT</h2>
      <div className="grid-2">
        <section className="panel">
          <h2>LINKS</h2>
          <ul className="link-list">
            {links.map(([label, href]) => (
              <li key={label}>
                ▸ <a href={href} target="_blank" rel="noreferrer">[ {label} ]</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="panel">
          <h2>SEND MESSAGE</h2>
          {unlocked ? (
            <form onSubmit={send} className="contact-form">
              <label className="prompt-input"><span>&gt; name:</span>
                <input required value={form.name} onChange={set('name')} /></label>
              <label className="prompt-input"><span>&gt; email:</span>
                <input required type="email" value={form.email} onChange={set('email')} /></label>
              <label className="prompt-input"><span>&gt; message:</span>
                <textarea required rows={4} value={form.message} onChange={set('message')} /></label>
              <button type="submit" className="action">[SEND →]</button>
            </form>
          ) : (
            <p className="muted">
              // DIRECT LINE ENCRYPTED. Solve CHALLENGE_03 to open it, or use the links.
            </p>
          )}
        </section>
      </div>
    </>
  )
}
