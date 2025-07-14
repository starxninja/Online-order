import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-bg">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="grade boost logo" height="40" />
          <span className="logo-text">grade <b>BOOST</b></span>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="get-started">Get Started</button>
      </nav>
      <div className="hero-content">
        <h1>Expert Academic<br />Writing Services</h1>
        <p>Professional assistance for all your academic writing needs.<br />Elevate your academic success with our expert writers.</p>
        <button className="cta-btn">Get Started Today</button>
      </div>
      <a href="https://wa.me/" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default Home; 