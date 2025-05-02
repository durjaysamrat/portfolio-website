import React, { useRef, useEffect } from 'react';
import useAnimation from '../hooks/useAnimation';

function About() {
  const ref = useRef(null);
  const isVisible = useAnimation(ref);
    return (
        <section id="about" ref={ref} className={isVisible ? 'animate' : ''}>
            <div className='container'>
                <h2 >About Me</h2>
                <p >
                    I am a passionate full-stack developer with a love for building
                    innovative and user-friendly web applications. I enjoy tackling complex
                    challenges and crafting elegant solutions that make a difference.
                </p>
            </div>
        </section>
    );
}

export default About;