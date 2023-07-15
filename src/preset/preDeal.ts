import path from 'node:path'
import fs from 'node:fs'
import { Buffer } from 'node:buffer'

export function preDeal() {
  const resource = loadResource()
  const codePoints = dealCodePoint(resource)
  const describes = dealSentence(resource)
  const emoijs = enhanceEmoijs(codePoints, describes)
  emoijToJson(emoijs)
  return emoijs
}

export function emoijToJson(emoijsMap: Map<any, any>) {
  const object = Object.create(null)
  for (const [key, value] of emoijsMap)
    object[key] = value
  const data = Buffer.from(JSON.stringify(object))
  fs.writeFileSync('emoijs.json', data, 'utf8')
}

export function enhanceEmoijs(codePoints: string[][], describes: string[]) {
  const emoijs = new Map()
  for (let i = 0; i < codePoints.length; i++) {
    const emoij = emoijs.get(describes[i]) === undefined ? [codePoints[i]] : [...emoijs.get(describes[i]), codePoints[i]]
    emoijs.set(describes[i], emoij)
  }
  return emoijs
}

export function loadResource() {
  const filePath = path.join(process.cwd(), '/src/assets/emoijs.txt')
  const resource = fs.readFileSync(filePath, 'utf-8')
  return resource
}

export function dealCodePoint(resource: string) {
  const RE = /^([0-9A-F]{4,5})( ([0-9A-F]{4,5})\b)*/gm
  const matchs = Array.from(resource.matchAll(RE))
  const enhanceMatchs = []
  for (const match of matchs)
    enhanceMatchs.push(match[0].split(' ').map(i => `0x${i}`))
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
