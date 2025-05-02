import React, { useRef } from "react";
import { useAnimation } from '../hooks/useAnimation';
import './styles.css';

function Skills() {
  const ref = useRef(null);
  useAnimation(ref);
  return (
    <section id="skills" ref={ref} className="animate container">
      <div className='container'>
        <h2>My Skills</h2>
        <div>
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;