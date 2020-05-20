import React from "react"
import styles from "./cartIcon.module.scss";

const cartIcon = ()=>(
    <div style={{display:"flex"}}>
    <div className={styles.button} >
    <i className="fas fa-shopping-cart"></i>
    </div>
    <div style={{backgroundColor:"black"}} className={styles.button}>
        5
    </div>
    </div>
)

export default cartIcon