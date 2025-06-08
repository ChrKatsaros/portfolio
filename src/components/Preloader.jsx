import React from 'react';

function Preloader({ fadeOut }) {
  return (
    <div style={{
      ...styles.overlay,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.5s ease',
    }}>
      <div style={styles.text}>Chris Katsaros Portfolio</div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  text: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#ffffff',
  }
};

export default Preloader;
