import React, { Component ,Suspense} from 'react';
import './App.css';
import Banner from "./components/banner/banner"
import Navbar from "./components/nav bar/navbar";
import CategoriesList from "./components/categoriesList/categoriesList";
import Showcase from "./components/showcase/showcase";
import CategoriesOverview from "./components/categoriesOverview/categoriesOverview";
import Branches from "./components/branches/branches";
import Footer from "./components/footer/footer";
import ProductsOverview from "./components/productsOverview/productsOverview";
import ProductsOverviewExtension from "./components/productsOverviewExtension/productsOverviewExtension";

const SideDrawer=React.lazy(()=>import("./components/sideDrawer/sideDrawer"))

class App extends Component {
  state={
      cartItems:[],
      showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
      this.setState({showSideDrawer:false})
  }
  sideDrawerToggleHandler =()=>{
    this.setState((prevState) => {return {showSideDrawer: !prevState.showSideDrawer}})
}
    addItemToCart=(item)=>{
      const cartItems=[...this.state.cartItems]
      cartItems.push(item);
      this.setState({cartItems})
    }
  render(){
     return (
        <div>
          <Banner />
          <Navbar cart={this.state.cartItems} drawerToggleClicked={this.sideDrawerToggleHandler} />
          <Suspense fallback><SideDrawer  open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
          </Suspense>
          
          <CategoriesList minimize={this.state.showSideDrawer}/>
          <Showcase />
          <CategoriesOverview />
          <Branches />
          <ProductsOverview
            range={[0, 4]}
            header="Hot Deals"
            sub="New Hot Deals Now"
            addItem={(item)=>this.addItemToCart(item)}
          />
          <ProductsOverviewExtension />
          <ProductsOverview
            grey
            range={[4, 12]}
            header="Our Products"
            sub="Browse our fascinating sections!"
            addItem={(item)=>this.addItemToCart(item)}
          />
          <Footer />
        </div>
      );
  }
  
}

export default App;
