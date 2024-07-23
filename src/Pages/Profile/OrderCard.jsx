import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import style from "./profile.module.css"
import image from "../../assests/images/captivating.webp"

const OrderCard = () => {
  return (
    <div>
        <Card className={style.order}>
            <div className={style.orders}>
                <img src={image} alt=""
                className={style.img}
                />
            </div>
            <div>
            
            <p className={style.life}>
                Contemporary Of Life
            </p>
            <p className={style.life}>₦<span>32000</span></p>
            </div>
            <div>
                <Button variant='contained' className='cursor-not-allowed' sx={{fontSize:"1.5rem"}}>Completed</Button>
            </div>
            <Divider/>
            <Divider/>

        </Card>
    </div>
  )
}

export default OrderCard