import React from 'react'

export default function Card(props) {
  return (
    <div className='border-2 border-zinc-600 mx-2 my-2 rounded-md h-36 overflow-hidden hover:cursor-pointer hover:shadow-2xl hover: shadow-slate-800'>
        <div className='h-3/5 bg-gray-400'>

        </div>
        <div className='text-left '>
            <div className='flex '>
            <p className=' px-2 text-xs'>
            {props.id-10}. {props.title}
            </p>
            </div>
            <div className='text-right px-2 h-auto'>
                <p>${props.price}</p>
            </div>
                

        </div>

    </div>
  )
}
