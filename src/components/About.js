import React from 'react';

const CarRentalAbout = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Car Rental About Header Image" />
      </header>

      <div className="container pos-rel">
        <div className="row">
          {/* Heading Main */}
          <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
            <h1 className="heading-main">
              <span>Discover Our Fleet</span>
              What Makes Us Your Best Choice
            </h1>
          </div>
          {/* Heading Main */}
          <div className="about-content">
            <h2>About Our Car Rental Service</h2>
            <div className='text-colour'>
              <h1>Your Car Rental Service Name</h1>
            </div>
            <p>
              Welcome to Your Car Rental Service, where we provide top-notch car rental solutions to meet your transportation needs. Our commitment is to offer a diverse fleet of vehicles, ensuring you have the perfect ride for any occasion.
            </p>
          </div>
        </div>
        <div className="row">
          {/* Icon Box 1 */}
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0s">
            <div className="icon-box-2">
              <div className="media">
                <div className="service-icon">
                  <i className="icofont-car"></i>
                </div>
                <div className="service-inner-content media-body">
                  <h4 className="h4-md">Diverse Fleet</h4>
                  <p>Choose from a wide range of vehicles including sedans, SUVs, and vans. Our diverse fleet ensures you find the perfect car for your journey.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Icon Box 1 */}

          {/* Icon Box 2 */}
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
            <div className="icon-box-2">
              <div className="media">
                <div className="service-icon">
                  <i className="icofont-live-support"></i>
                </div>
                <div className="service-inner-content media-body">
                  <h4 className="h4-md">Customer Support</h4>
                  <p>Our dedicated customer support team is here to assist you. We provide 24/7 support to ensure a seamless car rental experience.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Icon Box 2 */}

          {/* Icon Box 3 */}
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="0" data-wow-delay="0.4s">
            <div className="icon-box-2">
              <div className="media">
                <div className="service-icon">
                  <i className="icofont-clock-time"></i>
                </div>
                <div className="service-inner-content media-body">
                  <h4 className="h4-md">Convenient Rentals</h4>
                  <p>Enjoy flexible rental periods to suit your schedule. Whether it's a day trip or an extended vacation, we have the right rental option for you.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Icon Box 3 */}
        </div>
      </div>
      <footer className="about-footer">
        <p>Contact us at: info@yourcarrentalservice.com</p>
        <p>Phone no: +1 (123) 456-7890</p>
        <p>Follow us on Instagram: @your_instagram_id</p>
      </footer>
    </div>
  );
};

export default CarRentalAbout;