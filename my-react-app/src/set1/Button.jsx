import React from 'react'

const Button = ({backgroundColor,color,padding,borderRadius}) => {
    // const {backgroundColor,color,padding,borderRadius}=props
  return (
    <div>


        <button style={{backgroundColor:backgroundColor,color:color,padding:padding,borderRadius:borderRadius}}>
            text</button>
    </div>
  )
}

export default Button