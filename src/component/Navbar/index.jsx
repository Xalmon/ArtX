import React from 'react'
import style from "./index.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Button } from '@mui/material'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
    <div className={style.main}>
      <div className={style.logo}>
        <p>ART<span>XPRESS</span> </p>

      </div>
      <div className={style.contain}>
          <h1>
            HOME
          </h1>
          <h1>
            MARKETPLACE
          </h1>
          <h1>
            ARTISTS
          </h1>
          <h1>
            ABOUT
          </h1>
          <h1>
            BLOG
          </h1>
          <h1>
            EXHIBITION
          </h1>
        </div>
        <div style={{marginTop:"15px",marginRight:"100px",display:"flex",gap:"120px"}}>
          <div style={{marginTop:"40px"}}>
        <ShoppingCartIcon sx={{fontSize:"3.5rem",color:"rgb(68, 71, 70)",fontSize:"3.8rem",}}/>
        </div>
        
         
        <div style={{marginBottom:"20px",display:"flex",}}>
        <Button onClick={()=>navigate('/user/register')} sx={{mt:5,fontSize:"1.5rem",backgroundColor:"white", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "rgb(68, 71, 70)",}} fullWidth type='submit' variant='contained'>Sign Up</Button>
        <Button onClick={()=>navigate('/user/login')} sx={{mt:5,fontSize:"1.5rem",backgroundColor:"rgb(68, 71, 70)", width:"150px",borderRadius:"5px",border:"3px solid rgb(68, 71, 70)",boxShadow: "none",fontWeight:"1000",color: "white",marginLeft:"20px"}} fullWidth type='submit' variant='contained'>LOGIN</Button>
        </div>
        </div>
        </div>
        
        <div style={{backgroundColor:"rgb(68, 71, 70)",height:"20px",marginTop:"20px"}}>

        </div>
        </div>

        
  )
}

export default Navbar