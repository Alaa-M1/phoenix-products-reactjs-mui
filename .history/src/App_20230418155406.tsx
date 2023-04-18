import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import SoftwareReview from "pages/SoftwareReview";
import Products from "pages/Products";
import AboutUs from "pages/AboutUs";
import NavBar from "components/NavBar";

const links=['Software review','Products','About us']
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar links={links}/>}>
        <Route index element={<SoftwareReview />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
