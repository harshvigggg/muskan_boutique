import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <p>Explore our boutique's infrastructure and activities.</p>
      <div className="gallery-grid">
        <img src="/images/infrastructure.jpg" alt="Infrastructure" />
        <img src="/images/owner.jpg" alt="Owner" />
        <img src="/images/raw-material.jpg" alt="Raw Material" />
      </div>
    </div>
  );
};

export default Gallery;