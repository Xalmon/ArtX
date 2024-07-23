import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/index";
import Footer from "../component/Footer/index";

function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>

    )
}
export default Layout
