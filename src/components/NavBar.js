import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper blue lighten-1">
                        <a href="#!" className="brand-logo">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavBar;