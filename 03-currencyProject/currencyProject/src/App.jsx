import { useState } from 'react'
import { InputBox } from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div>
        <InputBox label="from" amount={amount} currencyOption={options} onCurrencyChange={(currency)=>{setFrom(currency)}}
      onAmountChange={(amount)=>{setAmount(amount)}}
      selectCurrency={from} />
      </div>
      <div className='my-2'>
        <InputBox label="to" amount={convertedAmount} currencyOption={options} onCurrencyChange={(currency)=>{setTo(currency)}}
        selectCurrency={to} amountDisable />
      </div>
        <button className=' max-w-56 px-10 py-2 bg-blue-400 rounded-xl shadow-inner outline-black-900' onClick={swap} >Swap</button>
        <button className=' mx-2 max-w-56 px-10 py-2 bg-blue-400 rounded-xl shadow-inner outline-black-900' onClick={convert}>Convert</button>
    </>
  )
}

export default App
