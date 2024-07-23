import { Drawer } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Divider, useMediaQuery } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event'
import LogoutIcon from '@mui/icons-material/Logout'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import style from "./profile.module.css";

const menu = [
    {title:"Orders",icon:<ShoppingBagIcon/>},
    {title:"Favorite",icon:<FavoriteIcon/>},
    {title:"Address",icon:<AddReactionIcon/>},
    {title:"Payment",icon:<AccountBalanceWalletIcon/>},
   {title:"Notification",icon:<NotificationsActiveIcon/>},
    {title:"Event",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>}
  

]

const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)")
  const navigate = useNavigate();

  const handleNavigate=(item)=>{
    navigate(`/profiles/${item.title.toLowerCase()}`)
  }

  return (
    <div style={{backgroundColor: "black"}}>
        <Drawer
         variant={isSmallScreen ? "temporary" : "permanent"} 
         onClose={handleClose} 
         open={isSmallScreen ? open : true} 
         anchor="left" sx={{zIndex:5,position:"sticky",border:"1px solid white"}}
          
        >
            <div className={style.first}>
            {
                menu.map((item,i)=><>
                <div onClick={()=>handleNavigate(item)} className={style.second}> 
                {item.icon }
                <span style={{ fontSize: '2.2rem',marginLeft:"20px" }}>
                {item.title}
                </span>
                </div>
                    {i!== menu.length-1 && <Divider/>}
                </>)
            }
            </div>

        </Drawer>
    </div>
  )
}


export default ProfileNavigation