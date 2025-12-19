import React from 'react';
import '../styles/MediaGallery.css';
import photo1 from '../assets/images/school-children-classroom.jpg';
import photo2 from '../assets/images/school-children-group.jpg';
import photo3 from '../assets/images/download.webp';
import photo4 from '../assets/images/download-1.webp';
import photo5 from '../assets/images/OIP-2.webp';
import photo6 from '../assets/images/img-1.webp';

const PHOTO_IMAGES = [photo1, photo2, photo3, photo4, photo5, photo6];

function PhotoGallery() {
  return (
    <section className="photo-gallery" id="photo-gallery">
      <div className="gallery-container">
        <h2>Photo Gallery</h2>
        <p className="gallery-intro">A curated set of photos showing children in school and learning environments.</p>

        <div className="gallery-grid">
          {PHOTO_IMAGES.slice(0, 6).map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`School and children gallery ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
