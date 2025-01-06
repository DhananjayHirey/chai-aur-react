import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './ImageSlider.css'

export default function ImageSlider({url,limit=5, page=1}) {
    const [images,setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading,setLoading] = useState(false)
    const [leftAnimating,setLeftAnimating] = useState(false)

    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if(data){
                setImages(data);
                setLoading(false)
            }

        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    function handlePrev(){
        setCurrentSlide(currentSlide===0?images.length-1:currentSlide-1)
        setLeftAnimating(true)
        setTimeout(()=>setLeftAnimating(false),1000)

    }

    function handleNext(){
        setCurrentSlide(currentSlide===images.length-1?0:currentSlide+1)
    }

    useEffect(()=>{
        if(url!=='')fetchImages(url)
    },[url])


if(loading){
    return <div>Loading data please wait</div>
}

if(errorMsg!==null){
    return <div>Error occured! {errorMsg}</div>
}
// console.log(images)

return (
    <div className='flex relative justify-center w-96 h-72 overflow-hidden' >
      <FontAwesomeIcon onClick={handlePrev} className='left-4 absolute bg-white cursor-pointer top-32 px-1 py-1 rounded-xl' icon={faArrowLeft} />
      {
        images && images.length?images.map((imageItem,index)=>(
            <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            id={index}
            className={currentSlide===index?"rounded-lg shadow-2xl shadow-black":"hidden"}
            />
        )):null
      }
      <FontAwesomeIcon onClick={handleNext} className='absolute bg-white right-4 cursor-pointer top-32 px-1 py-1 rounded-xl' icon={faArrowRight}/>
      <span className='rounded-xl flex absolute bottom-4 bg-transparent justify-center'>
        {
            images && images.length? 
            images.map((_,index)=><button
            key={index}
            id={index}
            className={currentSlide===index?"current-indicator mx-0.5":" mx-0.5 hide-current-indicator"}
            onClick={()=>{setCurrentSlide(index)}}
            ><FontAwesomeIcon className='h-2' icon={faCircle} style={{color:currentSlide===index?"white":"gray"}}/></button>) : null
        }
      </span>


      

    </div>
  )
}
