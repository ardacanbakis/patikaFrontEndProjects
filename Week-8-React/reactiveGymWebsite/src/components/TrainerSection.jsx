import React from 'react';

const TrainerSection = () => {
  return (
    <section className="trainer-container" id="trainer">
      <div className="section-header">
        <h2>Meet Our Trainers</h2>
        <div className="underline"></div>
      </div>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil
        recusandae. Atque, illum corporisodio pariatur ad harum non, molestias
        maiores molestiae sapiente perferendis veniam earum fugit ipsum
        repellendus architecto ducimus explicabo reiciendis alias quasi culpa
        libero amet similique nisi!
      </p>
      <div className="trainer-container">
        <div className="trainer">
          <img src="images/trainer1.jpg" alt="Trainer 1" />
          <div className="info-box">
            <h3 className="trainer-name">John Doe</h3>
            <p className="trainer-role">Yoga Instructor</p>
          </div>
        </div>
        <div className="trainer">
          <img src="images/trainer2.jpg" alt="Trainer 2" />
          <div className="info-box">
            <h3 className="trainer-name">Jane Smith</h3>
            <p className="trainer-role">Fitness Trainer</p>
          </div>
        </div>
        <div className="trainer">
          <img src="images/trainer3.jpg" alt="Trainer 3" />
          <div className="info-box">
            <h3 className="trainer-name">Michael Johnson</h3>
            <p className="trainer-role">Personal Trainer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;