import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from '@mui/icons-material';
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
