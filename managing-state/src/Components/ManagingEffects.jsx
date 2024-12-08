import React, { useEffect, useState } from 'react'
import App from '../App'

const ManagingEffects = () => {
    const [count,setCount]=useState(0)
  useEffect(()=>{
    alert("Welcome UseEffect Is Running!")
  },[])
  useEffect(()=>{
    alert("Count Value Was Changed!")
  },[count])
    return (
    <div>
      <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default ManagingEffects
