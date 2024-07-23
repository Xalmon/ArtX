import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';
import style from "./Cart.module.css"


const AddressCard = ({item,showButton,handleSelectAddress}) => {
  return (
    <Card className={style.address}>
      <div className={style.add}>
        <div style={{display:"flex",alignItems:"center",justifyContent: "item",textAlign:"center"}}>
      <HomeIcon sx={{fontSize:"2.5rem"}}/>
      <hi className={style.home}>Home</hi>
      </div>

      <p style={{fontSize:"2.0rem", width:"350px"}}>
                No 6 Wale yisa street off Igando Road,Lagos
            </p>

            { showButton && (<Button variant='outlined'  onClick={()=>handleSelectAddress(item)} sx={{fontSize:"1.8rem",marginLeft:"15px"}}>select</Button>)}

      </div>


    </Card>
  )
}

export default AddressCard