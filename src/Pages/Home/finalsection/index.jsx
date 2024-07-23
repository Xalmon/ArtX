import React from "react";
import styles from "./index.module.css"
import img from "../../../assests/images/ourBlog1.webp"
import img1 from "../../../assests/images/ourBlog2.webp"
import img2 from "../../../assests/images/ourBlog3.webp"
import img4 from "../../../assests/images/ourBlog4.png"

function Final(){
    return(
        <div className={styles.final}>
            <h1>Our Blog</h1>
            <div className={styles.section1}>
                <div>
                <img src={img} alt="stature" style={{ maxWidth: "74%", maxheight: "auto" }} />
                <p>11 Best NFT Conferences to Attend in 2024</p>
                </div>
                <div>
                <img src={img1} alt="stature" style={{ maxWidth: "74%", height: "auto" }} />
                <p>NFT Art Trends in 2023: What’s Hot and What’s Not </p>
                </div>
                <div>
                <img src={img2} alt="stature" style={{ maxWidth: "74%", height: "auto" }} />
                <p>Curating the Perfect NFT Art Collection: Expert Tips</p>
                </div>
            </div>   
            <div className={styles.section2}>
                <div className={styles.One}>
                <img src={img4} alt="stature" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className={styles.Two}>
                    <h1>
                    Stay informed and engaged with our expertly curated newsletter,
                    Digital Art Pulse.
                    </h1>
                    <p>
                    Digital art news
                    NFT art market analysis
                    Community highlights
                    Hot art picks
                    </p>
                    <button>beeehiiv</button>
                    <p>Subscribe to Digital Art Pulse and never miss a beat in the vibrant world of digital art.</p>
                </div>
            </div>
        </div>
    )
}

export default Final;