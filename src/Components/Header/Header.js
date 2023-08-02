import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <a href="https://ema-john-shopping-by-authoi.netlify.app/"><img src={logo} alt="" /></a>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">about</Link>
                {
                    user?.uid ?
                        <button onClick={logOut}>Log out</button>
                        :
                        <>
                            <Link to="/signup">Sign up</Link>
                            <Link to="/login">Login</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;