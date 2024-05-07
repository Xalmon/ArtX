import React from 'react'
import {Card,Button} from "@mui/material"
import image from "../../assets/images/boy.png"

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-7'>
        <div className='flex items-center space-x-5'>
          <img className='h-18 w-16' src={image} alt="" />
          <div>
            <p className='name text-white text-2xl'>BOY WONDER</p>
            <p className='price text-white text-2xl'>
            ₦ <span >23000</span>
            </p>
        </div>
       </div>
       <div>
          <Button className='cursor-not-allowed text-2xl' sx={{fontSize:"1.4rem"}}>Completed</Button>
       </div>
        
    </Card>
  )
}

export default OrderCard