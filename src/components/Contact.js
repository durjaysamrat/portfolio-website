import React, { useRef, } from 'react';
import useAnimation from '../hooks/useAnimation';
import './styles.css'

function Contact() {
  const ref = useRef(null);
  useAnimation(ref);

  return (
    <section id="contact" ref={ref} className='animate container'>
      <div className='container'>
        <h2>Contact Me</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;