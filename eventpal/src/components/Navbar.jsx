// src/components/Navbar.jsx
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>IndiaEvents</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Create Event</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Event Details</a></li>
        <li><a href="#">My Bookmark</a></li>
        <li><a href="#">Calendar View</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
