import React from 'react'

const ColorPicker = () => {
    const red = '#EE4B2B' 
    const blue = '#89CFF0' 
    const green = '#7FFFD4'
    // const[code,setCode]=useState('')

    const colorPicker=()=>{

    }
  return (
    <>
    <div>Color Picker</div>
    <button onClick={colorPicker}>RED</button>
    {`color-code: ${red}`}
    <button BLUE onClick={colorPicker}>BLUE</button>
    {`color-code: ${blue}`}
    <button onClick={colorPicker}>GREEN</button>
    {`color-code: ${green}`}
    </>
  )
}

export default ColorPicker