import React from "react";
import styles from "./index.module.css";

const Button = ({ onClick, text, color }) => {    
    return (
        <button className={styles.button} style={{ backgroundColor: color }} onClick={onClick}>
            <span>{text}</span>
        </button>
    );
}

export default Button;
