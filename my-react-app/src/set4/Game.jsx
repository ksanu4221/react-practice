import React, { useState } from 'react'

const Game = () => {
    const [lives, setLives] = useState(3)
    
    const changeLive=()=>{
        setLives(lives-1)
    }
  return (
<>
   <div>
    <h2>{lives<1?"game Over":`Lives:${lives}`}   </h2>
    <button onClick={changeLive} disabled={lives<1?true:false}>Lose a Life</button>
   </div>
</>  )
}

export default Game