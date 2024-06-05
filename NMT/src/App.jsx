import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-center font-bold text-4xl ">
          Hello tong
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </>
  )
}

export default App
