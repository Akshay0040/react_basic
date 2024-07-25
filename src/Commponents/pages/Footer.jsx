import React from 'react';
import "../assets/css/footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="/about">Our Story</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Luxury Accommodation</a></li>
              <li><a href="/services">Gourmet Dining</a></li>
              <li><a href="/services">Conference and Event Facilities</a></li>
              <li><a href="/services">Spa and Wellness</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@dairyfarm.com">info@dairyfarm.com</a></li>
              <li><a href="tel:+1234567890">+1 234 567 890</a></li>
              <li><a href="/contact">Contact Form</a></li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hotel management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
