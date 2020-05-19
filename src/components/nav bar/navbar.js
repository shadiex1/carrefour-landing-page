import React, { Component } from "react";
import styles from "./navbar.module.scss"

class navbar extends Component {
    state ={
        searchValue:""
    }
    render(){
        return(
            <nav className={styles.navbar}>
        
            <img src="./images/Layer 2.png" alt="Logo"/>
            <div className={styles.searchBar}>
                <span>All Category <i class="fas fa-chevron-down"></i> </span>
                <input type="text" placeholder="Search"/>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                <i class="fas fa-search"></i>
                </div>
                <div className={styles.button}>
                <i class="fas fa-shopping-cart"></i>
                </div>
                <div style={{backgroundColor:"black"}} className={styles.button}>
                    5
                </div>
                <div className={styles.button}>
                <i class="fas fa-user-plus"></i>
                Login
                </div>
            </div>
        
    </nav>
        )
    }
    
}

export default navbar;