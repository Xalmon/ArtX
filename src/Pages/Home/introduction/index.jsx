import React from "react";
import styles from "../introduction/index.module.css";
import img2 from "../../../assests/images/Queen-Mother.jpg"
import FilledButton from "../../../component/Buttons/FilledButton";
import { Link } from "react-router-dom";

function Introduction() {
    return (
        <div className={styles.Container}>
            <div className={styles.image}>
                <img src={img2} alt="stature" style={{ maxWidth: "150%", height: "auto" }} />
            </div>
            <div className={styles.textOne}>
                <p className={styles.p1}> ArtXpress<br/>
                    Empowering<br/>
                    The Creative Spirit.
                </p>
                <p className={styles.p2}>Welcome to ArtXpress, the premier digital art <br/>gallery inspired by creativity and secured by NFT<br/>     technology.
                    Immerse yourself in the future of digital art<br/>as we bring together visionary creators who are shaping the trends of tomorrow. </p>

                <div className={styles.btn}>
                    <Link to="marketplace/">  
                        <FilledButton text={"Marketplace"} color={"black"} padding={"15px 30px"} borderRadius={"10px"} fontSize={"16px"} fontWeight={"bold"}  />
                    </Link>
                    <Link to="/checklogintype/">
                        <FilledButton text={'Artists'} background={"black"} color={'white'} padding={"15px 30px"} borderRadius={"10px"} fontSize={"16px"} fontWeight={"bold"} border={"1px solid"} />
                    </Link>
                </div> 
            </div>
        </div>
    );
}

export default Introduction;
