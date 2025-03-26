import React, { useEffect,useState } from 'react'

const Fetchdata = () => {

  const [userData,setUserData]=useState([])
   const fetchApiData=async()=>{
  try{
     const response=  await fetch("http://localhost:3000/data");
        const data=      await response.json()
        console.log(data);
        setUserData(data.products)
  }catch(error){
    console.log(error);
  }
}

   useEffect(()=>{
    fetchApiData()
   },[])
   console.log(userData);
  return (
    <>
     {
      userData.map((item)=>(
        <div>{item.name}</div>))
     }




    </>
  )
}

export default Fetchdata