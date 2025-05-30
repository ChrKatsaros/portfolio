import React from 'react';
import CircularGallery from './CircularGallery';

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-links">
        <ul>
          <li><a href="https://voile-store-project.onrender.com/" target="_blank" rel="noreferrer">Voile</a></li>
          <li><a href="https://calcwise.onrender.com/" target="_blank" rel="noreferrer"> CalcWise</a></li>
          <li><a href="https://inoteapp-frontend.onrender.com/" target="_blank" rel="noreferrer">i-Notes </a></li>
        </ul>
      </div>

      <div className="circular-gallery">
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
}

export default Projects;
