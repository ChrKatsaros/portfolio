import React from 'react';

function Footer() {
  const date = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="scroll-half-circle" onClick={scrollToTop}>
        <p>⬆</p>
      </div>
      <p>&copy; {date} Chris Katsaros</p>
    </footer>
  );
}

export default Footer;
