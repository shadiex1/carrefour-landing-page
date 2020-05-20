import React, { Component } from "react";
import styles from "./categoriesList.module.scss";

class CategoriesList extends Component{
    state={
        categoriesList:[
            {iconClass:"fas fa-mobile",title:"Smart Phone"},
            {iconClass:"fas fa-shopping-basket",title:"SuperMarket"},
            {iconClass:"fas fa-grin-alt",title:"Babys"},
            {iconClass:"fas fa-star",title:"Girls"},
            {iconClass:"fas fa-apple-alt",title:"Health Care"},
            {iconClass:"fas fa-futbol",title:"Baby World"},
            {iconClass:"fas fa-tshirt",title:"Clothes"},
            {iconClass:"fas fa-pizza-slice",title:"Food"},


        ]
    }
    render(){
        return(
            <div className={styles.categoriesList}>
                {this.state.categoriesList.map(category=>(
                    <div key={category.title} className={styles.category}>
                        <i className={category.iconClass}></i>
                        <span>{category.title}</span>
                    </div>
                ))}
            </div>
        )
    }
          
}
  
  
export default CategoriesList