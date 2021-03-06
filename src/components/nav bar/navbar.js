import React, { Component, Suspense } from "react";
import styles from "./navbar.module.scss";
import logoImg from "../../images/backgrounds/Layer 2.png";
const Cartdropdown = React.lazy(() => import("../cartdropdown/cartdropdown"));
const SidebarToggler = React.lazy(() =>
  import("../sidebarToggler/sidebarToggler")
);
class navbar extends Component {
  state = {
    searchValue: "",
    cartDropdown: false
  };

  toggleCartHidden = () => {
    this.setState({ cartDropdown: !this.state.cartDropdown });
  };
  render() {
    return (
      <React.Fragment>
        <nav className={styles.navbar}>
          <img src={logoImg} alt="Logo" />
          <div className={styles.searchBar}>
            <span>
              All Categories <i className="fas fa-chevron-down"></i>{" "}
            </span>
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.buttons}>
            <Suspense fallback>
              {" "}
              <SidebarToggler clicked={this.props.drawerToggleClicked} />
            </Suspense>
            <div className={styles.button}>
              <i className="fas fa-search"></i>
            </div>
            <div className={styles.button} onClick={this.toggleCartHidden}>
              <i className="fas fa-shopping-cart"></i>
              {this.state.cartDropdown ? (
                <Suspense fallback>
                  <Cartdropdown items={this.props.cart} />
                </Suspense>
              ) : null}
            </div>

            <div className={styles.button}>{this.props.cart.length}</div>
            <div className={styles.button}>
              <i className="fas fa-user-plus"></i>
              Login
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default navbar;
