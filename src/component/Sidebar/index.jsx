import React from "react";
import style from './index.module.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function DashboardSidebar(){
    const navigate = useNavigate();

    function navigateTo(event){
        event.preventDefault()
        navigate(event.target.id)
    }

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            window.location.href = "/";
        }
    };

    return (
        <div className={style.Sidebar_Main_Frame}>
            <div className={style.Logo_Frame}>
                <div className={style.logo}>
                    <Link to="/">
                        <p>Art<span>Xpress</span></p>
                    </Link>
                </div>
            </div>
                
                <div className={style.Side_Bar_Frame_One}>
                    <button id="Dashboard" onClick={navigateTo} className={style.option}>
                        Dashbaord
                    </button>
                    <button id={"Profile"} className={style.option}>
                        <Link to="/collectorDashBoard">Profile</Link>
                    </button>
                    <button id={"Orders"} className={style.option}>
                        <Link to="/marketplace">Orders</Link>
                    </button>
                    <button id={"Payment"} onClick={navigateTo} className={style.option}>
                        <Link to="#">Payment</Link>
                    </button>
                    <button id={"Address"} onClick={navigateTo} className={style.option}>
                        <Link to="#">Address</Link>
                    </button>
                    <button id={"Notification"} onClick={navigateTo} className={style.option}>
                        <Link to="#">Notification</Link>
                    </button>
                    <button id={"Event"} className={style.option}>
                        <Link to="/artist-details">Event</Link>
                    </button>
                </div>
                
                
                <div className={style.Side_Bar_Frame_Two}>
                    <button id={'Settings'} className={style.option}>
                        <Link to="#">Settings</Link>
                    </button>
                    <button id={'Logout'} className={style.option} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
        </div>
    )
}
