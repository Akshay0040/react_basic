import React from 'react';
import Slider from 'react-slick';
import "../assets/css/about.css";
import img1 from "../assets/img/about img/pexels-andreaedavis-2873951.jpg";
import img2 from "../assets/img/about img/pexels-leah-newhouse-50725-952586.jpg";
import img3 from "../assets/img/about img/pexels-orlovamaria-4916534.jpg";
import img4 from "../assets/img/about img/pexels-rpnickson-2631613.jpg";
import img5 from "../assets/img/about img/pexels-taryn-elliott-4112236.jpg";
import img6 from "../assets/img/about img/pexels-vlada-karpovich-7903136.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='About-page'>
      <div className='About-container'>
        <h2 className='about-header'>About Us</h2>
        <div className='Description'>
          <p>This is the about page.</p>
          <p>It's where you'll find information about the app, its creators, and any other relevant information.</p>
          <p>Click the "Home" link in the navigation bar to return to the main page.</p>
          {/* <button>Go Back</button> */}
        </div>
        <div className='Image-section'>
          <Slider {...settings}>
            <div>
              <img src={img1} alt="About Us" />
            </div>
            <div>
              <img src={img2} alt="About Us" />
            </div>
            <div>
              <img src={img3} alt="About Us" />
            </div>
            <div>
              <img src={img4} alt="About Us" />
            </div>
            <div>
              <img src={img5} alt="About Us" />
            </div>
            <div>
              <img src={img6} alt="About Us" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default About;
