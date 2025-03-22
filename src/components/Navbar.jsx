import React from 'react';
import '../styles/Navbar.css';
import logoImage from '../assets/Company Logo 1.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="CarbonCrunch Logo" className="logo-image" />
        <div className="logo">CarbonCrunch</div>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Blog</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="demo">Book Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
