import React from 'react'
import DropDown from './DropDown'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
export default function NavBar(props) {

  return (
    <>
    <div className='relative w-3/12 mx-0 bg-black px-4 h-full py-4 text-left'>

    {props.data.map((ele,index)=>(
        <DropDown key={index} data={ele} pad={Number(0)}/>
    ))}
    </div>
    </>
  )
}
