import React from 'react';
import "../assets/css/hero.css";
import hero from "../assets/img/hero img/pexels-pixabay-260922 (1).jpg";
import BookingEngine from "../pages/Booking.jsx";

function Hero() {
  return (
    <div className="hero-container">
      <img src={hero} alt="Hero Background" className="hero-background" />
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        {/* <p>Discover amazing things with us!</p> */}
      </div>
      <div className="booking-section">
        <BookingEngine />
      </div>
    </div>
  );
}

export default Hero;
