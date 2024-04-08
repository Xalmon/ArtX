import React from 'react'
import Layout from '../Layout'
import LandingPage from '../LandingPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Layouts from '../Layouts'
import AllSection from '../pages/Hero/AllSection'

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
    }

]
 

