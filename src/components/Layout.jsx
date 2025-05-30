import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from './Footer';
import Threads from './Threads';

function Layout() {
  const location = useLocation();
  const showThreads = location.pathname !== '/projects';

  return (
    <div className="layout">
      <aside className="sidebar">
        <Navbar />
      </aside>

      <div className="main-content">
        <div className='name-proffesion'>
          <h1>Chris Katsaros</h1>
          <p>Junior Web Developer</p>
        </div>

        {showThreads && (
          <div className="animated-background">
            <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          </div>
        )}

        {/* Main outlet πάντα εμφανίζεται */}
        <main className={showThreads ? "page-content" : "projects-wrapper"}> {/* Αλλαζει η κλαση οταν παει στο projects ωσετ να λειτουργει σωστα*/ }
         <div key={location.pathname} className={location.pathname !== '/' ? 'page-fade' : ''}>
  <Outlet />
</div>

        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout;
