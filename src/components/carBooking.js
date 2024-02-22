import React, { useState } from 'react';

const CarBooking = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      carModel,
      pickupLocation,
      dropLocation,
      pickupDate,
      returnDate,
      additionalInfo,
    });
    setFullName('');
    setEmail('');
    setCarModel('');
    setPickupLocation('');
    setDropLocation('');
    setPickupDate('');
    setReturnDate('');
    setAdditionalInfo('');
  };

  return (
    <div className="container order-container">
      <h2 className="mb-4">Car Rental Booking Form</h2>

      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

       
        <div className="form-group">
          <label htmlFor="carModel">Select Car Model</label>
          <select
            className="form-control"
            id="carModel"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          >
            <option value="" disabled selected>
              Select a car model
            </option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">van</option>
            <option value="Convertible">Convertible</option>
            <option value="JEEP">JEEP</option>
            <option value="Hybrid">Hybrid</option>
            <option value="mini cooper">mini cooper</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

       
        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location</label>
          <input
            type="text"
            className="form-control"
            id="pickupLocation"
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropLocation">Drop-off Location</label>
          <input
            type="text"
            className="form-control"
            id="dropLocation"
            placeholder="Enter drop-off location"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            required
          />
        </div>

       
        <div className="form-group">
          <label htmlFor="pickupDate">Pickup Date</label>
          <input
            type="date"
            className="form-control"
            id="pickupDate"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            className="form-control"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>

      
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Information</label>
          <textarea
            className="form-control"
            id="additionalInfo"
            rows="3"
            placeholder="Any special requirements or comments"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>

      
        <button type="submit" className="btn btn-primary">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default CarBooking;