// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './home.css'; // optional

const T= () => {
  const typedRef = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Discover', 'Create', 'Manage'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Hello Everyone,👋</h1>
      <h2 className="home-subtitle">
        Here you can <span ref={el} className="typed-text"></span> Events.
      </h2>
    </div>
  );
};

export default T;
