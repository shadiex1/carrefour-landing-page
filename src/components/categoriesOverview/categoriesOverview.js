import React, { Component } from "react";
import styles from "./categoriesOverview.module.scss";
import smartphonesImg from "../../images/categoriesOverview/Layer 9.png";
import babyImg from "../../images/categoriesOverview/Layer 10.png";
import smartTvImg from "../../images/categoriesOverview/Layer 11.png";
import HealthImg from "../../images/categoriesOverview/Layer 12.png";
import waterImg from "../../images/categoriesOverview/Layer 13.png";
import supermarketImg from "../../images/categoriesOverview/Layer 14.png";

class CategoriesOverview extends Component {
  state = {
    categories: [
      { img: smartphonesImg, title: "Smart Phones" },
      { img: babyImg, title: "Baby World" },
      { img: smartTvImg, title: "Smart TV’S" },
      { img: supermarketImg, title: "Super Market" },
      { img: HealthImg, title: "Healthy Food" },
      { img: waterImg, title: "Water" }
    ],
    icons: [
      { class: "fas fa-biking", title: "free shipping" },
      { class: "fas fa-gem", title: "save 50% up" },
      { class: "fas fa-credit-card", title: "online pay" },
      { class: "fas fa-compass", title: "track order" }
    ]
  };

  render() {
    return (
      <div className={styles.overview}>
        <h2>shopping by category</h2>
        <span>online shopping for erverything</span>
        <div className={styles.categoriesContainer}>
          <i className="fas fa-chevron-left"></i>
          {this.state.categories.map(category => (
            <div key={category.title} className={styles.category}>
              <div className={styles.imgContainer}>
                <img src={category.img} alt={`${category.title} category`} />
              </div>
              <span>{category.title}</span>
            </div>
          ))}
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className={styles.iconsOverview}>
          {this.state.icons.map(icon => (
            <div key={icon.title} className={styles.container}>
              <div className={styles.iconContainer}>
                <i className={icon.class}></i>
              </div>
              <div className={styles.description}>
                <h4>{icon.title}</h4>
                <span> While not exectly line</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoriesOverview;
