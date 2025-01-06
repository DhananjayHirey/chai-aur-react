import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './components/ImageSlider'


function App() {
  const [count, setCount] = useState(7)

  return (
    <>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={"8"} page={'1'}/>
      
    </>
  )
}

export default App
