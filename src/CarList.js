import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{`${car.brand} ${car.model} (${car.year})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;