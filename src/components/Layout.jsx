import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';
import Preloader from './Preloader';

// εισάγουμε τις εικόνες εδώ
import HeaderIMGL from '../assets/HeaderIMGL.webp';
import HeaderIMGR from '../assets/HeaderIMGR.webp';

function Layout() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // περιμένουμε να φορτώσουν οι εικόνες
  const preloadImages = () => {
    return new Promise((resolve) => {
      let loaded = 0;

      const imgL = new Image();
      const imgR = new Image();

      const checkLoaded = () => {
        loaded += 1;
        if (loaded === 2) resolve();
      };

      imgL.src = HeaderIMGL;
      imgR.src = HeaderIMGR;

      imgL.onload = checkLoaded;
      imgR.onload = checkLoaded;

      imgL.onerror = checkLoaded;
      imgR.onerror = checkLoaded;
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    preloadImages().then(() => {
      // αφού φορτώσουν οι εικόνες, περιμένουμε λίγο για fade
      setTimeout(() => {
        setFadeOut(true);
      }, 200); // μικρή αναμονή πριν fade

      setTimeout(() => {
        setLoading(false);
      }, 700); // +500ms για το fade
    });
  }, []);

  if (loading) {
    return <Preloader fadeOut={fadeOut} />;
  }

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <main className="page-content">
        <section id="home"><Home /></section>
        <section id="about"><Info /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
