import React from 'react';
import "../assets/css/service.css";

function Services() {
  return (
    <div className='Services-page'>
      <div className='Services-container'>
        <h2 className='services-header'>Our Services</h2>
        <div className='Services-list'>
          <div className='Service-item'>
            <h3>Service 1: Premium Milk Delivery</h3>
            <p>Enjoy the freshest milk delivered straight to your doorstep. Our premium milk is sourced from healthy, well-cared-for cows and undergoes stringent quality checks to ensure purity and taste.</p>
          </div>
          <div className='Service-item'>
            <h3>Service 2: Organic Dairy Products</h3>
            <p>We offer a range of organic dairy products including cheese, yogurt, and butter. Made from 100% organic ingredients, these products are perfect for those who prioritize a healthy lifestyle.</p>
          </div>
          <div className='Service-item'>
            <h3>Service 3: Custom Dairy Orders</h3>
            <p>Need a special dairy order for an event or personal use? We cater to custom orders with flexibility and attention to detail. Just let us know your requirements, and we'll handle the rest.</p>
          </div>
          <div className='Service-item'>
            <h3>Service 4: Farm Tours</h3>
            <p>Experience a day at the farm! Join us for guided tours where you can learn about the dairy farming process, meet our animals, and see where your milk comes from. Fun for the whole family!</p>
          </div>
          <div className='Service-item'>
            <h3>Service 5: Educational Workshops</h3>
            <p>Our workshops provide in-depth knowledge about dairy farming, nutrition, and sustainable practices. Perfect for schools, community groups, and anyone interested in learning more about dairy production.</p>
          </div>
          <div className='Service-item'>
            <h3>Service 6: Dairy Subscriptions</h3>
            <p>Subscribe to our dairy service for regular deliveries at discounted rates. Choose from various subscription plans to fit your needs, and enjoy the convenience of having fresh dairy products delivered regularly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
