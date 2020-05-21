import React from "react";
import styles from "./branches.module.scss";
import watermark from "../../images/Layer 16.png";
import branch1Img from "../../images/backgrounds/Layer 23.png";
import branch2Img from "../../images/backgrounds/Layer 24.png";
import branch3Img from "../../images/backgrounds/Layer 25.png";
import branch4Img from "../../images/backgrounds/Layer 26.png";

const branches = () => (
  <div className={styles.branches}>
    <img className={styles.watermark} src={watermark} alt="360 view" />
    <h3>browse by branch</h3>
    <span>choose the branch closest to you</span>
    <div className={styles.branchContainer}>
      <div
        style={{ background: `url("${branch1Img}") center` }}
        className={styles.branch}
      >
        <h4>City Stars</h4>
      </div>
      <div
        style={{ background: `url("${branch2Img}") center` }}
        className={styles.branch}
      >
        <h4>City Stars</h4>
      </div>
      <div
        style={{ background: `url("${branch3Img}") center` }}
        className={styles.branch}
      >
        <h4>City Stars</h4>
      </div>
      <div
        style={{ background: `url("${branch4Img}") center` }}
        className={styles.branch}
      >
        <h4>City Stars</h4>
      </div>
    </div>
  </div>
);

export default branches;
