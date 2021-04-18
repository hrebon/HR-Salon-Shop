import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav  className="nav-top navbar navbar-expand-lg navbar-light">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand text-white" href="#">HR-Salon</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link mr-5 text-white" href="#">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5  text-white" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5  text-white" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;