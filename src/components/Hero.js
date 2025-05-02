import React from 'react'
import { TypeAnimation } from 'react-type-animation'; // Updated import
import useAnimation from '../hooks/useAnimation';
import './styles.css';

function Hero() {  
  const [ref, animate] = useAnimation();
  return (
    <section id="hero" className={` ${animate}`} ref={ref}>
      <div className='container'>
        <h1>Durjay Samrat</h1>
        <TypeAnimation
          sequence={[
            "I am a Full-Stack Developer",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em', display: 'inline-block' }}
          id="typing-text"
        />
      </div>
    </section>
  );
}

export default Hero;