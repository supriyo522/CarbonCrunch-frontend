import React from 'react';
import Firstimg from "../assets/Group 1.png";
import Secondimg from "../assets/Group 2.png";
import Thirdimg from "../assets/Group 3.png";
import Fourthimg from "../assets/Group 2 (1).png";
import Fifthimg from "../assets/Group 2 (2).png";
import Sixthimg from "../assets/Group 2 (3).png";
import '../styles/Features.css';

const Features = () => {
  return (
    <>
    <h5 style={{ color: "#4caf50", fontWeight: "bold",padding:"20px" }}>FEATURES</h5>
      <h1><span style={{ color: "#ff9800", fontWeight: "bold" }}>Why</span> CarbonCrunch?</h1>

      <section className="features">
        <div className="feature-cards">

          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={Firstimg} alt="Automated Data" />
            </div>
            <div className="feature-text">
              <h3>Automated Data Collection</h3>
              <p>Our system automates carbon data collection, saving time and reducing errors.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="featuregit initcard">
            <div className="feature-image">
              <img src={Secondimg} alt="Monitoring & Reporting" />
            </div>
            <div className="feature-text">
              <h3>Monitoring & Reporting</h3>
              <p>Effortlessly track and report carbon emissions with automated monitoring.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={Thirdimg} alt="AI-Driven Insights" />
            </div>
            <div className="feature-text">
              <h3>AI-Driven Insights</h3>
              <p>Leverage AI to uncover hidden patterns and optimize sustainability strategies.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={Fourthimg} alt="Real-Time Dashboard" />
            </div>
            <div className="feature-text">
              <h3>Real-Time Dashboard</h3>
              <p>Gain instant insights into carbon footprints with a dynamic dashboard.</p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={Fifthimg} alt="Compliance Assurance" />
            </div>
            <div className="feature-text">
              <h3>Compliance Assurance</h3>
              <p>Stay compliant with industry regulations and environmental standards.</p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src={Sixthimg} alt="Custom Reports" />
            </div>
            <div className="feature-text">
              <h3>Custom Reports</h3>
              <p>Generate tailored reports to meet specific business and sustainability goals.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Features;
