import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const triggerEvent = () => { 
        if (window.DY) {
            window.DY.API('event', {name: 'Home Icon Click'})
        }
    };

    return (
        <nav className="navbar">
                <div className="navbar-links">
                    <div className="navbar-home">
                        <NavLink to="/demo-website/home"><img src="dy-hero-logo-black.png" alt="logo" onClick={triggerEvent}/></NavLink>
                    </div>
                    <div className="navbar-categories">
                        <NavLink to="/demo-website/category/women">Women</NavLink>
                        <NavLink to="/demo-website/category/men">Men</NavLink>
                        <NavLink to="/demo-website/category/kids">Kids</NavLink>
                    </div>
                    <div className="navbar-cart">
                        <NavLink to="/demo-website/cart"><i className="fas fa-shopping-cart cart-icon"></i></NavLink>
                    </div>

                </div>
        </nav>
    )
}

export default Navbar;