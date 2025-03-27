import React from 'react'

const Cartoon = ({cartoons,superpower}) => {


  return (
    <>
    
    {cartoons.filter((cartoon)=>cartoon.superpower===superpower).
    map((item)=><h1>{item.name}-{item.superpower}-{item.magnitude}</h1>)}
    
    
    </>
  )
}

export default Cartoon
