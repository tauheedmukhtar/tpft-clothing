import React from 'react';
import {BrowserRouter, Route,} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument (userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state)} )
        })
      } else {
        this.setState({currentUser: userAuth}, () => {console.log(this.state)} );
      }
    });
  };

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      
      <BrowserRouter>
        
        <Header currentUser = {this.state.currentUser} />
      
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
  };
};

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