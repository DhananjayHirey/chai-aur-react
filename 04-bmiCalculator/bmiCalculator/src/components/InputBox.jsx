import React from 'react'

export default function InputBox(props) {
  return (
    <>
    <div className='my-8 pb-4' >
        <div className='my-2 w-8/12 mx-auto text-left' >
            <label >{props.type=="weight"?"weight (kg)":"height (cm)"}</label>
        </div>
        <input className='w-8/12 mx-12 py-2 px-4 bg-slate-200 rounded-md drop-shadow-xl focus:drop-shadow-2xl' placeholder={`Enter your ${props.type}`} type='number' value={props.param} onChange={(e)=> props.onValueChange && props.onValueChange(Number(e.target.value))} /> 
    </div>
    </>
  )
}
