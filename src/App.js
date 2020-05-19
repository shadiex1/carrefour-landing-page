import React from 'react';
import './App.css';
import Banner from "./components/banner/banner"
import Navbar from "./components/nav bar/navbar";
import CategoriesList from "./components/categoriesList/categoriesList";
import Showcase from "./components/showcase/showcase";
import CategoriesOverview from "./components/categoriesOverview/categoriesOverview";
import Branches from "./components/branches/branches"

function App() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <CategoriesList/>
      <Showcase/>
      <CategoriesOverview/>
      <Branches/>
    </div>
  );
}

export default App;
