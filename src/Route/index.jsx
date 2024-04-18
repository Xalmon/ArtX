import React,{ useState } from 'react'
import Layout from '../Layout'
import LandingPage from '../LandingPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Layouts from '../Layouts'
import AllSection from '../pages/Hero/AllSection'
import InnerLayout from '../InnerLayout'
import InnerAllSection from '../HeroTwo/InnerAllSection'
import NavbarLayout from '../NavbarLayout'
import SideBar from '../dashBoard/UserDashBoard/SideBar'
import SideBars from '../dashBoard/ArtstudioDashboard/SideBar'
import IconSideBars from '../dashBoard/ArtstudioDashboard/IconSideBars'
import IconSideBar from '../dashBoard/UserDashBoard/IconSideBar'
import ArtStudioDetails from '../HeroTwo/ArtStudio/UserViewArtStudio/ArtStudioDetails'



export const Routes = [

    {
        path: "/",
       element:<Layouts/>,
        children: [
           
            {
                path: "/",
                element: <AllSection/>
            },
          
        ]


    },
    {
        path: "/inner",
        element:<InnerLayout/>,
        children: [
           
            {
                path: "/inner",
                element: <InnerAllSection/>
            },
          
        ]


    },
    {
        path: "/user",
        element: <Layout/>,
        children: [
            {
                path: "/user/page",
            element: <LandingPage/>,
            },
            {
                path: "/user/register",
            element: <RegisterPage/>,
            },
            {
                path: "/user/login",
                element: <LoginPage/>,

            }


        ]
    },
    {
        
        path: "/",
        element:<NavbarLayout/>,
        children: [
           
            {
                path: "/dashboard",
                element: <SideBar/>
            },
            {
                path: "/iconSidebars",
                element: <IconSideBar/>
            },

            {
                path: "/artStudioDashboard",
                element: <SideBars/>
            },
            {
                path: "/iconSidebar",
                element: <IconSideBars/>
            },
            {
                path: "/artStudioDetails",
                element: <ArtStudioDetails/>
            },


          
        ]


    },

]
 

