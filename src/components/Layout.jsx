import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';
import Preloader from './PreLoader';

function Layout() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const timer = setTimeout(() => {
      setFadeOut(true); // Ξεκίνα το fade out
    }, 2300);

    // Μετά το fade out (πχ 500ms), κρύψε τον preloader
    const fadeTimer = setTimeout(() => {
      setLoading(false);
    }, 2800); // 2300 + 500

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
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
