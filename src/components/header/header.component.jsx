import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/tpft.svg'
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                : 
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            
            <Link className='option' to='/Cart'>CART</Link>

        </div>
    </div>
)

export default Header;