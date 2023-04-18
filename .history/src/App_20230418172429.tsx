import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SoftwareReview from "pages/SoftwareReview";
import Products from "pages/Products";
import AboutUs from "pages/AboutUs";
import AppLayout from "pages/AppLayout/AppLayout";
import { LinkInfo } from "types";

const links: Array<LinkInfo>=[{label:'Software review',path:'/'},{label:'Products',path:'/products'},{label:'About us',path:'/about-us'}]
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout links={links}/>}>
        <Route index element={<SoftwareReview />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
