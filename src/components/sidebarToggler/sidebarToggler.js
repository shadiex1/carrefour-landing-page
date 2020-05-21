import React from "react";
import styles from "./sidebarToggler.module.scss";

const sidebarToggler = props => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
  </div>
);
export default sidebarToggler;
