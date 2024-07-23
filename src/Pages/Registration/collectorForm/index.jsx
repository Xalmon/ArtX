import React, {useState} from 'react';
import styles from './index.module.css';
import FilledButton from '../../../component/Buttons/FilledButton/index';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from "../../../Config/Config.js"
import { RiUserFill, RiMailFill, RiLockPasswordFill, RiPhoneFill } from 'react-icons/ri';



const CollectorRegister = () => {
  // const {register, watch, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [stateProvince, setStateProvince] = useState();
  // const [city, setCity] = useState();
  // const [streetAddress, setStreetAddress] = useState();
  // const [country, setCountry]= useState();
  // const [postalCode, setPostalCode] = useState();

  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  

  console.log(password)
  console.log(phoneNumber)

  const handleSubmit = (e) => {
    e.preventDefault()
  

  const registerCollector = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    // stateProvince: stateProvince,
    // city: city,
    // country: country,
    // streetAddress: streetAddress,
    // postalCode: postalCode
  };

  console.log(registerCollector)

  fetch(`${BASE_URL}/api/v1/collector/register` ,{
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body:JSON.stringify(registerCollector)
  })
  .then(response => response.json())
  .then(data => {
    
    //   console.log(id)
    //   localStorage.setItem("id", id)
    //  const id = data.data.collector.id
      console.log(data);
    if(data.ErrorMessage ==="Email already exist"){
      console.log(data)
      setEmail('');
      setErrMsg("Email Already Exist! Email must be unique");
      setTimeout(() => setErrMsg(''), 4000);
    }else{
    setSuccessMsg("To complete your user registration, a confirmation email has been sent to verify your account. Please check your email inbox.")
    // setSuccessMsg("To complete your user registration, a confirmation email has been sent to verify your account. Please check your email inbox.")
     setTimeout(() => navigate('/'), 6000);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      // setStateProvince('');
      // setCity('');
      // setStreetAddress('');
      // setCountry('');
      // setPostalCode('');
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
              <h1>WELCOME</h1>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputWithIcon}>
                  <RiUserFill className={styles.icon} />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder='Firstname'
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={styles.inputWithIcon}>
                  <RiUserFill className={styles.icon} />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder='Lastname'
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className={styles.inputWithIcon}>
                  <RiMailFill className={styles.icon} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputWithIcon}>
                  <RiLockPasswordFill className={styles.icon} />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.inputWithIcon}>
                  <RiPhoneFill className={styles.icon} />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='Phone Number'
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <FilledButton
                  type="submit"
                  text={"Register"}
                  padding={"10px 20px"}
                  borderRadius={"4px"}
                  cursor={"pointer"}
                  color={'white'}
                  background={"black"}
                />
              </form>
              {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
              {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
              <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
          </div>
  )
}

export default CollectorRegister

