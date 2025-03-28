import React,{useState} from 'react'

const Character = () => {
   const[char,setChar]=useState([])
    const characters ={   
        heroes: [{
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",       costume: "IRON MAN suit",
      },     {
        name: "ANT MAN",       powers: "Ant man suit",       costume: "Ant man suit",
      },     {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",       costume: "Spider Suit",
      },     {
        name: "Bat man",       powers: "Rich,Bat suit",       costume: "Bat Suit",
      },     {
        name: "Super-man",
        powers: "Superhuman strength,Reflexes,Speed",       costume: "Superman  Suit",
      },],  
       villains: [
      {
        name: "Thanos",
        powers: "Superhuman strength,Reflexes,Speed,",       costume: "Metal armor",
      },     {
        name: "Venom",
        powers: "shapeshifting and camouflage Symbiotes autonomous defense",       costume: "black suit",
      },     {
        name: "Kang the conqueror",
        powers: "time travel, can access all tech",       costume: "kang armor",
      },     {
        name: "Joker",
        powers: "clownlike appearance and sick humour",       costume: "Joker costume",
      },
    ],
  };
  const[title,setTitle]=useState("")
const showHeroes=()=>{
    setChar(characters.heroes)
    setTitle("Heroes")
}
const showVillains=()=>{
    setChar(characters.villains)
    setTitle("villains")
}
  return (
<>
<button onClick={showHeroes}>show hero</button>
<button onClick={showVillains}>show villain</button>
<h1>{title}</h1>
   {
    char.map((item)=><div >
        <h2>{item.name}</h2>
        <p>Powers:{item.powers}</p>
        <p>Costume:{item.costume}</p>
    </div>
    )
   }
</>
)
}

export default Character