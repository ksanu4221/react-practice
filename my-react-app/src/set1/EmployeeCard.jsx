import React from 'react'

const EmployeeCard = (props) => {

  return (
    <div>
            <div style={{color:"green"}}>{props.name}</div>
            <div style={{color:"red"}}>{props.designation}</div>
            <div>{props.experience}</div>
    </div>
  )
}

export default EmployeeCard