import React, { useState } from 'react'

const UseState = () => {


// useState=== it is a hook provided by react ,it takes intial value and return array of
//  two element  .1. updated state 2 . a set function to update the state
// state is immutable in react
const [address,setAddress]=useState("bangalore")
// const[data,setdata]=useState([])

const chnageAdddress=()=>{
        address==="bangalore"?setAddress("mysuru"):setAddress("bangalore")

    console.log(address);
}
  return (
    <div>UseState

        <div>
            {address}
        </div>
        <button   onClick={chnageAdddress}>chnage address</button>
    </div>
  )
}

export default UseState