import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css'
function Nav() {
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/page">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar-right">
          <img src="/image/logo.jpg" alt="Logo"  className="navbar-logo" />
        </div>
      </div>
    </nav>




  );
}

export default Nav;
