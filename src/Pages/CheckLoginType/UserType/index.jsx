import React from 'react'
import FilledButton from '../../../component/Buttons/FilledButton'
import styles from './index.module.css'
import {Link} from "react-router-dom"


const LoginUserType = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerDiv}>
        <div>
          <p className={styles.text}>Are you an Artist?</p>
          <Link to="/login" >
            <FilledButton text={"Sign in"}padding={"7px 20px"} cursor={'pointer'}  />
          </Link>
        </div>

        <hr />

        <div>
          <p className={styles.text}>Are you a Collector?</p>
          {/* <p className={styles.text}>We consider every user <br /> a prospective ArtCollector</p> */}

         <Link to="/login"> <FilledButton text={"Sign in"}padding={"7px 20px"} cursor={'pointer'}  /></Link>
        </div>
      </div>

      <div className={styles.signInContainer}>
        <p className={styles.account}>Don't have an Account? </p>
        <p className={styles.account}>Sign up</p>
      </div>
      
    </div>
  )
}

export default LoginUserType
