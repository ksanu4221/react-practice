import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
// const[username,setUsername]=useState('')
// const[password,setPassword]=useState('')
// const[email,setEmail]=useState('')
const[formdata,setFormdata]=useState({
   username:'',
   password:'',
   email:''
})


const handleChange=(e)=>{
    
   setFormdata({
      ...formdata,[e.target.name]:e.target.value
   })
}
const handleSubmit=(e)=>{
   e.preventDefault()
   console.log(formdata)
   axios.post("http://localhost:3000/data",formdata)
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
}
return (
<>
<form>
   <div>
     <label for='username' >UserName</label>
      <input type='text' id='username' name='username'  placeholder='enter username' onChange={handleChange}/>
   </div>
   <div>
     <label for='password'>Password</label>
      <input type='password' id='password' name='password'  placeholder='enter password' onChange={handleChange}/>
   </div>
   <div>
      <label for='email'>Email</label>
      <input type='email' id='email' name='email'  placeholder='enter email' onChange={handleChange}/>
   </div>
   <button  onClick={handleSubmit}>login</button>

</form>
<div>
   <p>username:{formdata.username}</p>
   <p>password:{formdata.password}</p>
   <p>email:{formdata.email}</p>
</div>
</>
)
}

export default Form