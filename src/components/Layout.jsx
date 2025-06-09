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

// Εικόνες του Info (για preload)
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import about5 from '../assets/about5.jpg';
import about9 from '../assets/about9.jpg';

function Layout() {
  const [loading, setLoading] = useState(true);      // Όσο είναι true, δείχνουμε τον Preloader
  const [fadeOut, setFadeOut] = useState(false);     // Χρησιμοποιείται για το ομαλό ξεθώριασμα (fade)

  // ➤ Λίστα με όλες τις εικόνες που πρέπει να φορτωθούν
  const imagesToPreload = [
    HeaderIMGL,
    HeaderIMGR,
    about2,
    about3,
    about4,
    about5,
    about9,
  ];

  // ➤ Συνάρτηση που περιμένει να φορτωθούν όλες οι εικόνες
  const preloadImages = () => {
    return new Promise((resolve) => {
      let loadedCount = 0;
      const totalImages = imagesToPreload.length;

      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;

        // Ανεξάρτητα αν η φόρτωση πετύχει ή αποτύχει, μετράμε την εικόνα ως φορτωμένη
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            resolve();  // Όταν φορτωθούν όλες, συνεχίζουμε
          }
        };
      });
    });
  };

  // ➤ Εκτελείται όταν φορτώνεται το component
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });  // Ενεργοποιούμε την AOS για animations

    // Περιμένουμε πρώτα να φορτωθούν όλες οι εικόνες
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
