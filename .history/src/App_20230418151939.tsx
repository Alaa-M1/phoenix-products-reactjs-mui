import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import SoftwareReview from 'pages/SoftwareReview';
import Products from 'pages/Products';
import AboutUs from 'pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}></Route>
      <Route index element={<SoftwareReview />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
    </Routes>
  );
}

export default App;
