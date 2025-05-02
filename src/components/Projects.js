import React, { useRef } from 'react'
import useAnimation from '../hooks/useAnimation';

function Projects() {
  const ref = useRef(null);
  useAnimation(ref);

  return (
    <section id="projects" ref={ref} className='animate' >
      <div className='container'>
        <h2>My Projects</h2>
        <div className="card">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="card">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        <div className="card">
          <h3>Project 3</h3>
          <p>Description of Project 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;