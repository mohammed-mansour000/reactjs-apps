import React from 'react'
import { Link } from 'react-router-dom';

const  Navbar = (props) => {
    console.log(props)
    return (
        <nav>
            <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;
