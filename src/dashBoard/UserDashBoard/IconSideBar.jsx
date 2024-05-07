import React,{ useState } from 'react'
import { BsJustify , BsBoxArrowInLeft, BsHeartFill, BsGeoAlt, BsCreditCard, BsBell, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";
import OrderContent from "../CollectorSidebarList/OrderContent.jsx"
import ProfilePage from '../../pages/CollectorProfile/ProfilePage.jsx';
import Favorites from '../CollectorSidebarList/Favorites.jsx';
import Event from '../CollectorSidebarList/Event.jsx';




const IconSideBar = () => {
    const navigate = useNavigate()

    const [selectedContent, setSelectedContent] = useState(null);

    const handleItemClick = (content) => {
        setSelectedContent(content);
    };

    return (
        <div>
             {selectedContent === null && ( 
                <div >
                    <ProfilePage/>
                </div>
            )}
        <aside id={style.mainTwo}>
        <div style={{marginLeft: "30px",marginTop:"20px"}}>
          <BsJustify onClick={()=>navigate('/dashboard')} style={{color:"white", fontSize:"2.5rem"}}/>
        </div>
        <ul className={style.sidebar_list}>
            <li className={style.sidebar_list_item}>
                <a href="orders" className={style.a}  onClick={(e) => { e.preventDefault(); handleItemClick('orders'); }}>
                    < BsBagFill className={style.icons}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="favorites" className={style.a}>
                    < BsHeartFill className={style.icons} onClick={(e) => { e.preventDefault(); handleItemClick('favorites'); }}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="address" className={style.a}>
                    < BsGeoAlt className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="payment" className={style.a}>
                    < BsCreditCard className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="notification" className={style.a}>
                    < BsBell className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="order" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('event') }} >
                    < BsCalendarEvent className={style.icons}/>  
                </a>
            </li>
    
        </ul>
        <div className={style.log}>
           <BsBoxArrowInLeft  className={style.icons}/> 
        </div>
        
    </aside>
    <div className={style.content}>
                {selectedContent === 'orders' && <OrderContent />}
                {selectedContent === 'favorites' && <Favorites/>}
                {selectedContent === 'event' && <Event/>}
               
            </div>
    </div>

      )
  
}

export default IconSideBar
