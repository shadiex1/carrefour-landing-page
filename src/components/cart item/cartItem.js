import React from "react";
import styles from "./cartItem.module.scss";

const CartItem = props => (
  <div className={styles.cartItem}>
    <img src={props.img} alt="item" />
    <div className={styles.itemDetails}>
      <span className={styles.name}>{props.title}</span>
      <span className={styles.price}>
        {props.price}
      </span>
    </div>
  </div>
);

export default CartItem;