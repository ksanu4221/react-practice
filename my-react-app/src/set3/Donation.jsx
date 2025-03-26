import React from 'react'

const Donation = ({DonationData}) => {
 const totalAmount=   DonationData.reduce((acc,curr)=>acc+curr.Donation,0)

  return (
    <>   
     <div>Donation</div>
        
        <div>{`total donation ${totalAmount}` }</div>   
        
    </>
  )
}

export default Donation