import { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import './App.css'
import profileContext from './main'
import SomeChlid from './SomeChild'

const reducer = (state: number, action: { type: string }) => {
  switch(action.type){
    case "increment":
      return state+1
    case "decrement":
      return state-1
    default:
      return state
  }
}

function App() {
  const [count,setCount]=useState(0)
  const profile = useContext(profileContext)
  const ref = useRef<HTMLInputElement>(null)
  const [state,dispatch] = useReducer(reducer,0)

    const handleClick=()=>{
      setCount(count+1)
    }

    useEffect(()=>{
      console.log("hello")
    },[count])

    const handleRef=()=>{
      console.log(ref)
      console.log(ref.current?.name)
      console.log(ref.current?.value)
    }

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const square =useMemo(() =>{
      let i = 0
      while(i<200000){
        i++
      }
      return count2*count2
    },[count2])

    const [counter,setCounter]=useState(0)

    const showCounts =() =>{
      alert("omoisyori")
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
      
      <hr></hr>
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      
      <hr></hr>
      <h1>useMemo</h1>
      <div>カウント１：{count1}</div>
      <div>カウント２：{count2}</div>
      <div>カウント結果：{square}</div>
      <button onClick={()=>setCount1(count1+1)}>+</button>
      <button onClick={()=>setCount2(count2+1)}>+</button>
      
      <hr></hr>
      <h1>useCallback</h1>
      <SomeChlid showCount={showCounts}></SomeChlid>
    </>
  )
}

export default App

