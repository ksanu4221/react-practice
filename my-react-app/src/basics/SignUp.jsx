// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import LoginIcon from '@mui/icons-material/Login';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const[ErrorMessage,setErrorMessage]=useState(false)
//   const[isValid,setisValid]=useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Handle form submission logic here
//     if(formData.username === ""|| formData.email === ""|| formData.password === ""){
//           setErrorMessage(true)
//     }
//     else{
//       setErrorMessage(false)
//       setisValid(true)
//     }
//     alert("Signup successful!");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 5,
//           p: 3,
//           boxShadow: 3,
//           borderRadius: 2,
//           backgroundColor: "white",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Sign Up <span>
//             <LoginIcon />
//           </span>
//         </Typography>
//         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//           <TextField
//             label="Username"
//             name="username"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//             color="primary"
//             onClick={handleSubmit}
//             disabled={isValid}
//           >
//             Sign Up
//           </Button>        
//            {ErrorMessage &&<div style={{color:"red"}}>please enter your detail</div>} 

//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;
