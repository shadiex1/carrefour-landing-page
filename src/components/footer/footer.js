import React from "react";
import styles from "./footer.module.scss"

const footer = ()=>(
    <footer className={styles.footer}>
        <div className={styles.productInfo}>
            <div className={styles.logo}>
        <img src="./images/Layer 2.png" alt="Logo"/>
        <ul className={styles.links}>
            <li className={styles.link}>Smart Phone</li>
            <li className={styles.link}>SuperMarket</li>
            <li className={styles.link}>Babys</li>
            <li className={styles.link}>Girls</li>
            <li className={styles.link}>Health care</li>
            <li className={styles.link}>Baby World</li>
            <li className={styles.link}>Baby World</li>
            <li className={styles.link}>Clothes</li>
            <li className={styles.link}>Food</li>
        </ul>
        </div>
        <div className={styles.location}>
        <i className="fas fa-map-marker-alt"></i> <p><span>Find a</span> carrefour store</p>
        <button className={styles.findBtn}>Find Store</button>
        </div>
        <div className={styles.subscribe}>
        <i className="fas fa-envelope-open"></i> <p><span>Subscribe to</span> carrefour</p>
        <input type="email" placeholder="Your Email"/> <span>Subscribe</span>
        </div>
        </div>
        <div className={styles.copyrights}></div>
    </footer>
)


export default footer