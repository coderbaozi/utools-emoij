import type { Table } from 'dexie'
import Dexie from 'dexie'

const db = new Dexie('emoijs')

db.version(1).stores({
  sets: '++id,desc,code',
})

const sets: Table = (db as any).sets

export async function setup(emoijs: any) {
  if (!await haveSets())
    saveEmoij(emoijs)
}

export function saveEmoij(data: any) {
  const keys = Object.keys(data)
  keys.map(key => sets.add({ desc: key, code: data[key] }))
}

export async function getKeys() {
  return await sets.orderBy('desc').keys()
}

export async function findEmoij(key: string) {
  return await sets.get({ desc: key })
}

export async function haveSets() {
  return await sets.count() > 0
}

export default db
