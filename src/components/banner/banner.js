import React from "react";
import styles from "./banner.module.scss";

const banner =()=>(
    <div className={styles.banner}>
        <div className={styles.creditcards}>
            <img src="./images/Layer 5.png" alt="credit cards"/>
            <div className={styles.currency}>
                <span>EGP </span>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div className={styles.storeInfo}>
            <div>
            <i class="fas fa-map-marker-alt"></i>
            <span>stores</span>
            </div>
            <div>
            <i class="far fa-clock"></i>   
            <span>WorksTime</span>
            </div>
            <div>
            <i class="fas fa-phone"></i>
            <span>Contact us</span>
            </div>
        </div>
    </div>
)

export default banner