import React,{useEffect, useState} from 'react'
import axios from 'axios'

const FetchProduct = () => {
const[products,setProducts]=useState([])
// const [filteredProducts,setFilteredProducts]=useState([])
const fetchData=async()=>{
    //  fetch(),axios() always returns promise,then it should be handle by .then.catch or by async await
    
    // axios.get("http://localhost:3000/data").then((res)=>{
    //     console.log(res.data.products)
    //     setProducts(res.data.products)
    // })
    // .catch((err)=>console.log(err))
    
        try{const response=   await   axios.get("http://localhost:3000/data")
          console.log(response.data.products)
          setProducts(response.data.products)
        }
          catch(err)
          {console.log(err)

          }
          
}
useEffect(()=>{
    fetchData()
},[])

console.log(products);

const filterByQuantity=()=>{
   setProducts(products.filter((product)=>product.quantity>20))   
}
const filterByPrice=()=>{
    setProducts(products.filter((product)=>product.price>100))
}

  return (
    <div>
        <h2>PRODUCTS LIST</h2>
       <ol> 
        {
            products.map((product,index)=><li key={index}> Name: {product.name} , Price: {product.price} ,quantity: {product.quantity}</li>)
        }
        </ol>

        <button onClick={filterByQuantity}>show product with quantity more than 20</button>
        <button onClick={filterByPrice}>filter by price </button>
    </div>
  )
}

export default FetchProduct