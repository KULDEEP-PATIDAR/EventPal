// src/components/Navbar.jsx
import React from 'react';
import Home from './Home';
import Discover from './Discover';
import Bookmarks from '../pages/Bookmarks';
import CreateEvent from '../pages/CreateEvent';
import EventCard from './EventCard';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>EventPal</h1>
      <ul className="nav-links">
        <li><a href="/"> Home </a></li>
        <li><a href="/create">Create Event</a></li>
        <li><a href="/discover"> Discover </a></li>
       
        <li><a href="/bookmarks"> Bookmarks </a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
