import React from 'react';
import HeaderIMG from '../assets/HeaderIMG.webp';
import { homeText } from './HomePageText';

function Home() {
  return (
    <>
      <div className="header-container">
        {/* Background image */}
        <div
          className="header-bg"
          style={{ backgroundImage: `url(${HeaderIMG})` }}
          data-aos="fade-in"
        />

        {/* Περιεχόμενο μόνο για desktop */}
        <div className="header-content">
          <div className="header-titles-row">
            <div className="header-left-block" data-aos="fade-right" data-aos-delay="200">
              <h1 className="header-left-title">{"<h1>Hello World!</h1>"}</h1>
              <p className="home-paragraph" data-aos="fade-up" data-aos-delay="600">
                {homeText}
              </p>
            </div>

            <div className="header-right-block" data-aos="fade-left" data-aos-delay="400">
              <h1 className="header-right-title">{"<p>About me</p>"}</h1>
              <p className="home-paragraph-right" data-aos="fade-up" data-aos-delay="900">
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
      <div className="header-mobile-content">
        <h1 className="header-left-title">{"<h1>Hello World!</h1>"}</h1>
        <p className="home-paragraph">{homeText}</p>
               <a
                href="/cv/ChristosKatsaros_CV.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="cv-download-button"
                >
                View CV
               </a>
      </div>
    </>
  );
}

export default Home;
