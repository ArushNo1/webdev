import { devlog, type DevlogEntry } from '../data/devlog'

// Odd-indexed pieces of a backtick-split string are the code spans
function Text({ children }: { children: string }) {
  return (
    <>
      {children.split('`').map((part, i) =>
        i % 2 ? <code key={i}>{part}</code> : part,
      )}
    </>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="devlog-section">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Text>{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Entry({ entry }: { entry: DevlogEntry }) {
  return (
    <article className="panel devlog-entry">
      <span className="card-label">WEEK {String(entry.week).padStart(2, '0')}</span>
      <h3>{entry.title}</h3>

      <dl className="devlog-brief">
        <dt>ASSIGNMENT</dt>
        <dd>{entry.assignment}</dd>
        <dt>GOAL</dt>
        <dd>{entry.goal}</dd>
      </dl>

      <Section title="CHALLENGES" items={entry.challenges} />
      <Section title="LEARNED" items={entry.learned} />
      <Section title="PROCESS" items={entry.process} />

      {entry.links && (
        <p className="devlog-links">
          {entry.links.map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              [ {label} ]
            </a>
          ))}
        </p>
      )}
    </article>
  )
}

export default function Devlog() {
  return (
    <>
      <div className="title-row">
        <h2 className="page-title">DEVLOG</h2>
        <span className="muted">{devlog.length} ENTRIES, NEWEST FIRST</span>
      </div>
      {devlog.map((entry) => (
        <Entry key={entry.week} entry={entry} />
      ))}
    </>
  )
}
