import React from 'react'
import FilledButton from '../../../component/Buttons/FilledButton'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const NewUserType = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerDiv}>
        <div>
          <p className={styles.text}>Are you an Artist?</p>
          <Link to="/register">
            <FilledButton text={"Sign up"}padding={"7px 20px"} cursor={'pointer'} />
          </Link>
          
        </div>

        <hr />

        <div>
          <p className={styles.text}>Are you a Collector?</p>
          <Link to="/registerCollector">
          <FilledButton text={"Sign up"}padding={"7px 20px"} cursor={'pointer'} />
          </Link>
        </div>
      </div>

      <div className={styles.signInContainer}>
        <p className={styles.account}>Have an Account? </p>
        <p className={styles.account}>Sign in</p>
      </div>
      
    </div>
  )
}

export default NewUserType;
