import React from 'react'

const Stationary = (props) => {
    const{items,Header}=props
    
  return (
    <div>
     <h3>{Header}</h3>
     <ol>{
        items.map((item)=><li>{item}</li>)
     }</ol>

    </div>
  )
}

export default Stationary