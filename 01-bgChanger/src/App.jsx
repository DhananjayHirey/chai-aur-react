import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pallete from './components/pallete'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pallete/>
    </>
  )
}

export default App
