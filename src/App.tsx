import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [emoijs, setEmoijs] = useState<string>()
  const emoij = '\u{2755}'
  useEffect(() => {
    const fn = async () => {
      return await fetch('../src/assets/resource.txt').then(response => response.text()).then(text => setEmoijs(text))
    }
    fn()
  }, [])
  return (
    <>
      <div>
        𖹁
        {emoijs}
        {emoij}
      </div>
    </>
  )
}

export default App
