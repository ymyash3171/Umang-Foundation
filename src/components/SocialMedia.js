import React from 'react';
import '../styles/SocialMedia.css';

function SocialMedia() {
  return (
    <section className="social" id="social">
      <div className="social-container">
        <h2>Social Media</h2>
        <p className="social-intro">Follow us to stay updated with our latest programs and stories.</p>

        <div className="social-links-grid">
          <a href="#facebook" className="social-link">Facebook</a>
          <a href="#twitter" className="social-link">Twitter</a>
          <a href="#instagram" className="social-link">Instagram</a>
          <a href="#linkedin" className="social-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
