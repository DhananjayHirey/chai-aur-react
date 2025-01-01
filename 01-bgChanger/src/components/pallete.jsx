import React from 'react'


export default function pallete() {
    const changeCol = (event)=>{
        document.body.style.backgroundColor=event.target.value
    }
  return (
    <div className='w-full flex items-center bg-transparent text-green-950'>
      <button className='bg-red-600 text-black mx-5' onClick={changeCol} value="red">red</button>
      <button className='bg-yellow-400 text-black mx-5' onClick={changeCol} value="yellow">yellow</button>
      <button className='bg-green-500 text-black mx-5' onClick={changeCol} value="green">green</button>
      <button className='bg-blue-400 text-black mx-5' onClick={changeCol} value="blue">blue</button>
      <button className='bg-orange-500 text-black mx-5' onClick={changeCol} value="orange">orange</button>
    </div>
  )
}
