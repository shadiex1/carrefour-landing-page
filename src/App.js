import React, { Component } from 'react';
import './App.css';
import Banner from "./components/banner/banner"
import Navbar from "./components/nav bar/navbar";
import CategoriesList from "./components/categoriesList/categoriesList";
import Showcase from "./components/showcase/showcase";
import CategoriesOverview from "./components/categoriesOverview/categoriesOverview";
import Branches from "./components/branches/branches";
import Footer from "./components/footer/footer";
import ProductsOverview from "./components/productsOverview/productsOverview";
import ProductsOverviewExtension from "./components/productsOverviewExtension/productsOverviewExtension"

class App extends Component {
  state={
      cartItems:[]
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
          <Navbar cart={this.state.cartItems} />
          <CategoriesList />
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
