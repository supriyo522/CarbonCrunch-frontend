import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import Features from './components/Features';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Features />
      <Services />
    </div>
  );
}

export default App;
