import { Indicators } from "./indicators";
import { Slide } from "./slide";
import {useEffect, useState} from "react"
import {ChevronRight} from "lucide-react"  
import {ChevronLeft} from "lucide-react"  

interface CarouselProps {
  imageUrls: string[]
}

export function Carousel ({imageUrls}: CarouselProps){
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualChange, setManualChange] = useState(false)

  useEffect(() =>{
    const interval = setInterval(()=>{
      if(!manualChange) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
      }
      setManualChange(false)
    }, 5000)

    return () => clearInterval(interval)
  },[manualChange, imageUrls.length])

  const goPrev = () => {
    setManualChange(true)
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length)
  }

  const goNext = () => {
    setManualChange(true)
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
  }

  return(
    <div className="flex items-center justify-center w-full max-w-[800px] overflow-hidden relative m-auto">
      <div >
        {imageUrls.map((imagemURL, index)=> 
          <Slide key={index} image={imagemURL} isActive={activeIndex === index}/>
        )}
      </div>
     
        <Indicators activeIndex={activeIndex} length={imageUrls.length}/>
      
        <button className="absolute top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-slate-700/60 rounded-full p-3 cursor-pointer z-10 left-0"
        onClick={goPrev}
        ><ChevronLeft className="text-slate-50 "/>
        </button>
        <button className="absolute top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-slate-700/60 rounded-full p-3 cursor-pointer z-10 right-0"
        onClick={goNext}
        ><ChevronRight className="text-slate-50"/>
        </button>
      

    </div>
  )
}