interface IndicatorsProps {
  activeIndex: number,
  length: number
}

export function Indicators ({activeIndex, length}: IndicatorsProps ){
  return(
    <div className="flex gap-2 absolute bottom-0 items-center justify-center m-auto">
      {Array.from({length}, (_, index) => (
        <div key={index} className={index  === activeIndex ? "size-4 bg-slate-300 rounded-full   flex justify-center items-center  " :  "size-4 bg-slate-950/60 rounded-full   flex justify-center items-center "}></div>
      ))}
    </div>
  )
}