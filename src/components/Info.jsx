import React from 'react';
import AboutIMG from '../assets/AboutIMG.png';
import { homeText1 } from './HomePageText';

function Info() {
 return (
    <div className="info-container" >
      <h1 className="info-title" data-aos="fade-right" data-aos-delay="190" >About.</h1>
      <div className='info-border'>
      <p className="info-text" data-aos="fade-down" data-aos-delay="490" >
        <img src={AboutIMG} alt="About" className="about-image" data-aos="fade-up" data-aos-delay="200"  />
        {homeText1}
      </p>
    </div>
    </div>
  );
}

export default Info;
