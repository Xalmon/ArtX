import React from 'react'
import Boy from "../../assets/images/boy.png"
import { IconButton} from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const CartItem = () => {
  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
            <img className='w-[8rem] h-[8rem] object-cover' src={Boy} alt="" />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
         <div className='space-y-1 lg:space-y-3 w-full'>
            <p className='pro text-4xl'>Biryani</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-1'>
                <IconButton>
              <RemoveCircleOutlineIcon sx={{fontSize:"2.5rem"}}/>
                </IconButton>
                <div className='w-5 h-5 flex items-center justify-center text-3xl'>
                    {1}
                </div>
                <IconButton>
              <AddCircleOutlineIcon sx={{fontSize:"2.5rem"}}/>
                </IconButton>
              </div>
              <p className='amount text-4xl'>
              ₦<span>22000</span>
              </p>
              
            </div>
         </div>
         <div>

         </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem