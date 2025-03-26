import React ,{useState} from 'react'

const Article = ({content,title}) => {

const [isVisible,setIsVisible]=useState(false)

const knowMore=()=>{
  setIsVisible(!isVisible)
}


  return (
    <div>
        <h1>{title}</h1>
       {isVisible && <p>{content}</p>} 
        <button onClick={knowMore}>know More</button>
    </div>
  )
}

export default Article