import React from 'react';

const ReviewSection = () => {
  return (
    <section className="review" id="review">
      <div className="review-container">
        <h2>REVIEW CLIENT</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="client-container">
          <div className="review">
            <div className="client">
              <img src="images/client1.jpg" />
              <p>
                <span>Diet Expert</span>
                <br />
                CFO
              </p>
            </div>
            <div className="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                nihil recusandae. Atque, illum corporisodio pariatur ad harum
                non, molestias maiores molestiae sapiente perferendis veniam
                earum fugit ipsum repellendus architecto ducimus explicabo
                reiciendis alias quasi culpa libero amet similique nisi!
              </p>
            </div>
          </div>
          <div className="review">
            <div className="client">
              <img src="images/client2.jpg" />
              <p>
                <span>Cardio Trainer</span>
                <br />
                CEO
              </p>
            </div>
            <div className="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                nihil recusandae. Atque, illum corporisodio pariatur ad harum
                non, molestias maiores molestiae sapiente perferendis veniam
                earum fugit ipsum repellendus architecto ducimus explicabo
                reiciendis alias quasi culpa libero amet similique nisi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;