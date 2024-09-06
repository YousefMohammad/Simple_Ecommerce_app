
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assests/css/App.css';
import React from 'react';

import {
  Routes,
  Route
} from "react-router-dom";

// import { useState,useContext, createContext } from 'react';

import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Products from './pages/Products'
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';



function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route
            path="/"
            element={[<Header ShowSlider={true}/>,<Products />]}
          />
          <Route
            
            path="about"
            element={[<Header ShowSlider={true}/>,<About />]}
          />

          <Route
            
            path="product/:productId"
            element={<ProductDetails />}
          />

        </Routes>

      <Footer />
    </div>

  );
}

export default App;
