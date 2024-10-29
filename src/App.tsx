import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)

    const handleClick=()=>{
      setCount(count+1)
    }

    useEffect(()=>{
      console.log("hello")
    })

  return (
    <>
      <h1>useState,useEffect</h1>
      <button onClick={handleClick}>+</button>
      <h1>{count}</h1>
    </>
  )
}

export default App

