// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/Images/logo2.jpg'; // Import your logo image here

const Navbar = ({cartCount, onToggleTheme, isDarkMode}) => {
    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="logo-container">
                <img src={logo} alt="Ecommerce Logo" className="logo" />
                <h1 className="logo-text ">Ecommerce</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li ><Link to="/cart"> 🛒 Cart ({cartCount})</Link></li>
                <li style={{marginRight:'3dvh'}}>
                    <div className={`toggle-switch ${isDarkMode ? 'active' : ''}`} onClick={onToggleTheme}>
                        <div className='toggle-thumb'></div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
