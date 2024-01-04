import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className="text-3xl font-bold underline">
      HelloTecky
    </h1>
    <marquee direction="ltr">Tailwind + React + Vite</marquee>
    </>
  )
}

export default App
