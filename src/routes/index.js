import Layout from "../Layout/index"
import Home from "../Pages/Home/home"
import Marketplace from "../Pages/MarketPlace"
import SignIn from '../Pages/Login/index';
import AccessLayout from '../SignUpLoginLayout/index'
import CheckRegisterType from "../Pages/CheckRegisterType/index";
// import Form from '../Pages/Login/form/index'
import UserType from '../Pages/CheckLoginType/index'
import NewRegistration from '../Pages/Registration/index'
import NewCollectorRegistration from "../Pages/Registration/collectorForm/index.jsx";
import CollectorDashBoard from "../Pages/CollectorDashBoard/collectorDashBoard/index.jsx";
import UploadImage from "../Pages/CollectorDashBoard/uploadImage"
import CollectorProfile from "../Pages/CollectorDashBoard/collectorProfile/collectorProfile"
// import Profile from "../Pages/CollectorDashBoard/collectorProfile/collectorProfile";
import ArtistDetails from "../Pages/Artist/ArtistDetails"
import Profiles from "../Pages/Profile/Profile.jsx";
import Cart from "../Pages/Cart/Cart.jsx"
import HowItWork from "../Pages/HowItWorks/howitworks.jsx"
import Blog from "../Pages/Blog/blog.jsx"


export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "marketplace/",
                element: <Marketplace/>
            },
            {
                path: "/howitworks",
                element: <HowItWork/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
        ]
    },
    {
        path:"/",
        element: <AccessLayout/>,
        children: [
            {
                path: "/login",
                element: <SignIn/>
            },
            // {
            //     path: "",
            //     element: <Form/>
            // },
            {
                path: "/checkregistertype",
                element: <CheckRegisterType/>
            },
            {
                path: "/checklogintype",
                element:<UserType/>
            },
            {
                path: "/register",
                element: <NewRegistration/>
            },
            {
                path: "/registerCollector",
                element: <NewCollectorRegistration/>
            },
            {
                path: "/collectorDashBoard",
                element: <CollectorDashBoard/>
            },
            {
                path: "/uploadImage",
                element:<UploadImage/>
            },
            {
                path: "/collector-profile",
                element: <CollectorProfile/>
            },
            {
                path: "/artist-details",
                element: <ArtistDetails/>
            },
            {
                path: "/profiles/*",
                element: <Profiles/>

            },
            {
                path: "/cart",
                element: <Cart/>

            }
        ]
    },

 ]