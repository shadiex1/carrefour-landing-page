import React from "react";
import styles from "./banner.module.scss";
import bannerImg from "../../images/backgrounds/Layer 5.png";

const banner = () => (
  <div className={styles.banner}>
    <div className={styles.creditcards}>
      <img src={bannerImg} alt="credit cards" />
      <div className={styles.currency}>
        <span>EGP </span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
    <div className={styles.storeInfo}>
      <div>
        <i className="fas fa-map-marker-alt"></i>
        <span>stores</span>
      </div>
      <div>
        <i className="far fa-clock"></i>
        <span>WorksTime</span>
      </div>
      <div>
        <i className="fas fa-phone"></i>
        <span>Contact us</span>
      </div>
    </div>
  </div>
);

export default banner;
