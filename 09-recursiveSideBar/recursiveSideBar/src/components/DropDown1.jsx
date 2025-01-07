import React, { useState } from 'react'
import DropDown from './DropDown'


export default function DropDown1(props) {
    const [show,setShow] = useState(false)
    const handleClick = ()=>{
      show?setShow(false):setShow(true)
      
    }
  return (
    <>
    <div className='flex'> 
      <button  className={`w-full text-left py-1 text-white`} style={{paddingLeft:props.pad, borderWidth:"0px 0px 1px 0px", borderColor:show?"white":"black"}} onClick={handleClick} >{(props.data.children.length>0 &&show)?"-  ":"+  "}{props.data.title}</button>
    </div>
    {show && props.data.children.map((ele,index)=>(
        <DropDown key={index} data={ele} pad={Number(props.pad)+8}/>
    ))}
    </>
  )
}