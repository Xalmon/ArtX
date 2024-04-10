import React from 'react'
import image from "../../assets/images/bronze.jpg"
import style from "./index.module.css"

const Footer = () => {
  return (
    <div className={style.main} >
        <div>
            <div style={{display:"flex",backgroundColor:"white",width:"300px"}}>
                <h1 className={style.art}>
                    ART
                </h1>
                <h1  className={style.exp}>
                    XPRESS
                </h1>
            </div>
        </div>
      
    </div>
  )
}

export default Footer