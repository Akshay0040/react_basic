import React, { useState } from 'react';
import "../assets/css/booking.css";

const BookingEngine = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(0);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Basic validation
    if (!checkInDate || !checkOutDate || guests < 1) {
      setError('Please fill in all fields correctly.');
      return;
    }

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      setError('Check-out date must be after check-in date.');
      return;
    }

    setError('');

    // Prepare search parameters
    const searchParams = {
      checkInDate,
      checkOutDate,
      guests,
    };

    // Log the search parameters (this can be replaced with an API call)
    console.log('Searching for availability with parameters:', searchParams);

    // Example API call (uncomment and replace with your API endpoint)
    // fetch('/api/search', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(searchParams),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Search results:', data);
    // })
    // .catch(error => {
    //   console.error('Error during search:', error);
    // });
  };

  return (
    <div className="booking-engine">
      <h2>Book Your Stay</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="check-in">Check-In Date</label>
        <input 
          type="date" 
          id="check-in" 
          value={checkInDate} 
          onChange={(e) => setCheckInDate(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="check-out">Check-Out Date</label>
        <input 
          type="date" 
          id="check-out" 
          value={checkOutDate} 
          onChange={(e) => setCheckOutDate(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <input 
          type="number" 
          id="guests" 
          value={guests} 
          min="1" 
          onChange={(e) => setGuests(e.target.value)} 
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BookingEngine;
