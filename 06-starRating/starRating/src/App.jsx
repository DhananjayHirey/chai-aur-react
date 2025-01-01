import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Star from './components/star'
import React from 'react'

export default function App() {
  const star = ['1','2','3','4','5']
  const [current,setCurrent] = useState(-1)
  const [clicked,setClicked] = useState(false)
  const hoverOff = ()=>{
    !clicked&&setCurrent(-1)
  }

  const reload = ()=>{
    setClicked(false)
    setCurrent(-1)

  }

  return (
       

    <>
    <div className='flex flex-row mx-auto items-center justify-center w-4/12' onMouseLeave={hoverOff}>

    {
      
      star.map((st,index)=>(
        <Star key={index} id={index} current={current} setCurrent={setCurrent} setClicked={setClicked} clicked={clicked} />
      ))
    }

    </div>
    <div className='mt-8 px-4 py-4 w-5/12 mx-auto rounded-md bg-slate-200'>
      Your rating is {current+1}
    </div>
    <button id="reload"className= 'my-2 px-4 py-4 shadow-lg w-5/12 mx-auto rounded-md bg-slate-200' onClick={reload}> Reload</button>
    </>
  )
}


