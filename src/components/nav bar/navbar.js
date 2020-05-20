import React, { Component } from "react";
import styles from "./navbar.module.scss";
import Cartdropdown from "../cartdropdown/cartdropdown"

class navbar extends Component {
    state ={
        searchValue:"",
        cartDropdown:true
    }

    toggleCartHidden=()=>{
        this.setState({cartDropdown:!this.state.cartDropdown})
    }
    render(){
        return(
            <React.Fragment>
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
                   {this.props.cart.length}
                </div>
                <div className={styles.button}>
                <i className="fas fa-user-plus"></i>
                Login
                </div>           

            </div>                
             
        {this.state.cartDropdown ? <Cartdropdown items={this.props.cart}/> :null}
    </nav>
    

    </React.Fragment>
        )
    }
    
}

export default navbar;