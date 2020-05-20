import React, { Component } from "react";
import styles from "./navbar.module.scss";
import CartIcon from "../cart/cart icon/cartIcon"

class navbar extends Component {
    state ={
        searchValue:"",
        cartDropdown:false
    }

    toggleCartHidden=()=>{
        this.setState({cartDropdown:!this.state.cartDropdown})
    }
    render(){
        return(
            <nav className={styles.navbar}>
        
            <img src="./images/Layer 2.png" alt="Logo"/>
            <div className={styles.searchBar}>
                <span>All Category <i className="fas fa-chevron-down"></i> </span>
                <input type="text" placeholder="Search"/>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                <i className="fas fa-search"></i>
                </div>
                <div className={styles.button} onClick={this.toggleCartHidden}>
                <i className="fas fa-shopping-cart"></i>
                </div>
                <div style={{backgroundColor:"black"}} className={styles.button}>
                    5
                </div>
                <div className={styles.button}>
                <i className="fas fa-user-plus"></i>
                Login
                </div>
            </div>
        
    </nav>
        )
    }
    
}

export default navbar;