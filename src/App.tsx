import { useEffect, useState } from 'react'
import './App.css'
import EmoijList from './components/EmoijList'
import Layout from './layout/Layout'
import Search from './components/Searh'
import { setup } from './store/indexedDB'
import { useSearch } from './hooks/useSearch'

function App() {
  const [emoijs, setEmoijs] = useState({})
  const [searchRes, setSearchRes] = useState({})
  async function handleSearch(event: any) {
    const { value } = event.target
    const { getEmoijs, relativeSearchEmoij } = useSearch()
    const searchres = await getEmoijs(relativeSearchEmoij(value))
    setSearchRes(searchres)
  }
  useEffect(() => {
    const fn = async () => {
      return await fetch('../emoijs.json').then(response => response.json()).then(emos => setEmoijs(emos))
    }
    fn()
  }, [setEmoijs])

  useEffect(() => {
    setup(emoijs)
  }, [emoijs])

  return (
    <>
      <Layout>
        <Search handleSearch={handleSearch} />
        <EmoijList searchRes={searchRes} emoijs={emoijs} />
      </Layout >
    </>
  )
}

export default App
