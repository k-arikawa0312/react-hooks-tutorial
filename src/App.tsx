import { useContext, useEffect, useState } from 'react'
import './App.css'
import profileContext from './main'

function App() {
  const [count,setCount]=useState(0)
  const profile = useContext(profileContext)

    const handleClick=()=>{
      setCount(count+1)
    }

    useEffect(()=>{
      console.log("hello")
    },[count])

  return (
    <>
      <h1>useState,useEffect</h1>
      <button onClick={handleClick}>+</button>
      <h1>{count}</h1>

      <hr></hr>
      <h1>useContext</h1>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
    </>
  )
}

export default App

