import React from 'react';
import {BrowserRouter, Route,} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    
    <BrowserRouter>
      
      <Header />
    
      <div>   
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />

        <Route path='/shop/hats' component={Hats} />
        <Route path='/shop/sneakers' component = {Sneakers} />
        <Route path='/contact' component = {Contact} />
        <Route path='/cart' component = {Cart} />
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

const Contact = () => (
  <div className = 'homepage'>
      <h1>Contact Page</h1>        
  </div>
)
const Cart = () => (
  <div className = 'homepage'>
      <h1>Your Cart</h1>        
  </div>
)
export default App;