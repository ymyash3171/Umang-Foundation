import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Umang Foundation</h1>
          <p>Empowering Lives Through Education & Social Service</p>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#story-of-change">Story of Change</a></li>
            <li><a href="#be-the-change">Be the Change</a></li>
            <li><a href="#media-gallery">Media Gallery</a></li>
            <li><a href="#photo-gallery">Photo Gallery</a></li>
            <li><a href="#partners">Corporate Partners</a></li>
            <li><a href="#social">Social Media</a></li>
            <li><a href="#get-involved">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
