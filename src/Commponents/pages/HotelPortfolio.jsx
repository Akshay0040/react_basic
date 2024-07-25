import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import "../assets/css/hotelportfolio.css";
import hotel1 from '../assets/img/hotel img/pexels-asadphoto-1268855.jpg';
import hotel2 from '../assets/img/hotel img/pexels-davidmcelwee-11661316.jpg';
import hotel3 from '../assets/img/hotel img/pexels-jimbear-1458457.jpg';
import hotel4 from '../assets/img/hotel img/pexels-kathrina-wainstok-3573349-10808866.jpg';
import hotel5 from '../assets/img/hotel img/pexels-pixabay-258154.jpg';
import hotel6 from '../assets/img/hotel img/pexels-salma-smida-594929-1375383.jpg';

const hotels = [
  {
    name: 'Hotel A',
    image: hotel1,
    link: 'https://hotel-a.com'
  },
  {
    name: 'Hotel B',
    image: hotel2,
    link: 'https://hotel-b.com'
  },
  {
    name: 'Hotel C',
    image: hotel3,
    link: 'https://hotel-c.com'
  },
  {
    name: 'Hotel D',
    image: hotel4,
    link: 'https://hotel-d.com'
  },
  {
    name: 'Hotel E',
    image: hotel5,
    link: 'https://hotel-e.com'
  },
  {
    name: 'Hotel F',
    image: hotel6,
    link: 'https://hotel-f.com'
  }
];

const HotelPortfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <section className="hotel-portfolio">
      <div className="container">
        <h2 className="section-title">Our Hotels</h2>
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-slide">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <a href={hotel.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelPortfolio;
