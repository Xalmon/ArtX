import React from 'react'
import Layout from '../Layout'
import LandingPage from '../LandingPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
            element: <LandingPage/>,
            },
            {
                path: "/register",
            element: <RegisterPage/>,
            },
            {
                path: "/login",
                element: <LoginPage/>,

            }


        ]
    }

]
 

