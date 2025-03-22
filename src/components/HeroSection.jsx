import React from 'react';
import Hero from "../assets/Rectangle 4411.png";
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <button className="environment-btn">Let's Save our Environment</button>

        <h1>Optimize your eco reporting with  
          <button style={{background:"#ff9800",color:"white",padding:"10px 20px",borderRadius:"50px",fontSize:"30px",fontWeight:"bold",border:"none"}}>CARBON CRUNCH</button>
        </h1>

        <p><span style={{ color: "#4caf50" }}>95%</span> Accurate Carbon Calculations Trusted by Industry Leaders</p>
        
        <div className="cta-buttons">
          <button className="free-calc">Free Calculator</button>
          <button className="book-demo">Book Demo</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="Eco Reporting" />
      </div>
    </section>
  );
};

export default HeroSection;
