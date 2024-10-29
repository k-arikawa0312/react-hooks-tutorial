import React, { useEffect, useState } from 'react'

const useLocalStorage = (key:string,defauleValue:number) => {
    const [value,setValue]= useState(()=>{
        const jsonValue=window.localStorage.getItem(key)
        if (jsonValue!==null) return JSON.parse(jsonValue)

        return defauleValue
    })
    
            useEffect(()=>{
                window.localStorage.setItem(key,JSON.stringify(value))
            },[value])
    return (
    <div>
      
    </div>
  )
}

export default useLocalStorage
