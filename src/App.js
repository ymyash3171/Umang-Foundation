import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Internship from './components/Internship';
import StoryOfChange from './components/StoryOfChange';
import BeTheChange from './components/BeTheChange';
import MediaGallery from './components/MediaGallery';
import PhotoGallery from './components/PhotoGallery';
import CorporatePartners from './components/CorporatePartners';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Internship />
      <StoryOfChange />
      <BeTheChange />
      <MediaGallery />
      <PhotoGallery />
      <CorporatePartners />
      <Impact />
      <GetInvolved />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
