import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import listSvg from "../assets/list.svg";
import DropdownMenu from './DropDownMenu';
import lightOff from "../assets/lightbulb-off-white.svg"

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
  <div className="logo" > 
   
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
      <li><a href="#about">about</a></li>
      <li><a href="#projects">projects</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>

    <ul className="favicons">
      <li><a href="https://github.com/ChrKatsaros" target="_blank"><FaGithub /></a></li>
      <li><a href="mailto:chr.katsaros99@gmail.com"><FaEnvelope /></a></li>
      <li><a href="tel:+306947193918"><FaPhone /></a></li>
    </ul>
  </div>

    <DropdownMenu isOpen={isOpen} onClose={closeDropdown} />

</nav>

  );
}

export default Navbar;
