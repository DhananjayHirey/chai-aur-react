import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropDown from './components/DropDown'
import data from './assets/navBarData'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar data={data} />
    </>
  )
}

export default App
