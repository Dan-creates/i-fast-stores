import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/Nav.js';
import sample from './images/category.jpg'
import { Category, Categorycard } from './Components/Category.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <NavBar/>
  <Category title='Fashion'>
    <Categorycard name='Hair Care' src={sample}/>
  </Category>
  </>
  
);
