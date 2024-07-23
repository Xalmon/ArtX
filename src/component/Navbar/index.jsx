import React from "react";
import styles from "../Navbar/index.module.css";
import { Link } from "react-router-dom";
import FilledButton from '../Buttons/FilledButton/index';
import { BsCart3} from 'react-icons/bs';

function Navbar(){
    return (
        <nav className={styles.navContainer}>
            <div className={styles.background}>
                <div className={styles.logo}>
                    <Link to="/">
                        <p>Art<span>Xpress</span></p>
                    </Link>
                </div>
            </div>
            <div className={styles.links}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Home</p>
                </Link>
                <Link to="/marketplace" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Marketplace</p>
                </Link>
                <Link to="/collector-profile" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Artists</p>
                </Link>
                <Link to="howitworks/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>How it Works?</p>
                </Link>
                <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Blog</p>
                </Link>
            </div>

        <div className={styles.btnDiv}>
            <Link to="/checklogintype">
                <FilledButton text={'Login'} padding={"7px 20px"} fontSize={'14px'} cursor={"pointer"} fontWeight={"bold"} border={"1px solid"} borderRadius={"10px"} />
            </Link>
            
            <Link to="/checkregistertype">
                <FilledButton text={'Sign up'} padding={"7px 20px"} fontSize={'14px'} cursor={"pointer"} fontWeight={"bold"} border={"1px solid"} borderRadius={"10px"} />
            </Link>
           
        </div>
        <div className={styles.cart}>
            <Link to="marketplace/"style={{ color: 'white' }}>
                <BsCart3 className='card_icon'/>
            </Link>
        </div>
    </nav>
)
}

export default Navbar;
