import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

// Δέχεται prop `isOpen` για smooth εμφάνιση
function DropdownMenu({ isOpen, onClose }) {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
         <ul className="main-links-mobile">
            <li><a href="#about" onClick={onClose}>about</a></li>
            <li><a href="#projects" onClick={onClose}>projects</a></li>
            <li><a href="#contact" onClick={onClose} >contact</a></li>
       </ul>
       
             <ul className="favicons-mobile">
               <li>
                 <a href="https://github.com/ChrKatsaros" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                 </a>
               </li>
               <li>
                 <a href="mailto:chr.katsaros99@gmail.com">
                    <FaEnvelope />
                 </a>
               </li>
               <li>
                 <a href="tel:+306947193918">
                   <FaPhone />
                 </a>
               </li>
             </ul>
    </div>
  );
}

export default DropdownMenu;
