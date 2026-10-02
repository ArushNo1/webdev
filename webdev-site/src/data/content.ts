import type { Project } from '../components/ProjectCard'

export const profile = {
  name: 'Arush Bodla',
  tagline: 'I build security tools, play CTFs, and win the occasional hackathon.',
  about:
    'I build security tooling, mostly around catching what antivirus misses, and I compete in CTFs and hackathons. Next up: more systems-level security work and tools people actually use.',
  vitals: [
    ['HANDLE', 'ArushNo1'],
    ['FOCUS', 'security tooling, CTFs'],
    ['ARENA', 'Codeforces, hackathons'],
  ] as Array<[string, string]>,
}

export const projects: Project[] = [
  {
    name: 'RegiMon',
    tagline: 'Real-time Windows Registry monitor that catches in-memory persistence your antivirus misses.',
    problem: 'Antivirus misses in-memory registry persistence',
    approach: 'Watch the Windows Registry in real time',
    result: 'Persistence gets caught as it happens',
    github: 'https://github.com/ArushNo1/RegiMon',
  },
  {
    name: 'Nexus',
    tagline: "Multi-agent AI that turns a student's learning gap into a playable game.",
    problem: 'Students struggle to see their own learning gaps',
    approach: 'Multi-agent AI diagnoses the gap',
    result: 'The gap becomes a playable game',
    github: 'https://github.com/ArushNo1/nexus',
  },
]

// Unlocked by solving challenge 02
export const classifiedProject: Project = {
  name: '[REDACTED]',
  tagline: 'You found the hidden case file. Something new is in the works.',
  problem: 'Classified',
  approach: 'Classified',
  result: 'Stay tuned',
}

export const links: Array<[string, string]> = [
  ['GitHub', 'https://www.github.com/ArushNo1'],
  ['LinkedIn', 'https://www.linkedin.com/in/arushbodla'],
  ['Codeforces', 'https://codeforces.com/profile/ArushNo1'],
]

export const skills: Array<{ category: string; items: Array<[string, string?]> }> = [
  {
    category: 'SECURITY',
    items: [
      ['Registry forensics', 'RegiMon'],
      ['Persistence detection'],
      ['CTF problem solving', 'Codeforces'],
    ],
  },
  {
    category: 'BUILD',
    items: [
      ['Frontend', 'React, TypeScript'],
      ['Tooling', 'Vite'],
      ['Multi-agent AI', 'Nexus'],
    ],
  },
]
