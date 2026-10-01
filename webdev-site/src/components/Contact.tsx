const links: Array<[string, string]> = [
  ['GitHub', 'https://www.github.com/ArushNo1'],
  ['LinkedIn', 'https://www.linkedin.com/in/arushbodla'],
  ['Codeforces', 'https://codeforces.com/profile/ArushNo1'],
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div>
        {links.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
