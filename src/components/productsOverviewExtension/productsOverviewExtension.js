import React from "react";
import styles from "./productsOverviewExtension.module.scss";
import productBg1 from "../../images/backgrounds/Layer 35.png";
import productBg2 from "../../images/backgrounds/Layer 43.png";
import productBg3 from "../../images/backgrounds/Layer 37.png";

const productsOverviewExtension = () => (
  <div className={styles.container}>
    <div
      style={{ background: `url("${productBg1}")center` }}
      className={styles.box}
    >
      <h3>Sports Products</h3>
      <span>Shop now</span>
    </div>
    <div
      style={{ background: `url("${productBg2}")center` }}
      className={styles.box}
    >
      <h3>Food Products</h3>
      <span>Shop now</span>
    </div>
    <div
      style={{ background: `url("${productBg3}")center` }}
      className={styles.box}
    >
      <h3>Smart Products</h3>
      <span>Shop now</span>
    </div>
  </div>
);

export default productsOverviewExtension;
