import React from 'react'
import style from "./index.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useNavigate } from "react-router-dom";
import { IconButton, Avatar, Badge  } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const Navbar = () => {
  // const navigate = useNavigate()
  return (
    <div>
    <div className={style.main}>
    <div style={{display:"flex",backgroundColor:"white",width:"320px",padding:"20px",marginTop:"30px",marginLeft:"50px"}}>
                <h1 className={style.art}>
                    ART
                </h1>
                <h1  className={style.exp}>
                    XPRESS
                </h1>
            </div>
      <div className={style.contain}>
          <h1 style={{cursor:"pointer"}}>
            HOME
          </h1>
          <h1 style={{cursor:"pointer"}}>
            MARKETPLACE
          </h1>
          <h1 style={{cursor:"pointer"}}>
            ARTISTS
          </h1>
          <h1 style={{cursor:"pointer"}}>
            ABOUT
          </h1>
          <h1 style={{cursor:"pointer"}}>
            BLOG
          </h1>
          <h1 style={{cursor:"pointer"}}>
            EXHIBITION
          </h1>
        </div>
        <div style={{marginTop:"15px",marginRight:"100px",display:"flex",gap:"60px"}}>
        
        <div style={{marginTop:"35px"}}>
        <IconButton>
            <SearchIcon sx={{fontSize:"2.8rem"}}/>
          </IconButton>
        </div>
        <p className={style.dash}>
            DashBoard
          </p>
        <div style={{marginTop:"45px"}}>
        <Avatar style={{backgroundColor:"black",fontSize:"1.9rem",color:"pink"}}>A</Avatar>
        </div>
          <div style={{marginTop:"30px"}}>
            <IconButton>
                <Badge color='secondary' badgeContent={3} overlap="circular" style={{ fontSize: "2rem" }}>
                <ShoppingCartIcon sx={{color:"rgb(68, 71, 70)",fontSize:"3.8rem",}}/>
                </Badge>
        </IconButton>
        </div>
        </div>
        </div>
        
        <div style={{backgroundColor:"rgb(68, 71, 70)",height:"20px",marginTop:"20px"}}>

        </div>
        </div>

        
  )
}

export default Navbar