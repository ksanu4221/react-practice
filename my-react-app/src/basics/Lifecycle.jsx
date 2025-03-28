import React, { useEffect,useState} from 'react'

const Lifecycle = () => {
// class based lifecycle==1.componentdidmount() 2.componentWillUpdate() 3.componentWillUnmount()

// functional based component lifecycle===useEffect
// for the first time when component is mounted to the dom ,then useeffect will run 
// and when we make changes in dependecy of optional array then component will be in updating phase
// and it will run again
// and when we remove the component from dom  ,then return statement of useEffect will run
const[name,setName]=useState("sanu")
useEffect(() => {
    console.log("Component is mounted");
    // unmounting phase
   return () => {
    console.log("Component is unmounted");
   
  };
    
}, []);


const changeName=()=>{
   setName(name==="sanu"?"kumar":"sanu")
}


  return (
<>
<div>{name}</div>

<button onClick={changeName}>change name</button>
</>  )
}

export default Lifecycle