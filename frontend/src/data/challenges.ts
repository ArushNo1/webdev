export interface Challenge {
  id: number
  title: string
  prompt: string
  ciphertext: string
  hint: string
  // sha256 of the lowercase, trimmed answer, so the answer is not in the bundle
  hash: string
  unlocks: string
}

export const challenges: Challenge[] = [
  {
    id: 1,
    title: 'SHIFTY',
    prompt: 'Old Roman trick. Find the password.',
    ciphertext: 'ymj ufxxbtwi nx wjlnxywd',
    hint: 'Each letter moved the same number of places. Try 5.',
    hash: '872491a30d60d598962de6e7b834ab76b2aa65fbab102c6ebaaae6acdc238822',
    unlocks: 'DOSSIER (more about me, on Home)',
  },
  {
    id: 2,
    title: 'LAYERS',
    prompt: 'Two layers deep.',
    ciphertext: 'qGuyIHBup3N3o3JxIGymIHBypaNcp3RyozNy',
    hint: 'Undo ROT13, then decode the result from base64.',
    hash: '0d2a4d0e13a3e16b10271e1c232bb38ac04943133f58c30f37475518018063dc',
    unlocks: 'CASE FILE 03 (hidden project)',
  },
  {
    id: 3,
    title: 'XOR GATE',
    prompt: 'Raw bytes. One key.',
    ciphertext: '5e 42 4f 0a 5a 4b 59 59 5d 45 58 4e 0a 43 59 0a 41 4f 58 44 4f 46',
    hint: 'Single-byte XOR, key 0x2a.',
    hash: '6923dd1bc0460082c5d55a831908c24a282860b7f1cd6c2b79cf1bc8857c639c',
    unlocks: 'CONTACT FORM (once you build it)',
  },
]
