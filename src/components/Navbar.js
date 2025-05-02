import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import './styles.css';

function Navbar() {
  const navRef = useRef(null);
  useAnimation(navRef);
    const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <nav className="animate" ref={navRef}>
      <ul>
        <li><a href="#hero" onClick={() => handleScroll('hero')}>Home</a></li>
        <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
        <li><a href="#skills" onClick={() => handleScroll('skills')}>Skills</a></li>
        <li><a href="#projects" onClick={() => handleScroll('projects')}>Projects</a></li>
        <li><a href="#experience" onClick={() => handleScroll('experience')}>Experience</a></li>
        <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;