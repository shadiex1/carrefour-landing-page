import React from "react";
import styles from "./cartdropdown.module.scss";
import CartItem from "../cart item/cartItem";

const cartdropdown = props => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}>
      {props.items.length ? (
        props.items.map(item => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.newPrice}
            img={item.img}
          />
        ))
      ) : (
        <div className={styles.empty}>your cart is empty</div>
      )}
    </div>
  </div>
);

export default cartdropdown;
