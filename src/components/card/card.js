import React from "react";
import styles from "./card.module.scss";


const card = (props)=>(
    <div className={styles.card}>
        <img src={props.img} alt="product"/>
        <div className={styles.price}>
            <span className={styles.new}>{props.newPrice}</span>
            <span className={styles.old}>{props.oldPrice}</span>
        </div>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.quantity}>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className={styles.btn}>Add</button>

        </div>
        <div className={styles.lastUpdate}>
            <span>Last Update : 2018/00/00</span>
        </div>
    </div>
)


export default card