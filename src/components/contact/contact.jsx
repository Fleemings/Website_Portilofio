import React from 'react';
import './contact.css';

function contact({ title }) {
  return (
    <section id='contact'>
      <h5> What is next? </h5>
      <h2>Get in touch</h2>
      <div className='container contact__container'>
        <article className='contact__option'>
          <h4>Email</h4>
          <h5>contatomilenafleming@gmail.com</h5>
          <a href='mailto:contatomilenafleming@gmail.com'>
            Send me a message
          </a>
        </article>
        <article className='contact__option'>
          <h4>LinkedIn</h4>
          <h5>Milena Fleming</h5>
          <a
            href='https://www.linkedin.com/in/milenafleming/'
            target='__blank'
          >
            Send me a message
          </a>
        </article>
      </div>
    </section>
  );
}

export default contact;
