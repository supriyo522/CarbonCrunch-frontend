import React from "react";
import "../styles/StatsSection.css";

const statsData = [
  {
    percentage: "98%",
    description: "Of CEOs Agree Sustainability Is Their Responsibility",
    bgColor: "dark",
  },
  {
    percentage: "3X",
    description:
      "ESG High Performers Deliver A Higher Total Shareholder Return",
    bgColor: "green",
  },
  {
    percentage: "37%",
    description:
      "Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track",
    bgColor: "light",
  },
  {
    percentage: "18%",
    description:
      "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050",
    bgColor: "dark",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      {statsData.map((stat, index) => (
        <div key={index} className={`stat-card ${stat.bgColor}`}>
          <h2>{stat.percentage}</h2>
          <p>{stat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
