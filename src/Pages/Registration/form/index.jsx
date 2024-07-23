import React, { useState } from 'react';
import styles from './index.module.css';
import FilledButton from '../../../component/Buttons/FilledButton/index';
// import { useForm } from 'react-hook-form';
import { GiCheckMark } from "react-icons/gi";
import {Link} from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
import {BASE_URL} from "../../../Config/Config.js"
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useDispatch } from 'react-redux';

// import { Button, MenuItem, Select, TextField, Typography,InputLabel,FormControl,InputAdornment,IconButton   } from '@mui/material'
// import { Field, Form, Formik } from 'formik'
// import { registerArtist} from '../../../State/Authentication/Action';
// import Basic_url from "../../../Config/Config.js"
// import { RiUserFill, RiMailFill, RiLockPasswordFill } from 'react-icons/ri';



const Register = () => {







  const url = `${BASE_URL}/api/v1/artist/register`;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState();
  const [lga, setLga] = useState();
  const [address, setAddress] = useState();
  const [businessName, setBusinessName] = useState();
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
   
  // const navigate = useNavigate();
  console.log(password)
  console.log(phoneNumber)

  const handleSubmit = async (e) => {
    e.preventDefault();
 

  const registerArtist = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    bio: bio,
    phoneNumber: phoneNumber,
    state: state,
    lga: lga,
    address: address,
    businessName: businessName,

  };

console.log(url);

try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerArtist)
    }).then(res => res.json());
    
    console.log(response);
    console.log(response);
      if (response === 'Artist account created') {
      
        setRegistrationSuccess(true); 
       

      } else {
        setErrMsg('Registration failed. Please try again.'); 
      }
    } catch (error) {
      console.error('Error:', error);
      setErrMsg('Registration failed. Please try again.'); 
    } finally {
      setLoading(false);
    }
  
};
  return (
    <div className={styles.container}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="firstName" name="firstName"
          placeholder='Firstname' required 
           value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
           />

        <input type="text" id="lastName" name="lastName"
          placeholder='Lastname' required 
           value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            />

        <input type="email" id="email" name="email"
          placeholder='Email' required 
           value={email}
             onChange={(e) => setEmail(e.target.value)} 
          />

        <input type="password" id="password" name="password"
          placeholder='Password' required 
           value={password}
             onChange={(e) => setPassword(e.target.value)} 
            />

        <textarea id="bio" name="bio" rows="4"
          placeholder='Bio' 
           value={bio}
            onChange={(e) => setBio(e.target.value)}
            ></textarea>

        <input type="tel" id="phoneNumber" name="phoneNumber"
          placeholder='Phone Number' required
           value={phoneNumber}
             onChange={(e) => setPhoneNumber(e.target.value)} 
            />

        { <input type="text" id="state" name="state"
          placeholder='State' 
          value={state}
            onChange={(e) => setState(e.target.value)} 
            /> }

        {<input type="text" id="lga" name="lga"
          placeholder='L.g.a' 
          value={lga}
            onChange={(e) => setLga(e.target.value)} 
            /> }

        { <input type="text" id="address" name="address"
          placeholder='Address'
          value={address}
            onChange={(e) => setAddress(e.target.value)} 
          /> }

        { <input type="text" id="businessName" name="businessName"
          placeholder='Business Name' required
           value={businessName}
            onChange={(e) => setBusinessName(e.target.value)} 
          /> }

        {registrationSuccess && (
            <div className={styles.successPopup}>
                <GiCheckMark color={"green"} fontSize={'60px'} />
                <span className={styles.registrationSuccessMessage}>Registration Successful</span>
            </div>
        )}

        {/* {errors && <p style={{ color: 'red' }}>{errors}</p>}  */}

        <FilledButton
          type="submit"
          text={loading ? 'Registering...' : 'Register'}
          padding="12px 40px"
          borderRadius="4px"
          cursor="pointer"
          color="white"
          background="black"
          fontSize="15px"
          disabled={loading}
        />
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;
