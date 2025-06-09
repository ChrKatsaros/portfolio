import React, { useEffect, useState } from 'react';
import AOS from 'aos';                      // AOS για τα scroll animations
import 'aos/dist/aos.css';                 // CSS για την AOS

// Εισαγωγή των components της σελίδας
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Info from './Info';
import Projects from './Projects';
import Contact from './Contact';
import Preloader from './Preloader';

// Εισαγωγή των εικόνων του header (για preload)
import HeaderIMGL from '../assets/HeaderIMGL.webp';
import HeaderIMGR from '../assets/HeaderIMGR.webp';

function Layout() {
  const [loading, setLoading] = useState(true);      // Όσο είναι true, δείχνουμε τον Preloader
  const [fadeOut, setFadeOut] = useState(false);     // Χρησιμοποιείται για το ομαλό ξεθώριασμα (fade)

  // ➤ Συνάρτηση που περιμένει να φορτωθούν πλήρως και οι 2 εικόνες
  const preloadImages = () => {
    return new Promise((resolve) => {
      let loaded = 0;

      const imgL = new Image();      // Δημιουργούμε νέο image αντικείμενο
      const imgR = new Image();

      const checkLoaded = () => {
        loaded += 1;
        if (loaded === 2) resolve();   // Όταν και οι δύο εικόνες φορτωθούν, συνεχίζουμε
      };

      imgL.src = HeaderIMGL;
      imgR.src = HeaderIMGR;

      imgL.onload = checkLoaded;      // Αν η εικόνα φορτωθεί κανονικά
      imgR.onload = checkLoaded;

      imgL.onerror = checkLoaded;     // Ακόμα και αν αποτύχει η φόρτωση, συνεχίζουμε (για ασφάλεια)
      imgR.onerror = checkLoaded;
    });
  };

  // ➤ Εκτελείται όταν φορτώνεται το component
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });  // Ενεργοποιούμε την AOS για animations

    // Περιμένουμε πρώτα να φορτωθούν οι εικόνες
    preloadImages().then(() => {
      // Μικρή καθυστέρηση (200ms) για να δείξει το fadeOut animation
      setTimeout(() => {
        setFadeOut(true);  // Ενεργοποιούμε το fade-out
      }, 200);

      // Μετά από άλλες 500ms (συνολικά 700ms), κρύβουμε εντελώς τον Preloader
      setTimeout(() => {
        setLoading(false); // Εμφανίζεται κανονικά η σελίδα
      }, 700);
    });
  }, []);

  // ➤ Αν loading είναι ακόμα true, δείχνουμε τον Preloader
  if (loading) {
    return <Preloader fadeOut={fadeOut} />;
  }

  // ➤ Αν έχει τελειώσει το loading, εμφανίζεται η πλήρης σελίδα
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
