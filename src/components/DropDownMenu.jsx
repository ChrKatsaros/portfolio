import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

// Δέχεται prop `isOpen` για smooth εμφάνιση
function DropdownMenu({ isOpen, onClose }) {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>

       <div className="dropdown-close-button">
         <IoMdClose
            onClick={onClose}
            className="hamburger-button"
             style={{ fontSize: '28px', cursor: 'pointer', fill: 'inherit' }}
          />


      </div>

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
  );
}

export default DropdownMenu;
