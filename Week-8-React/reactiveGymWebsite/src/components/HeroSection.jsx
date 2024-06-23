import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="container">
          <h6 className="power">
            <p>POWERFULL</p>
          </h6>
          <h1>
            Group Practice
            <br />
            With Trainer
          </h1>
          <br />
          <p>
          Join us at POWERFULL, where every workout pushes you closer to your fitness goals. Experience group training like never before with our expert trainers and state-of-the-art facilities.
          </p>
        </div>
        <div className="home-buttons">
          <button className="sign">Sign Up</button>
          <button className="details">Details</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;