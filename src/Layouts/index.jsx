import React from 'react'
import Navbar from '../component/Navbar'
import {Outlet} from "react-router-dom"

const Layouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default Layouts