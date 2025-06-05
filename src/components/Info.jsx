import React from 'react';
import AboutIMG from '../assets/AboutIMG.png';
import { homeText1 } from './HomePageText';

// 🔽 Icons
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaTerminal, FaMobileAlt 
} from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si'; // PostgreSQL icon

function Info() {
  return (
    <div className="info-container">
      
      <div className="info-content">
        <div className="info-text-block">
          <h1 className="info-title" data-aos="fade-right" data-aos-delay="190">About.</h1>
          <div className="info-text" data-aos="fade-down" data-aos-delay="490">
            <p data-aos="fade-right" data-aos-delay="990">Front End Web Developer on the making</p>
            {homeText1}
          </div>
        </div>

        <div className="infoImg">
          <img src={AboutIMG} alt="About" className="about-image" data-aos="fade-up" data-aos-delay="200" />
        </div>
      </div>

      <div className="info-skills">
        <h2>Skills.</h2>
        <p>Some of the skills I have learned through my self-taught journey in web development:</p>
        <div className="skills-icons">
          <FaHtml5 className="skill-icon" title="HTML5" color="#e34c26" />
          <FaCss3Alt className="skill-icon" title="CSS3" color="#264de4" />
          <FaJs className="skill-icon" title="JavaScript" color="#f0db4f" />
          <FaReact className="skill-icon" title="React" color="#61dafb" />
          <FaGithub className="skill-icon" title="GitHub" color="#333" />
          <FaTerminal className="skill-icon" title="Terminal / Bash" color="#4d4d4d" />
          <FaMobileAlt className="skill-icon" title="Responsive Design" color="#38bdf8" />
          <SiPostgresql className="skill-icon" title="PostgreSQL" color="#336791" />
        </div>
      </div>
      
    </div>
  );
}

export default Info;
