import React from 'react'
import {useState} from 'react'

export default function Element(props) {
    const [showDiv,setShowDiv] = useState(false)
    const [sign,setSign] = useState("+")
    const isActive = props.id===props.activeIndex

    const handleButtonClick = ()=>{
      sign=="+"?setSign("-"):setSign("+")
      if(props.singleSelect==false){
        if(showDiv==true){
          setShowDiv(false)
        }
        else{
          setShowDiv(true)
        }
      }
      else{
        props.setActiveIndex(isActive?null:props.id)
      }
        
      }

  return (
    <>
    <div className='flex mx-auto items-center w-5/12 rounded-md shadow-lg' >
      <button className='mx-4 my-1 w-6 text-center rounded-xl text-xl ' onClick={
        handleButtonClick
      } >{sign}</button>
      <div className='pe-5'>{props.title}</div>
    </div>
    {
       showDiv && 
    <div className='mx-auto items-center w-5/12 shadow-lg py-2 px-2 rounded-b-xl' >{props.content}
    </div>
    }
    {
      isActive && <div className='mx-auto items-center w-5/12 shadow-lg py-2 px-2 rounded-b-xl' >{props.content}
    </div>
    }
    </>
  )
}
