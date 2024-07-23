import React from "react";
import styles from "./index.module.css"
import img from "../../../assests/images/kong.png"
import img1 from "../../../assests/images/smallFile.webp"
import img2 from "../../../assests/images/smallWallet.webp"
import img3 from "../../../assests/images/smallCloud.webp"

function Hero(){
    return(
        <div className={styles.hero}>
                <div className={styles.creators}>
                    <div className={styles.creator1}>
                        <img src={img1} alt="file" />
                        <h1>Our Mission.</h1>
                        <p1>At ArtXpress, our mission is to discover,<br/> nurture, and promote the most promising digital artists while providin<br/> a premium experience for art collectors and NFT enthusiasts.<br/>

                            We strive to maintain a high standard of quality in our carefully curated selection,<br/> ensuring that each piece resonates with collectors who seek exceptional art.<br/>

                            Delivering unparalleled experience to the art community.</p1>
                    </div>

                    <div className={styles.creator2}>
                        <img src={img2} alt="wallet" />
                        <h1>For Collectors : Exclusive Digital Art Collections.</h1>
                        <p1>At ArtXpress, our mission is to discover,<br/> nurture, and promote the most promising digital artists while providing a <br/>premium experience for art collectors and NFT enthusiasts.<br/>

                            We strive to maintain a high standard of quality in our carefully curated selection, ensuring<br/> that each piece resonates with collectors who seek exceptional art.

                            <br/>Delivering unparalleled experience to the art community.</p1>
                    </div>

                    <div className={styles.creator3}>
                        <img src={img3} alt="cloud" />
                        <h1>For Creators : Your Growth Partner.</h1>
                        <p1>Stay at the forefront of the digital art revolution by <br/>owning these unique and sought-after art pieces.<br/>

                            ArtXpress analyzes digital art and NFT trends to present collectors<br/> with a carefully curated selection of art from artists poised to shape the market.<br/>

                            Our partner artists are the geniuses of our time,<br/> crafting exceptional works that will leave a lasting impact on the art world.</p1>
                    </div>
                </div>
                <div className={styles.artXpress}>
                    <img src={img} alt="kong" style={{ maxWidth: "120%", height: "auto" }} />
                </div>
        </div>
    )
}

export default Hero;