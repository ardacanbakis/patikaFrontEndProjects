import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClassesSection from './components/ClassesSection';
import Box from './components/Box';
import TrainerSection from './components/TrainerSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BmiSection from './components/BmiSection';
import Equipment from './components/Equipment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Box />
      <ClassesSection />
      <BmiSection />
      <TrainerSection />
      <Equipment />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;