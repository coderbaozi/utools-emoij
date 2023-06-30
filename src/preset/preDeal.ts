import path from 'node:path'
import fs from 'node:fs'

export function preDeal() {
  const resource = loadResource()
  const codePoints = dealCodePoint(resource)
  const describes = dealSentence(resource)
  return enhanceEmoijs(codePoints, describes)
}

export function enhanceEmoijs(codePoints: string[][], describes: string[]) {
  const emoijs = new Map()
  // merge
  for (let i = 0; i < codePoints.length; i++)
    emoijs.set(describes[i], codePoints[i])
  return emoijs
}

export function loadResource() {
  const filePath = path.join(process.cwd(), '/src/assets/resource.txt')
  const resource = fs.readFileSync(filePath, 'utf-8')
  return resource
}

export function dealCodePoint(resource: string) {
  const RE = /^([0-9A-F]{4,5})( ([0-9A-F]{4,5})\b)*/gm
  const matchs = Array.from(resource.matchAll(RE))
  const enhanceMatchs = []
  for (const match of matchs)
    enhanceMatchs.push(match[0].split(' '))
  return enhanceMatchs
}

export function dealSentence(resource: string) {
  const RE = /.*[E0-9]+\.\d (.*)[\r\n:]/gm
  const matchs = Array.from(resource.matchAll(RE))
  const enhanceMatchs = []
  for (const match of matchs)
    // TODO: hash to avoid key conflict
    enhanceMatchs.push(match[1])
  return enhanceMatchs
}
