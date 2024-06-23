import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    function changeBg() {
      const navbar = document.querySelector(".navbar-container");
      const scrollValue = window.scrollY;
      if (scrollValue < 700) {
        navbar.classList.remove("bgColor");
      } else {
        navbar.classList.add("bgColor");
      }
    }
    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <>
      <header>
        <nav className="navbar-container">
          <div className="logo">
            <img src="./images/logo.png" alt="band" />
          </div>
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label htmlFor="menu-btn" className="menu-icon">
            <i className="fa-solid fa-bars menu-hmbgr"></i>
          </label>
          <div className="bar">
            <a href="#home">Home</a>
            <a href="#classes">Classes</a>
            <a href="#trainer">Trainer</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="#joinus" className="join-us-link">JOIN US</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;