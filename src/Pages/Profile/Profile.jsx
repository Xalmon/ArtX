import React, { useState }  from 'react'
import style from "./profile.module.css"
import ProfileNavigation from "./ProfileNavigation.jsx"
import UserProfile from './UserProfile'
import Orders from './Orders'
import Address from './Address'
import Events from './Events'
import Favorites from './Favorites'
import { Route, Routes } from 'react-router-dom'

const Profile = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className={style.main}>
        <div className={style.section}>
        <ProfileNavigation open={openSideBar}/>

        </div>
        <div className={style.route}>
          <Routes>
            <Route path='/' element={<UserProfile/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/address' element={<Address/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='/event' element={<Events/>}/>
          </Routes>
        </div>

    </div>
  )
}

export default Profile