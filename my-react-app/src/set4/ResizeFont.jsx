import React, { useState } from 'react'

const ResizeFont = () => {

const[size,setSize]=useState(16)

const increaseFont=()=>{
  setSize(size+1)   
}
const decreaseFont=()=>{
  setSize(size-1)
}
  return (
    <div>
   <h2 style={{fontSize:`${size}px`}}>Heading</h2>

     <button onClick={increaseFont}>➕</button>
     <button onClick={decreaseFont}>➖</button>
    </div>
  )
}

export default ResizeFont