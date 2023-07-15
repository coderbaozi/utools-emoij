import { useEffect, useState } from 'react'
import './App.css'
import EmoijList from './components/EmoijList'
import Layout from './layout/Layout'
import Search from './components/Searh'
import { setup } from './store/indexedDB'

function App() {
  const [emoijs, setEmoijs] = useState({})
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
        <Search />
        <EmoijList emoijs={emoijs} />
      </Layout >
    </>
  )
}

export default App
