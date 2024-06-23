import React from 'react';

const BmiSection = () => {
  return (
    <div className="bmi-container">
      <div className="calculate-container">
        <h1>BMI Calculator</h1>
        <p>
          A higher BMI increases the chance of developing long-term conditions,
          such as type 2 diabetes and heart disease. The BMI calculation is just
          one measure of health.
          <br />
          <br />
          It cannot tell the difference between muscle and fat. For example, if
          you have a lot of muscle, you may be classed as overweight or obese
          despite having low body fat. This is why you may get a better idea of
          your overall health from measuring your waist.
        </p>
        <input id="height" type="text" placeholder="Your Height" />
        <span>cm</span>
        <input id="weight" type="text" placeholder="Your Weight" />
        <span>kg</span>
      </div>
      <div className="img-container">
        <h4>Your BMI</h4>
        <img src="/images/bmi-index.jpg" alt="BMI Index" />
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default BmiSection;