import React from 'react';
// Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container text-center">
        <p>&copy; 2024-2025 VisionArc.</p>
        <p><b>Disclaimer:</b> This website is not associated with an actual company but is part of the "Planspiel" web engineering project at the TU Chemnitz.</p>
        <div className="social-icons mt-10">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;