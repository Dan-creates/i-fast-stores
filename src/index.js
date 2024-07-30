import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/Nav.js';
import sample from './images/category.jpg'
import { Category, Categorycard } from './Components/Category.js';
import Product from './Components/Product.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <NavBar/>
  <Category title='Modelling'>
  <Product name='Models' url={sample} price='$49.99'/>
  <Product name='Addidas' url={sample} price='$4.99'/>
  <Product name='Guccii' url={sample} price='$5.99'/>
  </Category>
  </>
  
);
