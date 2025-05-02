import React, { useRef, useEffect } from 'react';
import useAnimation from '../hooks/useAnimation';

function Experience() {
  const ref = useRef(null);
  const isVisible = useAnimation(ref);
  return (
    <section id="experience" className={`${isVisible ? 'animate' : ''}`} ref={ref}>
      <div className="container">        
        <div className="experience-content">
          <h2>My Experience</h2>


          <p>
            I have worked on various projects, gaining experience in both front-end and back-end development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;