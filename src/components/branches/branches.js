import React from "react";
import styles from "./branches.module.scss";
import watermark from "../../images/Layer 16.png"

const branches=()=>(
    <div className={styles.branches}>
        <img className={styles.watermark}src={watermark} alt="360 view"/>
        <h3>browse by branch</h3>
        <span>choose the branch closest to you</span>
        <div className={styles.branchContainer}>
            <div className={styles.branch}><h4>City Stars</h4></div>
            <div className={styles.branch}><h4>City Stars</h4></div>
            <div className={styles.branch}><h4>City Stars</h4></div>
            <div className={styles.branch}><h4>City Stars</h4></div>
        </div>
    </div>
)

export default branches