import React from 'react'
import { BsJustify , BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsBoxArrowInLeft, BsHeartFill, BsGeoAlt, BsCreditCard, BsBell, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";


const SideBar = () => {
    const navigate = useNavigate()
  return (
    <aside id={style.main}>
    <div style={{marginLeft: "30px",marginTop:"20px"}}>
      <BsJustify onClick={()=>navigate('/iconSidebars')} style={{color:"white", fontSize:"2.5rem"}}/>
    </div>
    <div className={style.info}>
        <h1>
            HELLO,
        </h1>
        <p>
            Michael
        </p>
        <h2>
            Welcome to your dashboard
        </h2>
    </div>
    <ul className={style.sidebar_list}>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsBagFill className={style.icon}/>  Orders
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsHeartFill className={style.icon}/>  Favorite
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsGeoAlt className={style.icon}/>  Address
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsCreditCard className={style.icon}/>  Payment
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsBell className={style.icon}/>  Notification
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsCalendarEvent className={style.icon}/>  Event
            </a>
        </li>

    </ul>
    <div className={style.log}>
       <BsBoxArrowInLeft  className={style.icon}/> Logout
    </div>
    
</aside>
  )
}

export default SideBar