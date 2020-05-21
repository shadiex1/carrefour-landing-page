import React, { Component } from "react";
import categoriesListData from  "../../services/categoriesListData"
import styles from "./sideDrawer.module.scss";
import Backdrop from "../backdrop/backdrop";
import logo from "../../images/Layer 2.png"
class sidedrawer extends Component {
    state=categoriesListData
    render(){
            let attachdstyles=[styles.SideDrawer,styles.Close];
    if(this.props.open){
        attachdstyles=[styles.SideDrawer,styles.Open];
    }

        return (
            <React.Fragment>
        <Backdrop show={this.props.open} clicked={this.props.closed}/>
<div className={attachdstyles.join(" ")} onClick={this.props.closed}>
            <div className={styles.content}>
            <img src={logo} alt="logo"/>
            <div className={styles.categoriesList}>
            {this.state.map(category => (
              <div key={category.title} className={styles.category}>
                <i className={category.iconClass}></i>
                <span>{category.title}</span>
              </div>
            ))}
          </div>
            </div>
</div>
</React.Fragment>
    )
    }

    

}

export default sidedrawer