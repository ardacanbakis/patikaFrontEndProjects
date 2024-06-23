import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src="images/logo.png" alt="band" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit.ipsum
          dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut
          iste. Amet consectetur adipisicing elit
        </p>
        <div className="footer-container">
          <div className="info">
            <h3>Information</h3>
            <a href="#">About Us</a>
            <a href="#">Classes</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <h3>Helpful Links</h3>
            <a href="#">Services</a>
            <a href="#">Supports</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;