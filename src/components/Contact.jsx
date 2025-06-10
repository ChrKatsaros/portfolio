import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import contactIMG from '../assets/contact.png';

function Contact() {
  return (
    <section className="contact-container">
      {/* Αριστερά: Τίτλος + Πληροφορίες */}
      <div className="contact-left" data-aos="fade-right" data-aos-delay="200">
        <h1 className="contact-title"><span class="realistic-marker-highlight"> con</span>tact</h1>
        <p className="contact-description">
          I'm always open to new opportunities, collaborations or freelance work. Feel free to reach out!
        </p>

        <ul className="contact-info">
          <li data-aos="fade-up" data-aos-delay="300">
            <FaEnvelope /> <a href="mailto:chr.katsaros99@gmail.com">chr.katsaros99@gmail.com</a>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/christos-katsaros-57a21a315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/christos-katsaros
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="500">
            <FaGithub /> <a href="https://github.com/ChrKatsaros" target="_blank" rel="noreferrer">github.com/ChrKatsaros</a>
          </li>
          <li data-aos="fade-up" data-aos-delay="600">
            <FaMapMarkerAlt /> <span>Athens, Greece</span>
          </li>
        </ul>
      </div>

      {/* Δεξιά: Εικόνα */}
      <div className="contact-right" data-aos="fade-left" data-aos-delay="400">
        <img src={contactIMG} alt="Contact" />
      </div>
    </section>
  );
}

export default Contact;
