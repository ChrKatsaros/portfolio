import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Me</h2>
      <p>I'm always open to new opportunities, collaborations or freelance work. Feel free to reach out!</p>

      <ul className="contact-info">
        <li>
          <FaEnvelope /> <a href="mailto:chr.katsaros99@gmail.com">chr.katsaros99@gmail.com</a>
        </li>
        <li>
          <FaPhoneAlt /> <span>+30 6947 199 318</span>
        </li>
        <li>
          <FaGithub /> <a href="https://github.com/ChrKatsaros" target="_blank" rel="noreferrer">github.com/ChrKatsaros</a>
        </li>
        <li>
          <FaMapMarkerAlt /> <span>Athens, Greece</span>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
