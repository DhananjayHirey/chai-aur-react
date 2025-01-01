import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Element from './components/element'
import data from './data'


function App() {

  const [singleSelect,setSingleSelect] = useState(false)
  const [activeIndex,setActiveIndex] = useState(null)
  const toggleSelect = ()=>{
    setSingleSelect(!singleSelect)
    singleSelect?document.getElementById('singleSelect').style.backgroundColor="gray":document.getElementById('singleSelect').style.backgroundColor="#5cb85c"
  }



  return (
    <>
      <button id='singleSelect' className="mt-12 shadow-lg py-2 rounded-t-xl w-5/12 bg-gray-300" onClick={toggleSelect}>Single-Select </button>
    {
        data.map((dataItem)=>(
          <Element key={dataItem.id}
           id={dataItem.id} 
           title={dataItem.question} 
           content={dataItem.answer} 
           singleSelect={singleSelect}
           activeIndex={activeIndex}
           setActiveIndex={setActiveIndex}
           
           />
        ))
    }

    
    </>
  )
}

export default App
