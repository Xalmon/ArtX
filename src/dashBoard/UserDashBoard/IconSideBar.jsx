import React from 'react'
import { BsJustify , BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsBoxArrowInLeft, BsHeartFill, BsGeoAlt, BsCreditCard, BsBell, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";

const IconSideBar = () => {
    const navigate = useNavigate()
    return (
        <aside id={style.mainTwo}>
        <div style={{marginLeft: "30px",marginTop:"20px"}}>
          <BsJustify onClick={()=>navigate('/dashboard')} style={{color:"white", fontSize:"2.5rem"}}/>
        </div>
        <ul className={style.sidebar_list}>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsBagFill className={style.icons}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsHeartFill className={style.icons}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsGeoAlt className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsCreditCard className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsBell className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsCalendarEvent className={style.icons}/>  
                </a>
            </li>
    
        </ul>
        <div className={style.log}>
           <BsBoxArrowInLeft  className={style.icons}/> 
        </div>
        
    </aside>
      )
  
}

export default IconSideBar
