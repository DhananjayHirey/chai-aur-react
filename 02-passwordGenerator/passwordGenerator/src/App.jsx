import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword] = useState("")
  const [btnText,setBtnText ] = useState("copy")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*()"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClip = useCallback((event)=>{
    setBtnText("copied!")
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center py-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-1'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 my-2 rounded-md' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none text-sm bg-blue-700 text-white px-3 py-0 shrink-0 mx-1 my-2 rounded-xl h-8' onClick={copyPasswordToClip}>{btnText}</button>
        </div>
        <div className='flex text-sm gap-x-2 py-3'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
              setBtnText("copy")

            }}
            />
            <label className='mx-1'>Length: {length}</label>

            <input
            type='checkbox'
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{
              setBtnText("copy")
              setNumAllowed((prev)=>!prev)
            }}
            />
            <label>Numbers</label>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={
              ()=>{
                setCharAllowed((prev)=>!prev)
                setBtnText("copy")
            }}
            />
            <label>Characters</label>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
