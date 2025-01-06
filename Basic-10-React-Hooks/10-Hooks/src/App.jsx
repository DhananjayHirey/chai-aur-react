import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'

function App() {
  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(0)
  const [dark,setDark] = useState(false)

  const getItems = useCallback(()=>{
    return [number,number+1,number+2]
  },[number])
  const theme = dark?"bg-black text-white":"bg-white text-black"
  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Count is {count}</button>
      <div>
      <button className={theme} onClick={()=>setDark(!dark)} >Toggle Theme</button>
      </div>
      <div>
        <input 
        type="number" 
        value={number} 
        onChange={e=>setNumber(parseInt(e.target.value))}
        className='px-2 text-center text-lg mx-20 my-12 py-4 rounded-xl border-2 border-black'/>
      </div>
      <List getItems={getItems} />
    </>
  )
}

export default App
