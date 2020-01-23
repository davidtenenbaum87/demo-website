import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar">
                <div className="navbar-links">
                    <div className="navbar-home">
                        <NavLink to="/home">Home</NavLink>
                    </div>
                    <div className="navbar-categories">
                        <NavLink to="/women">Women</NavLink>
                        <NavLink to="/men">Men</NavLink>
                        <NavLink to="/kids">Kids</NavLink>
                    </div>
                    <div className="navbar-cart">
                        <NavLink to="/cart">Cart</NavLink>
                    </div>

                </div>
        </nav>
    )
}

export default Navbar;