import React, { useState } from 'react';
import '../assets/css/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Logo</a>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Technologies</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
