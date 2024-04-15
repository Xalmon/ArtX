import React from 'react'
import { BsJustify ,BsUpload,BsClockHistory, BsLayers , BsBrush, BsGrid1X2Fill,BsInfoCircle, BsFillArchiveFill, BsBoxArrowInLeft, BsHeartFill, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";



const IconSideBar = () => {
    const navigate = useNavigate()
    return (
        <aside id={style.mainTwo}>
        <div style={{marginLeft: "40px",marginTop:"20px"}}>
          <BsJustify onClick={()=>navigate('/artStudioDashboard')} style={{color:"white", fontSize:"2.5rem"}}/>
        </div>
        <ul className={style.sidebar_list}>
        <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsGrid1X2Fill className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsUpload className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsBagFill className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    <  BsBrush className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsClockHistory className={style.icons}/>  
                </a>
            </li>
            
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    <  BsInfoCircle className={style.icons}/> 
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