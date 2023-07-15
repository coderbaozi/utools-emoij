import { Fzf } from 'fzf'
import { findEmoij, getKeys } from '~/store/indexedDB'

const fzf = new Fzf([...new Set(await getKeys())])

export function useSearch() {
  const relativeSearchEmoij = (content: string) => {
    return fzf.find(content)
  }
  // TODO: add type
  const getEmoijs = async (keys) => {
    const res: Record<string, any> = {}
    for (const key of keys)
      res[key.item] = await findEmoij(key.item)
    return res
  }

  return { relativeSearchEmoij, getEmoijs }
}
