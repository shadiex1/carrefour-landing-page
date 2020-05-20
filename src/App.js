import React from 'react';
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

function App() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <CategoriesList/>
      <Showcase/>
      <CategoriesOverview/>
      <Branches/>
      <ProductsOverview range={[0,4]} header="Hot Deals"  sub="New Hot Deals Now"/>
      <ProductsOverviewExtension/>
      <ProductsOverview grey range={[4,12]} header="Our Products" sub="Browse our fascinating sections!"/>
      <Footer/>
    </div>
  );
}

export default App;
