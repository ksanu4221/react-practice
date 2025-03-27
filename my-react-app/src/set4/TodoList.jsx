import React, { useState } from 'react'

const TodoList = () => {
    const[todoItems, setTodoItems]=useState([ {id: 1, task: "Writing 1-page poem", isDone: true},
        {id: 2, task: "Gym", isDone: false},
        {id: 3, task: "Shopping", isDone: false},
        {id: 4, task: "Standup call", isDone: true}])

      const markDone=(id)=>{
       const updatedItems= todoItems.map((item)=>item.id===id?
      {...item,isDone:!item.isDone}:item

     
    
    )
       setTodoItems(updatedItems)
    //    find return object where as filter return array
      }
      const removeItem=(id)=>{
           const filtered=todoItems.filter((item)=>item.id!==id)
           setTodoItems(filtered)
           
      }
  return (
<>
<h2>ToDo List</h2>
<div style={{display:'flex', justifyContent:'center', textAlign:'left'}}>
<ul>{ todoItems.map((item) =>
    <li key={item.id} style={{textDecoration: item.isDone ? "line-through" : "none", color: item.isDone ? "red" : "black"}}>{item.task} 
      <button onClick={()=>removeItem(item.id)} disabled={!item.isDone}>❌</button>
      <button onClick={() => markDone(item.id)}>{item.isDone ? "Mark as undone" : "Mark as done"}</button>
</li> )
}</ul></div>
</>  )
}

export default TodoList