import React from 'react';
import {BrowserRouter, Route, Link,} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Link to='/shop'> SHOP HERE </Link>
    
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/shop/hats' component={Hats} />
      <Route path='/shop/sneakers' component = {Sneakers} />

    </div>
    </BrowserRouter>
  );
}

//Temp components made to setup routing
const Hats = () => (
  <div className = 'homepage'>
      <h1>Hats Page</h1>        
  </div>
)

const Sneakers = () => (
  <div className = 'homepage'>
      <h1>Sneakers Page</h1>        
  </div>
)

export default App;