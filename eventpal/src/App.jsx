// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import './index.css'; // make sure this is imported
import poster from './assets/poster.jpg'; // needed for bundler to include the image
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${poster})` }}>
        <div className="home-overlay">
          Major Indian Events: Diwali, Holi, New Year...
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
