import React from 'react'
import style from "./Main.module.css"
import OrderCard from './OrderCard'

const OrderContent = () => {
  return (
    <div id={style.main} className='flex items-center flex-col min-h-[85.5vh]'>
      <h1 className='text-4xl text-center py-7 font-extrabold text-gray-700'>
        My Orders
      </h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          [1,1,1,1].map((item)=><OrderCard/>)
        }

      </div>
      </div>
  )
}

export default OrderContent