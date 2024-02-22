import React from 'react';

const AvailableCars = () => {
  const handleRegisterClick = () => {
    window.location.href = '/signup';
  };
  const availableCars = [
    { id: 1, model: 'Sedan', year: 2022, price: 1000 },
    { id: 2, model: 'SUV', year: 2023, price: 1500 },
    { id: 3, model: 'Van', year: 2021, price: 1200 },
    { id: 4, model: 'Convertible', year: 2022, price: 12000 },
    { id: 5, model: 'JEEP', year: 2023, price: 2500 },
    { id: 6, model: 'Hybrid', year: 2022, price: 10000 },
    { id: 8, model: 'mini cooper', year: 2023, price: 6000 },
    { id: 9, model: 'Luxury', year: 2021, price: 15000 },
    { id: 10, model: 'Vintage car', year: 2000, price: 5000 },
  ];

  return (
    <div className="container">
      <h2 className="mb-4">Available Cars for Rent</h2>

      <div className="card-deck">
        {availableCars.map((car) => (
          <div className="card" key={car.id}>
            <div className="card-body">
              <h5 className="card-title">{car.model}</h5>
              {car.model === 'Sedan' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Sedan</p>
                  <p className="card-text">Classy and comfortable Fuel efficient</p>
                </div>
              )}
              {car.model === 'SUV' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/19410407/pexels-photo-19410407/free-photo-of-white-22-infiniti-qx60-suv.jpeg?auto=compress&cs=tinysrgb&w=600${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">SUV</p>
                  <p className="card-text">Great for family trips</p>
                </div>
              )}
              {car.model === 'Van' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/10248474/pexels-photo-10248474.jpeg?auto=compress&cs=tinysrgb&w=600${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Van</p>
                  <p className="card-text">Great for family trips</p>
                </div>
              )}
               {car.model === 'Convertible' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/205737/pexels-photo-205737.jpeg?auto=compress&cs=tinysrgb&w=600=${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Convertible car </p>
                  <p className="card-text">A convertible is a car with a soft roof that can be folded down or removed.</p>
                </div>
              )}
              {car.model === 'JEEP' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/8824197/pexels-photo-8824197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Jeep</p>
                  <p className="card-text">A jeep is a rugged car made for driving in difficult conditions.</p>
                </div>
              )}
               {car.model === 'Hybrid' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Hybrid car</p>
                  <p className="card-text"> an electric motor with a battery and fuel cells for energy storage.</p>
                </div>
              )}
               {car.model === 'mini cooper' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/3589586/pexels-photo-3589586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">mini cooper</p>
                  <p className="card-text">The Mini is a small, two-door, four-seat car, developed as ADO15.</p>
                </div>
              )}
               {car.model === 'Luxury' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Luxury car </p>
                  <p className="card-text"> they're fun to drive, they perform better than economy cars, and they grant their owners a sense of achievement.</p>
                </div>
              )}
              {car.model === 'Vintage car' && (
                <div>
                  <img
                    src={`https://images.pexels.com/photos/807677/pexels-photo-807677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${car.model}`}
                    className="card-img-top"
                    alt={`Image of ${car.model}`}
                  />
                  <p className="card-text">Vintage car</p>
                  <p className="card-text">A vintage car is, in the most general sense, an old automobile.</p>
                </div>
              )}
              {/* Similar blocks for other car models */}
              <p className="card-text">Year: {car.year}</p>
              <p className="card-text">Price: {car.price} per day</p>
              <button onClick={handleRegisterClick}>Rent Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;