import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import profileContext from './main'

function App() {
  const [count,setCount]=useState(0)
  const profile = useContext(profileContext)
  const ref=useRef()

    const handleClick=()=>{
      setCount(count+1)
    }

    useEffect(()=>{
      console.log("hello")
    },[count])

    const handleRef=()=>{
      console.log(ref)
    }

  return (
    <>
      <h1>useState,useEffect</h1>
      <button onClick={handleClick}>+</button>
      <h1>{count}</h1>

      <hr></hr>
      <h1>useContext</h1>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
      <hr></hr>
      <h1>useRef</h1>
      <input type='text' ref={ref}></input>
      <button onClick={handleRef}>useRef</button>
    </>
  )
}

export default App

