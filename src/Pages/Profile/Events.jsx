import React from 'react'
import EventCard from './EventCard'
import style from "./profile.module.css"


const Events = () => {
  return (
    <div className={style.event}>
      {[1,1].map((item)=><EventCard/>)}
    </div>
  )
}

export default Events