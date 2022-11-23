import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Soundboard } from './components/Soundboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Soundboard/>
    </div>
  )
}

export default App
