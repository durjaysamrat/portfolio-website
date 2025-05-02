import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <main className="App">
      <ParticleBackground />
      <div className="container">
        <Navbar className='section'/>
          <Hero className='section' />
          <About className='section'/>
          <Skills className='section'/>
          <Projects className='section'/>
          <Experience className='section'/>
          <Contact className='section'/>
      </div>
    </main>
  );
}

export default App;