import React from 'react';
import mouseIcon from '../assets/mouse.svg'; // το pect σου

function Footer() {
  const date = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 return (
  <footer className="footer">
    <div className="scroll-half-circle" onClick={scrollToTop}>
     <img src={mouseIcon} alt="Scroll to top" width={68} height={68} />

    </div>
    <p>&copy; {date} Chris Katsaros</p>
  </footer>
);
}

export default Footer;
