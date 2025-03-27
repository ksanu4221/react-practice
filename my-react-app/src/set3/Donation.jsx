import React,{useState} from 'react'

const Donation = ({DonationData}) => {
 const totalAmount=   DonationData.reduce((acc,curr)=>acc+curr.Donation,0)
 const[size,setSize]=useState(16)

 const increaseFont=()=>{
        //   document.getElementsByClassName("Donation")[0].style.fontSize="30px"}
       setSize((pre)=>pre+1)
 }
  return (
    <>   
     <div className='Donation' style={{fontSize:`${size}px`}}>Donation</div>
        
        <div>{`total donation ${totalAmount}` }</div>   
       
        <div>this is font</div>
        <button onClick={increaseFont}>+</button>
        {/* <button onClick={decreaseFont}>-</button> */}
    </>
  )
}

export default Donation