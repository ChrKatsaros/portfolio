import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // χρόνος animation σε ms
      once: false,    // animation και κάθε φορά που κάνεις scroll ξανά
    });
  }, []);

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
