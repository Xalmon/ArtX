import React from 'react'
import style from "./Cart.module.css"
import image from "../../assests/images/captivating.webp"
import { Chip, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
  return (
    <div className={style.main}>
      <div class={style.section}>
        <div>
          <img className={style.img} src={image} alt="" />
          </div>
     
      <div className={style.second}>
        <div className={style.third}>
        <p style={{fontSize: "30px"}}>Contemporary</p>
        <div className={style.forth}>
          <div className={style.fifth}>

          <IconButton >
            <RemoveCircleOutlineIcon sx={{fontSize:"2.5rem"}}/>
            </IconButton> 
            <div className={style.number} style={{fontSize: "2.5rem"}}>
                {5}
            </div>
            <IconButton>
            <AddCircleOutlineIcon sx={{fontSize:"2.5rem"}}/>
          </IconButton> 

          </div>

        </div>
        </div>
        <p className={style.number}  style={{fontSize: "2.5rem"}}>₦<span>5000</span></p>

    </div>
    </div>
    <div>
    <div className={style.list}>
        {[1,1,1,].map((item)=><Chip label={"Paint drawing"} sx={{fontSize:"1.5rem"}}/>)}

        </div>
    </div>

    </div>
  )
}

export default CartItem