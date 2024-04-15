import React from 'react'
import { BsJustify ,BsUpload,BsClockHistory, BsLayers , BsBrush, BsGrid1X2Fill,BsInfoCircle, BsFillArchiveFill, BsBoxArrowInLeft, BsHeartFill, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";


const SideBar = () => {

    const navigate = useNavigate()

  return (
    <aside id={style.main}>
    <div style={{marginLeft: "30px",marginTop:"20px"}}>
      <BsJustify onClick={()=>navigate('/iconSidebar')} style={{color:"white", fontSize:"2.5rem"}}/>
    </div>
    <div className={style.info}>
        <h1>
            HELLO,
        </h1>
        <p>
            Michael
        </p>
        <h2>
            Welcome to your ArtStudio dashboard
        </h2>
    </div>
    <ul className={style.sidebar_list}>
    <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsGrid1X2Fill className={style.icon}/>  DashBoard
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsUpload className={style.icon}/>  Artwork
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsBagFill className={style.icon}/>  Orders
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                <  BsBrush className={style.icon}/>  Artwork Category
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsClockHistory className={style.icon}/>  Sales History
            </a>
        </li>
        
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                <  BsInfoCircle className={style.icon}/>  Details
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