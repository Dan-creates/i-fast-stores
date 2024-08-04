import React from 'react';
import ReactDOM from 'react-dom/client';
import Product_page from './pages/product-page.js';
import sample from './images/category.jpg'
import { Category, Categorycard } from './Components/Category.js';
import Product from './Components/Product.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Product_page/>
  </>
  
);
