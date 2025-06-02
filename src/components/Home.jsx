import React from 'react';
import HeaderIMG from '../assets/HeaderIMG.webp';
import { homeText } from './HomePageText';

function Home() {
  return (
    <div className="header-container">
      {/* Background image */}
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${HeaderIMG})` }}
        data-aos="fade-in" // απαλό fade-in για background
      />

      {/* Content on top of image */}
      <div className="header-content">

        {/* Τα δύο blocks για τους τίτλους και τα κείμενα τους */}
        <div className="header-titles-row">

          {/* Αριστερό block με h1 και το αντίστοιχο paragraph */}
          <div className="header-left-block" data-aos="fade-right" data-aos-delay="200">
            <h1 className="header-left-title">{"<h1>Hello World!</h1>"}</h1>
            <p className="home-paragraph" data-aos="fade-up" data-aos-delay="600">
              {homeText}
            </p>
          </div>

          {/* Δεξί block με h1 και το αντίστοιχο paragraph */}
          <div className="header-right-block" data-aos="fade-left" data-aos-delay="400">
             <h1 className="header-right-title">{"<p>About me</p>"}</h1>
              <p className="home-paragraph-right" data-aos="fade-up" data-aos-delay="900">
                  Download my CV Here!
               </p>

                {/* Download κουμπί */}
               <a
                 href="/cv/MyCV.pdf" // Βάλε εδώ τη σωστή διαδρομή του αρχείου σου
                 download
                 className="cv-download-button"
                 data-aos="fade-up"
                  data-aos-delay="1000"
                 >
                   Download CV
                   </a>
            </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
