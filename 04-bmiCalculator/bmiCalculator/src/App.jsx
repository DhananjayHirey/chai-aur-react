import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [height, setHeight] = useState("")
  const [weight,setWeight] = useState("")
  const [bmi,setBMI] = useState(0)
  const [text,setText] = useState("")

  return (
    <>
      <div className='bg-slate-100 bg-opacity-95  max-w-md max-h-lg rounded-md mx-auto my-auto shadow-lg'>
        <p className='font-bold font-serif py-2' >BMI Calculator</p>
        <InputBox type="weight" onValueChange={(e)=>{setWeight(e)}} param = {weight}/>
        <InputBox type="height" onValueChange={(e)=>{setHeight(e)}} param = {height}/>

        <button className='bg-blue-500 rounded-md w-8/12 py-2 drop-shadow-2xl' onClick={()=>{
          setBMI(weight/((height/100)*(height/100)))
          setText(()=>{
            if( bmi>0 && bmi<18.5){
              return "you are underweight"
            }
            else if(bmi>=18.5 && bmi<24.9){
              return "you are normal weighted"
            }
            else if(bmi>=25.0 && bmi<29.9){
              return "you are overweight"
            }
            else if(bmi>=30.0 && bmi<34.9){
              return "you are obese class I"
            }
            else if(bmi>=35.0 && bmi<39.9){
              return "you are obese class II"
            }
            else if(bmi>=40){
              return "highly overweight"
            }
            else{
              return"--bas dua bacha sakti hai :("
            }
          })
          }} >Submit</button>
        <button className='bg-white rounded-md w-8/12 py-2 border-2 border-blue-500 mt-2 ' onClick={()=>{
          setBMI(0)
          setHeight("")
          setWeight("")
          setText("")
        }} >Reload</button>

        <div className='text-left px-2 w-8/12 mx-auto py-4' >Your BMI is:</div>
        <div>{bmi}</div>
        <div className='py-8' >{text}</div>
      </div>
    </>
  )
}

export default App
