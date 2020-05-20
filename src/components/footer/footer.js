import React from "react";
import styles from "./footer.module.scss";
import creditImg from "../../images/Layer 5.png";
import nasnavImg from "../../images/Layer 41.png"

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
        <div><i className="fas fa-map-marker-alt"></i> <p><span>Find a</span> carrefour store</p></div>
        <button className={styles.findBtn}>Find Store</button>
        </div>
        <div className={styles.subscribe}>
            <div>
        <i className="fas fa-envelope-open"></i> <p><span>Subscribe to</span> carrefour</p>
        </div>
        <div className={styles.emailInput}>
        <input type="email" placeholder="Your Email"/> <span>Subscribe</span>
        </div>
        </div>
        </div>
        <div className={styles.copyrights}>
            <p> &copy; Careefour Store.Inc</p>
            <img src={creditImg} alt="credit cards"/>
            <div className={styles.nasnav}>
                <p>Powerd by</p>
                <img src={nasnavImg} alt="nasnav logo"/>
            </div>
        </div>
    </footer>
)


export default footer