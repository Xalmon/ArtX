import React, { useState } from 'react'
import style from './index.module.css'
import image from "../../assets/images/naked.png"
import { Field, Form, Formik } from 'formik'
import { Box, Button, TextField, Typography,InputAdornment,IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Validation from "../../validation/validation"


const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => {
       setShowPassword(!showPassword);
     };
     const handleMouseDownPassword = (event) => {
       event.preventDefault();
     };
 
 
  return (
    <div className={style.main}>
        <div >
           <img className={style.image} src={image} alt="" />
        </div>
        <div className={style.second}>
            <h1 className={style.login}>LOGIN</h1>
         <div className={style.form}>
         <Formik >
            <Form  >
           <input className={style.paste} type="email" id="text" name="email" placeholder='Enter your email' required />

           <input className={style.paste} type={showPassword ? "text" : "password"}  id="text" name="password" placeholder='Enter a password' required  
           />
            <IconButton
                sx={{color:"black",position:"relative",right:"50px",fontSize:"2.5rem"}}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >  {showPassword ? <Visibility /> : <VisibilityOff />} </IconButton>
           <div>
           <select className={style.paste} type="text" id="text" name="text" placeholder='Enter your firstName' required >
           <option value={""}>Select a role to register as</option>
           <option value={"ROLE_COLLECTOR"}>ROLE_COLLECTOR</option>
           <option value={"ROLE_ARTSTUDIO_OWNER"}>ROLE_ARTSTUDIO_OWNER</option>
           </select>
            </div>
              
            <Button sx={{mt:5,fontSize:"2.5rem",backgroundColor:"rgb(68, 71, 70)", width:"400px",marginLeft:"32%",borderRadius:"5px",color:"white"}} fullWidth type='submit' variant='contained'>Login</Button>

            </Form>
</Formik>
         </div>

         <div  className={style.suggestion}>
            <h1>
               Don,t have an Account <span style={{color: "Brown", marginLeft: "40px"}}>Sign up </span> 
            </h1>
           </div>
           

        </div>
    </div>
  )
  
}

export default LoginPage