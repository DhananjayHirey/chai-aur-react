import React, { useState } from 'react'
import Card from './Card'

export default function CardGrid(props) {

  const [skip,setSkip] = useState(props.skp)
  const [data,setData] = useState([])
  const [itemCount,setItemCount] = useState(0)
  const [loading,setLoading] = useState(false)
  const [initialLoad,setInitialLoad] = useState(true)

  async function handleClick(){
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`).then(res=>res.json());      
      const newData = response.products
      for (let index = 0; index < newData.length; index++) {
        data.push(newData[index])
      }
      setData(data)
      setSkip(skip+10)
      setItemCount(data.length)
      setLoading(false)
  }

  if(initialLoad){
    handleClick()
    setInitialLoad(false)
  }


  return (
    <div>
      <div className='grid lg:grid-cols-5 sm:grid-cols-3' >

      {
        data.map((comp)=>(
          <Card key={comp.id} id={comp.id} title={comp.title} price={comp.price}/>
        ))
      }
      </div>
      <button className={`${itemCount===props.maxItemLimit?"text-slate-400 hover:bg-slate-200 ":"text-black hover:border-2 border-gray-500"} shadow-lg shadow-slate-300 bg-slate-200 px-2 py-1 rounded-md`} onClick={handleClick} disabled={itemCount===props.maxItemLimit}>{loading?"Loading Please Wait...":"Load More"}</button>
      <div className='text-sm my-4' >{itemCount===props.maxItemLimit?`Limit reached! ${itemCount} products rendered`:""}</div>

    </div>
  )
}
