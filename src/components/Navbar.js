import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar">
                <div className="navbar-links">
                    <div className="navbar-home">
                        <NavLink to="/home"><img src="dy-hero-logo-black.png" alt="logo" /></NavLink>
                    </div>
                    <div className="navbar-categories">
                        <NavLink to="/women">Women</NavLink>
                        <NavLink to="/men">Men</NavLink>
                        <NavLink to="/kids">Kids</NavLink>
                    </div>
                    <div className="navbar-cart">
                        <NavLink to="/cart"><i className="fas fa-shopping-cart cart-icon"></i></NavLink>
                    </div>

                </div>
        </nav>
    )
}

export default Navbar;