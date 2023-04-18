import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SoftwareReview from "pages/SoftwareReview";
import Products from "pages/Products";
import AboutUs from "pages/AboutUs";
import AppLayout from "pages/AppLayout";
import { linksDetails } from "shared";
import Login from "pages/Login";
import Signup from "pages/Signup";
import NotFound from "pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout links={linksDetails} />}>
        <Route index element={<SoftwareReview />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
