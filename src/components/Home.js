import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const handleGetStartedClick = () => {
    window.location.href = '/about';
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="https://player.vimeo.com/external/326025148.sd.mp4?s=ce16d74190dd7474eec7589e5a329179993c81e5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="get-started-button">
          <button
            onClick={handleGetStartedClick}
            style={{
              padding: '10px 20px',
              fontSize: '1.5em',
              backgroundColor: '#007bff', // Button background color
              color: '#ffffff', // Button text color
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Make A Start
          </button>
        </div>
        <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#ffffff' }}>Welcome to Our Car Service</h1>
      </div>

     
      <footer style={{ position: 'fixed', bottom: '0', width: '100%',  padding: '20px 0', textAlign: 'center', color: 'rgb(0, 0, 0' }}>
        <p>Follow us on social media:</p>
      
        <div style={{ marginTop: '0px' }}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '0 10px', color: '#ffffff' }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{ margin: '0 10px', color: '#ffffff' }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 10px', color: '#ffffff' }} />
          </a>
        </div>
      
      </footer>
     
    </div>
  );
};

export default Home;