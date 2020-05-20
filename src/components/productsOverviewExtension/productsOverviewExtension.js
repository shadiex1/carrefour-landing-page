import React from "react"
import styles from "./productsOverviewExtension.module.scss"

const productsOverviewExtension = ()=>(
    <div className={styles.container}>
        <div className={styles.box}>
             <h3>Sports Products</h3>
             <span>Shop now</span>
             
        </div>
        <div className={styles.box}>
             <h3>Food Products</h3>
             <span>Shop now</span>
             
        </div>
        <div className={styles.box}>
             <h3>Smart Products</h3>
             <span>Shop now</span>
             
        </div>
       
    </div>
)

export default productsOverviewExtension