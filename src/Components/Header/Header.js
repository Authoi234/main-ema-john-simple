import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <nav className='header'>
            <a href="https://ema-john-shopping-by-authoi.netlify.app/"><img src={logo} alt="" /></a>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">about</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;