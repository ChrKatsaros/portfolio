import React from 'react';
import HeaderIMGL from '../assets/HeaderIMGL.webp';
import HeaderIMGR from '../assets/HeaderIMGR.webp';
import { homeText } from './HomePageText';

function Home() {
  return (
    <>
      <div className="header-container">
        {/* Split Backgrounds */}
        <div
          className="header-bg-left"
          style={{ backgroundImage: `url(${HeaderIMGL})` }}
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="1800"
          data-aos-offset="500"
          data-aos-easing="ease-in-out"
        />
        <div
          className="header-bg-right"
          style={{ backgroundImage: `url(${HeaderIMGR})` }}
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="1800"
          data-aos-offset="500"
          data-aos-easing="ease-in-out"
        />

        {/* Περιεχόμενο μόνο για desktop */}
        <div className="header-content">
          <div className="header-titles-row">
            <div
              className="header-left-block"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="header-left-title">{" Hello World! "}</h1>
              <p
                className="home-paragraph"
                data-aos="fade-up"
                data-aos-delay="880"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                {homeText}
              </p>
            </div>

            <div
              className="header-right-block"
              data-aos="fade-left"
              data-aos-delay="900"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="header-right-title">{"About me "}</h1>
              <p
                className="home-paragraph-right"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                View my CV Here!
              </p>
              <a
                href="/cv/ChristosKatsaros_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-download-button"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Περιεχόμενο μόνο για mobile */}
      <div class="background-decor">
  <span class="circle circle-1"></span>
  <span class="square square-1"></span>
  <span class="circle circle-2"></span>
</div>

      <div className="header-mobile-content">
       
        <p
          className="home-paragraph"
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {homeText}
        </p>
        <a
          href="/cv/ChristosKatsaros_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-download-button"
           data-aos="fade-left"
          data-aos-delay="1500"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          
        >
          View CV
        </a>
      </div>
    </>
  );
}

export default Home;
