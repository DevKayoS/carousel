import { Carousel } from "./components/carousel";

const imageUrls: Array<string> = [
  "https://images.unsplash.com/photo-1532522750741-628fde798c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZnR3YXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
]

export function App() {
  return(
    <div className="flex items-center justify-center mt-20 flex-col">
      <h1 className="text-3xl font-bold">Carrosel</h1>
      <Carousel imageUrls={imageUrls}/>
    </div>
  )
}


