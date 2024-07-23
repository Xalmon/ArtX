import React, { useState } from 'react'
import FilledButton from '../../../component/Buttons/FilledButton/index'

import {Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import styles from './index.module.css'

const LoginArtist = () => {
  const { login, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  console.log(email);
  console.log(password)
  
  const handleSubmit = (e) => {
    e.preventDefault()  

    const artistLogin = {
      email: email,
      password: password
    }

    console.log(artistLogin)

    fetch('http://localhost:8080/api/v1/artist/login', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body:JSON.stringify(artistLogin)

    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Registration failed. Please try again.');
      }
      return  response.json()
    })
    .then(data => {
      console.log(data)
      console.log(Object.keys(data.data[Object.keys(data.data)[0]]));
      if(data.data[Object.keys(data.data)[0]] >= 200 && data.data[Object.keys(data.data)[0]] < 300){
        setSuccessMsg("login successful");
      setTimeout(() => navigate('/collectorDashBoard'), 2000);
      setEmail('')
      setPassword('')
       
      }else{
        console.log(data)
        console.log(data.id)
        const userId = data.id;
        localStorage.setItem("userId", userId)
        console.log(userId)
      setErrMsg("Login Unsuccessful, Account does not exist.");
      setEmail('')
      setPassword('')
      setTimeout(() => setErrMsg(''), 5000);
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });



  } 

 




  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
             <div className={styles.logo}>
                  <p>Art<span>Xpress</span></p>
                </div>
        <h1>WELCOME BACK</h1>
       {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
       {errMsg && <p style={{ color: 'green' }}>{errMsg}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" name="email" placeholder='Email' required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" id="password" name="password" placeholder='Password' required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>


        {/* <FilledButton type={"submit"} text={"Login"} padding={"10px"} background={"#007bff"} color={"white"} borderRadius={"4px"} cursor={"pointer"}  */}
       

        <FilledButton type={"submit"} text={"Login"} padding={"12px 40px"} background={"black"} color={"white"} borderRadius={"4px"} cursor={"pointer"} fontSize={'15'}

        />  
      </form>
        <p>New user? <Link to="/registerCollector"><span>Sign up here</span></Link></p>
        </div>
    </div>
  )
}


export default LoginArtist
