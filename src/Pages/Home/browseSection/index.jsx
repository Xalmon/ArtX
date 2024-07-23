import React from "react";
import styles from "./index.module.css";
import img from "../../../assests/images/Beautiful black 38be7c4f-70c5-4adc-8970-28f5869b80a7 (11).png"
import img2 from "../../../assests/images/Beautiful black 3e90c8cc-25e7-4c7e-8f65-6b6aeca96410.png"
import img3 from "../../../assests/images/Beautiful black 4ad2e46a-789e-4505-9cdf-fb0daccb3759.png"
import img4 from "../../../assests/images/Beautiful black 768688e1-bf00-4a8e-a001-d010733f415e.png"


function Art(){
    return(
        <div className={styles.browse}>
            <div>
            <p className={styles.heading}>Gallery</p>
                    <div className={styles.artist}>
                        <img src={img} alt="stature" style={{ maxWidth: "20%", height: "auto" }} />
                        <img src={img2} alt="stature" style={{ maxWidth: "20%", height: "auto" }} />
                        <img src={img3} alt="stature" style={{ maxWidth: "20%", height: "auto" }} />
                        <img src={img4} alt="stature" style={{ maxWidth: "20%", height: "auto" }} />
                    </div>
            </div>
        </div>
    )
}

export default Art;