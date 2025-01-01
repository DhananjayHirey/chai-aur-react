import starEmpty from '../assets/star-empty.png'
import starYellow from '../assets/star-yellow.png'
import React from 'react'

export default function Star(props) {
    const yellow = props.current>=props.id
    const hoverOn = ()=>{
        !props.clicked&&props.setCurrent(props.id)
    }
    const handleClick = ()=>{
        props.setCurrent(props.id)
        props.setClicked(true)
    }



  return (
      !yellow? <img src={starEmpty} alt="" className='h-8 mx-2' onMouseEnter={hoverOn}/>:<img src={starYellow} alt="" className='h-8 mx-2' onMouseEnter={hoverOn}  onClick={handleClick}/>
  )
}
