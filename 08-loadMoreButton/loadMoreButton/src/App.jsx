import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardGrid from './components/CardGrid'

function App() {
  

  return (
    <>
      <CardGrid skp={10} maxItemLimit={40} />
    </>
  )
}

export default App
