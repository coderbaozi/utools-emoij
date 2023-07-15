import { useEffect, useState } from 'react'
import './App.css'
import EmoijList from './components/EmoijList'
import Layout from './layout/Layout'
import Search from './components/Searh'

function App() {
  const [emoijs, setEmoijs] = useState({})
  useEffect(() => {
    const fn = async () => {
      return await fetch('../emoijs.json').then(response => response.json()).then(emos => setEmoijs(emos))
    }
    fn()
  }, [])
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
