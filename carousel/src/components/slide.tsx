interface SlideProps {
  image: string,
  isActive: boolean
}

export function Slide ({image, isActive}: SlideProps ){
  return(
    <div className="flex flex-row ">
      <div className={isActive ? "flex flex-row  items-center justify-center relative w-full  transition ease-in duration-300 " : "  ease-in duration-300 opacity-0 absolute flex flex-row  items-center justify-center transition-opacity"}>
        <img className="m-16 w-[800px]  rounded-md shadow-lg shadow-black" src={image}  />
      </div>
    </div>
  )
}