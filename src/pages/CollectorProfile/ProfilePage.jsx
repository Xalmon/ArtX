import React from 'react'
import style from "./Profile.module.css"
import { Button } from '@mui/material'

const ProfilePage = () => {
    const handleLogout = () =>{

    }
  return (
    <div id={style.main} className='min-h-[85.5vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='py-5 text-7xl font-extrabold text-gray-700'>
            WELCOME TO YOUR DASHBOARD
        </h1>
        <h1 className='py-5 text-5xl font-extrabold text-gray-700'>
            ERIC JOHNSON
        </h1>
        <p className='text-3xl text-gray-700'>
            Email: ikennajames03@gmail.com
        </p>
         <p className='text-3xl text-gray-700'>
            Tel: 08149661102
         </p>
         <Button onClick={handleLogout} variant='contained' sx={{margin:"2rem 0rem",backgroundColor:"rgb(105, 105, 105)",fontSize:"1.7rem",color:"white"}}>Logout</Button>
      </div>
    </div>
  )
}

export default ProfilePage