import React from 'react';
import '../styles/MediaGallery.css';
import img1 from '../assets/images/school-children-classroom.jpg';
import img2 from '../assets/images/school-children-group.jpg';
import img3 from '../assets/images/download.webp';
import img4 from '../assets/images/download-1.webp';
import img5 from '../assets/images/OIP-2.webp';
import img6 from '../assets/images/img-1.webp';

const IMAGES = [img1, img2, img3, img4, img5, img6];

function MediaGallery() {
  return (
    <section className="media-gallery" id="media-gallery">
      <div className="gallery-container">
        <h2>Media Gallery</h2>
        <p className="gallery-intro">Photos from our field programs — school-going children and community activities.</p>

        <div className="gallery-grid">
          {IMAGES.slice(0, 6).map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`School children gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaGallery;
