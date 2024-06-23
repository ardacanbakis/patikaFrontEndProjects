import React from 'react';

const ClassesSection = () => {
  function yoga() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Yoga?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Yoga Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/yoga.jpg";
  }

  function group() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Group?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Group Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/group.webp";
  }

  function solo() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Solo?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Solo Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/solo.jpg";
  }

  function stretch() {
    document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Stretch?";
    document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
    document.querySelectorAll("#features-container h6")[1].innerHTML = "When comes Stretch Your Time?";
    document.querySelectorAll("#features-container p")[1].innerHTML = `Saturday-Sunday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[2].innerHTML = `Monday-Tuesday: 8:00am - 10:000am`;
    document.querySelectorAll("#features-container p")[3].innerHTML = `Wednesday-Friday: 8:00am - 10:000am`;
    document.querySelector("#features-container img").src = "img/stret.webp";
  } 

  return (
    <section className="classes" id="classes">
      <div className="class-container">
        <div className="bg-shape"></div>
        <h2>OUR CLASSES</h2>
        <div className="line"></div>
        <p>
        Discover our diverse class offerings, from yoga to high-intensity interval training, all designed to improve your health and boost your performance..
        </p>
        <div className="button-container">
          <button id="yoga" onClick={yoga}>Yoga</button>
          <button id="group" onClick={group}>Group</button>
          <button id="solo" onClick={solo}>Solo</button>
          <button id="stretch" onClick={stretch}>Stretching</button>
        </div>
        <div id="features-container">
          <div>
            <h6>Discover Yoga at POWER</h6>
            <p>
            Yoga at POWERFULL is tailored for both beginners and seasoned practitioners, enhancing flexibility, strength, and overall well-being through carefully structured asanas and breathing exercises.
            </p>
            <h6>Yoga Class Schedule</h6>
            <p>Saturday-Sunday: 8:00am - 10:000am</p>
            <p>Monday-Tuesday: 8:00am - 10:000am</p>
            <p>Wednesday-Friday: 8:00am - 10:000am</p>
          </div>
          <img src="./images/yoga.jpg" alt="Yoga" />
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;