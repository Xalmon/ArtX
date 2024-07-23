import React from 'react'
import style from "./profile.module.css"
import OrderCard from './OrderCard'


const Orders = () => {
  return (
    <div className={style.ord}>
      <h1 className={style.my}>
          My Orders
      </h1>
      <div className={style.orderList}>
      {
            [1,1,1,1].map((item)=><OrderCard/>)
          }
        
      </div>

    </div>
  )
}

export default Orders