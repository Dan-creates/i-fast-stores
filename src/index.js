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
  <Product name='Other Models' url={sample} price='$4.99'/>

  </Category>
  
  {/* <Category title='Fashion'>
    <Categorycard name='Hair Care' src={sample}/>
    <Categorycard name='Skin Care' src={sample}/>
    <Categorycard name='Scalping' src={sample}/>
  </Category>
  <Category title='Trending Categories'>
    <Categorycard name='Modelling' src={sample}/>
    <Categorycard name='Facial' src={sample}/>
    <Categorycard name='Scalping' src={sample}/>
  </Category>
  <Category title='On your Wishlist'>
    <Categorycard name='Modelling' src={sample}/>
    <Categorycard name='Facial' src={sample}/>
    <Categorycard name='Scalping' src={sample}/>
  </Category> */}
  </>
  
);
