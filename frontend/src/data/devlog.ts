export interface DevlogEntry {
  week: number
  title: string
  assignment: string
  goal: string
  challenges: string[]
  learned: string[]
  // How the work was done, including what was generated vs written by hand
  process: string[]
  links?: Array<[label: string, href: string]>
}

// Newest first. Wrap code in `backticks` and the page renders it as <code>.
export const devlog: DevlogEntry[] = [
  {
    week: 2,
    title: 'Intro to React',
    assignment: 'Build a sketch of a portfolio website and create a frontend for it.',
    goal:
      'A mini-version of my main portfolio with multiple pages, using a router hack or a router inside Vite so it is not just a single page.',
    challenges: [
      "I have no idea what I'm doing with this router thing. I'm stuck on writing a custom hook that routes between pages using the # part of the URL.",
      "I've only used Next.js's App Router before, and I've never built something in React without Tailwind, so styling by hand is a learning experience too.",
      "Some weird hash mismatch is happening betweeen my expected challenge answer and the answer that gets processed.",
      "I've never build a custom hook before, and now I need to use react's useSyncExternalStore hook to sync properly with localStorage.",
    ],
    learned: [
      'CSS selectors: how to target elements by type and location, and `::before`, which adds content to the start of an element.',
      'If you pass a function to `useState`, React only calls it on initialization. `useState(return5())` calls `return5()` on every render, while `useState(return5)` calls it once.',
      '`type X = typeof options[number]` turns the strings in an `as const` array into a string union type, which works like an enum: the value must be one of the array entries.',
      'What a string union actually is. I knew it before, but now I understand the type.',
      'How to test with bun, and how to test React code in general: `bun test`, writing tests, `expect()`.',
      'How to add types into tsconfig.app.json to make sure VSCode doesn\'t trip over bun:test',
      'What a callback actually is. How to specify types and datastructures, such as Sets of functions',
      'forEach syntax, iterators, and lambda syntax',
      'serializing/deserializing, actually getting why they\'re used.',
      'how the `useSyncExternalStorage()` hook works. It takes a function that has startup code, processes a "call me to render" function, and returns a destructor',
      'Claude code is surprisingly stubborn on using random niche functions',
      'how to use event listeners and the `window` variable to make tabs sync with each other when I solve a challenge',
    ],
    process: [
      'I am writing the routing logic myself.',
      'Testing files are created by me, as well as the hooks, but I used AI to build up some of the cases',
      'Claude Code generated most of the HTML and CSS, since it was just distilling down my main portfolio site.',
    ],
  },
  {
    week: 3,
    title: 'Advanced React',
    assignment: 'Build the frontend of the site',
    goal:
      'A mini-version of my main portfolio with multiple pages, using a router hack or a router inside Vite so it is not just a single page.',
    challenges: [
      "Turns out I did this week's assignment last week :P",
    ],
    learned: [
      'Read more carefully',
    ],
    process: [
      'Using fall break to catch up on other work',
    ],
  },
  {
    week: 5,
    title: 'Adding Backend',
    assignment: 'Create a backend for the site. ',
    goal:
      'Add in 3 HTTP endpoints using fastAPI to create a backend for the site.',
    challenges: [
      "pip is so so slow, especially over WSL -- I'm reinstalling using uv",
      "when I used uv, it messed up and deleted my entire backend folder",
    ],
    learned: [
      'pip install uvicorn[standard] means to install extra dependencies named standard',
    ],
    process: [
      'Using this to figure out structure: https://fastapi.tiangolo.com/tutorial/first-steps/',
    ],
  },
]
