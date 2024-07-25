import React from 'react';
import "../assets/css/service.css";
import service1 from "../assets/img/service img/pexels-heyho-7031605.jpg";
import service2 from "../assets/img/service img/pexels-tim-douglas-6210765.jpg";
import service3 from "../assets/img/service img/pexels-polina-tankilevitch-3738349.jpg";
import service4 from "../assets/img/service img/pexels-icsa-833425-1708936.jpg";
import service5 from "../assets/img/service img/pexels-cottonbro-5371567.jpg";
import service6 from "../assets/img/service img/pexels-tim-samuel-6697306.jpg";

function Services() {
  return (
    <div className='Services-page'>
      <div className='Services-container'>
        <h2 className='services-header'>Our Services</h2>
        <div className='Services-list'>
          <div className='Service-item'>
            <img src={service1} alt="Luxury Accommodation" className='service-image'/>
            <h3>Service 1: Luxury Accommodation</h3>
            <p>Experience the ultimate in luxury with our beautifully appointed rooms and suites, designed to offer comfort and elegance. Each room is equipped with top-notch amenities to ensure a memorable stay.</p>
          </div>
          <div className='Service-item'>
            <img src={service2} alt="Gourmet Dining" className='service-image'/>
            <h3>Service 2: Gourmet Dining</h3>
            <p>Indulge in exquisite cuisine prepared by our world-class chefs. Our restaurant offers a diverse menu featuring both local and international dishes, crafted with the freshest ingredients.</p>
          </div>
          <div className='Service-item'>
            <img src={service3} alt="Spa and Wellness" className='service-image'/>
            <h3>Service 3: Spa and Wellness</h3>
            <p>Relax and rejuvenate with our comprehensive spa and wellness services. From massages and facials to yoga sessions and fitness classes, we provide everything you need to unwind and stay healthy.</p>
          </div>
          <div className='Service-item'>
            <img src={service4} alt="Conference and Event Facilities" className='service-image'/>
            <h3>Service 4: Conference and Event Facilities</h3>
            <p>Our hotel offers state-of-the-art conference and event facilities, perfect for business meetings, weddings, and social gatherings. Our dedicated team will ensure your event is a success.</p>
          </div>
          <div className='Service-item'>
            <img src={service5} alt="Concierge Service" className='service-image'/>
            <h3>Service 5: Concierge Service</h3>
            <p>Our concierge team is here to assist you with any requests you may have, from arranging transportation and booking tours to providing recommendations for local attractions and dining.</p>
          </div>
          <div className='Service-item'>
            <img src={service6} alt="Complimentary Wi-Fi" className='service-image'/>
            <h3>Service 6: Complimentary Wi-Fi</h3>
            <p>Stay connected with our high-speed complimentary Wi-Fi available throughout the hotel. Whether you're working or streaming your favorite shows, we've got you covered.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
