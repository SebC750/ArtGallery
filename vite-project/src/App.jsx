import { useState } from 'react'

import './App.css'
import Mainpage from "./Mainpage.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainpage></Mainpage>
      
    </>
  )
}

export default App
