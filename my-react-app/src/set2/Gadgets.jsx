import React from 'react'

const Gadgets = ({ products }) => {

    return (

        <div>
          <ol>  {
                products.filter((item)=>item.name==="mobile")
                .map((item) => (
                    <li style={{border:(item.price>50000?"4px solid yellow":"")}}>
                        {item.name} - {item.price} - {item.description}
                    </li>
                )
                )
            }</ol>


        </div>
    )
}

export default Gadgets