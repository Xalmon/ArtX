import React from 'react'
import style from "./profile.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {
    const handleLogOut=()=>{

    }
  return (
    <div className={style.user}>
        <div className={style.use}>
        <AccountCircleIcon sx={{fontSize:"25rem"}}/>
        </div>
        <div className={style.contain}>
            <h1 className={style.name}>
                Name: <span>Ikenna James</span>
            </h1 >
            <p className={style.name}>
              Email: <span> ikennajames03@gmail.com </span>
            </p>
            <p className={style.name}>
                Number: <span> 08149661102</span>
            </p>
            <Button variant='contained' onClick={handleLogOut} sx={{margin:"2rem 0rem",fontSize:"1.5rem"}}>Logout</Button>
        </div>


    </div>
  )
}

export default UserProfile