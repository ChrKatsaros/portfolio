import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import listSvg from '../assets/list.svg';
import DropdownMenu from './DropDownMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/favicon.ico" alt="Logo" />
      </div>

      {/* ΜΟΝΟ το hamburger, τελείως δεξιά */}
      {!isOpen && (
        <div className="dropdown-wrapper">
          <img
            src={listSvg}
            onClick={toggleDropdown}
            className="hamburger-button"
            alt="Menu"
          />
        </div>
      )}

      {/* Αυτά κρύβονται σε κινητό */}
      <div className="nav-links">
        <ul className="main-links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>

        <ul className="favicons">
          <li>
            <a
              href="https://github.com/ChrKatsaros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="mailto:chr.katsaros99@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christos-katsaros-57a21a315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <DropdownMenu isOpen={isOpen} onClose={closeDropdown} />
    </nav>
  );
}

export default Navbar;
