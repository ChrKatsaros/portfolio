import React from 'react';
import AboutIMG from '../assets/AboutIMG.jpeg';
import { homeText1 } from './HomePageText';

function Info() {
 return (
    <div className="info-container" data-aos="fade-right" data-aos-delay="490">
      <h1 className="info-title">About.</h1>
      <p className="info-text">
        <img src={AboutIMG} alt="About" className="about-image" data-aos="fade-down" data-aos-delay="200"  />
        {homeText1}
      </p>
    </div>
  );
}

export default Info;
