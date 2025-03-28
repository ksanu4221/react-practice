import React, { useState } from 'react'

const FruitsVeg = () => {

    const[filteredItems,setFilterdItems] = useState([])
    const itemList = [
        { id: 1, name: "Apple", category: "Fruit" },
        { id: 2, name: "Carrot", category: "Vegetable" },
        { id: 3, name: "Banana", category: "Fruit" },
        { id: 4, name: "Broccoli", category: "Vegetable" }, ];
        
        const filterAll = () => {
            setFilterdItems(itemList)
        }
    
       const filterByVeggies = () => {
           const filteredVeggies =   itemList.filter((item) => item.category === 'Vegetable')
           setFilterdItems(filteredVeggies)
        }

        const filterByfruits = () => {
           const filteredFruits =   itemList.filter((item) => item.category === 'Fruit')
           setFilterdItems(filteredFruits)
        }
  return (
    <>
    <button onClick={filterAll}>ALL</button> 
    <button onClick={filterByfruits}>Fruit</button> 
    <button onClick={filterByVeggies}>Vegetable</button> 
     <ul>  {
        filteredItems.map((item) =><li style={{color:item.category==='Fruit'?'orange':'green'}}>
            {item.name} - {item.category}
        </li> )
       }
    
    </ul>
    
    </>
  )
}

export default FruitsVeg