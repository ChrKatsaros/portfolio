import React from 'react';

import { homeText1 } from './HomePageText';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import about9 from '../assets/about9.jpg';
import about5 from '../assets/about5.jpg';


// Icons
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaTerminal, FaMobileAlt
} from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

function Info() {
  const cards = [
    {
      image: about9,
      alt: 'Web development passion',
      text: 'I love creating and learning how to build modern websites.'
    },
    {
      image: about4,
      alt: 'UI / UX learner',
      text: 'Exploring UI & UX design step by step to improve user experience.'
    }
  ];

  return (
    <div className="info-container">

      <div className="info-content">
        <div className="info-text-block">
          <h1 className="info-title" data-aos="fade-right" data-aos-delay="190"><span class="realistic-marker-highlight"> abo</span>ut.</h1>
          <div className="info-text" data-aos="fade-down" data-aos-delay="490">
  <p data-aos="fade-right" data-aos-delay="990">Front End Web Developer on the making</p>
  <div
    dangerouslySetInnerHTML={{ __html: homeText1 }}
  />
</div>

        </div>

        <div className="infoImg">
          <div className="left-img">
            <img src={about2} alt="Vertical layout" data-aos="fade-right" data-aos-delay="190"  />
          </div>
          <div className="right-imgs">
            <img src={about3} alt="Right top" data-aos="fade-left" data-aos-delay="190" />
            <img src={about5} alt="Right bottom" data-aos="fade-up" data-aos-delay="190" />
          </div>
        </div>
      </div>

      <div className="info-image-row">
        {cards.map((card, index) => (
          <div key={index} className="image-hover-card">
            <img src={card.image} alt={card.alt} />
            <div className="overlay-text">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-skills">
        <h2  className='melting'>Skills.</h2>
        <p>Some of the skills I have learned through my self-taught journey in web development:</p>

        <div className="skills-carousel">
          <div className="skills-track">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <FaHtml5 className="skill-icon" title="HTML5" color="#e34c26" />
                <FaCss3Alt className="skill-icon" title="CSS3" color="#264de4" />
                <FaJs className="skill-icon" title="JavaScript" color="#f0db4f" />
                <FaReact className="skill-icon" title="React" color="#61dafb" />
                <FaGithub className="skill-icon" title="GitHub" color="#333" />
                <FaTerminal className="skill-icon" title="Terminal" color="#4d4d4d" />
                <FaMobileAlt className="skill-icon" title="Responsive Design" color="#38bdf8" />
                <SiPostgresql className="skill-icon" title="PostgreSQL" color="#336791" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Info;
