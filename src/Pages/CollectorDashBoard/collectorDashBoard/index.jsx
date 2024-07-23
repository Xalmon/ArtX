import React, {useEffect, useState } from 'react';
import style from "./index.module.css";
import {Link} from "react-router-dom"
import { DashboardSidebar } from '../../../component/Sidebar';


// import Axios from  'axios' 

const CollectorDashBoard = () => {
     const [useData, setUseData] = useState('') 
     
    //  const [errMsg, setErrMsg] = useState('');
    //  const [successMsg, setSuccessMsg] = useState('');


     useEffect(() => {
        const id = localStorage.getItem('id'); 
        console.log(id)

        if(!id){
            console.error('User ID not found in localStorage');
            return;  
        }

        fetch("https://localhost:8080/api/users/collector/profile", {
         method: "GET",
         headers: {
            'Content-Type': 'application/json', 
            'id': id
         }   
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Failed to fetch user profile'); 
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data)
           setUseData(data.data.Order);
           const userName = document.getElementById("names")
           const email = document.getElementById("email")
           userName.innerHTML = data.data.Order.firstName
           email.innerHTML = data.data.Order.email

            console.log(data.data.Order)
        })
        .catch(error => {
            console.error('Error: ', error)
        });
     }, [])


     
     
   


    return (
        <div className={style.Collector_Dashboard_Main_Frame}>
            <DashboardSidebar/>
            <div className={style.main}>
            <div className={style.colour}>
                <input type="file"  className={style.inputs} />
            </div>
             <h1 className={style.name}>Name: <span id="names">""</span></h1>
             <div>
                <p className={style.email}>Email: <span id="email">""</span></p>
             </div>
             <div>
                <Link to="/uploadImage"><button>LogOut</button></Link>
             </div>
             </div>
        </div>
    );
}


export default CollectorDashBoard;