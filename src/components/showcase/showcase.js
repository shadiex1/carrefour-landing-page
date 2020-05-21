import React from "react";
import styles from "./showcase.module.scss";
import showcaseBg from "../../images/backgrounds/Layer 7.png";

const showcase = () => (
  <div
    className={styles.showcase}
    style={{ background: `url("${showcaseBg}") center no-repeat` }}
  >
    <div className={styles.textBox}>
      <h2>
        <span styles={{ color: "var(--primary-color)" }}>fast food</span> on
        carrefour here now
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
      <i className="fas fa-chevron-circle-right fa-3x"></i>
    </div>

    <div className={styles.controls}>
      <div className={styles.control}></div>
      <div className={styles.control}></div>
      <div className={styles.control}></div>
      <div className={styles.control}></div>
    </div>
  </div>
);

export default showcase;
