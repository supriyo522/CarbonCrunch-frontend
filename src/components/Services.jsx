import React from 'react';
import Flower from "../assets/3d-rendering-computer-desk 1.png"
import '../styles/Services.css';

const Services = () => {
  return (
    <>
 
    <section className="services-container">
      {/* Left Side - Image */}
      <div className="services-image">
        <img src={Flower} alt="Carbon Services" />
      </div>

      {/* Right Side - Content */}
     
      <div className="services-content">
      <p style={{color:"#4caf50",padding:"20px",fontWeight:"bold"}}>OUR SERVICES</p>
        <h2>What do <span>we do?</span></h2>
        <div className="service-box">
          <h3>GHG Accounting</h3>
          <p>We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions.</p>
          <button>See More Details</button>
        </div>
        <div className="service-box">
          <h3>Carbon Reduction</h3>
          <p>We help businesses reduce their carbon footprint through AI-driven insights.</p>
          <button>See More Details</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
