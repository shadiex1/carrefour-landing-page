import React, { Component } from "react";
import styles from "./categoriesList.module.scss";
import categoriesListData from "../../services/categoriesListData"

class CategoriesList extends Component {
  state = categoriesListData
  ;
  render() {
    return (
      <React.Fragment>
        
          <div className={styles.categoriesList}>
            {this.state.map(category => (
              <div key={category.title} className={styles.category}>
                <i className={category.iconClass}></i>
                <span>{category.title}</span>
              </div>
            ))}
          </div>
        
      </React.Fragment>
    );
  }
}

export default CategoriesList;
