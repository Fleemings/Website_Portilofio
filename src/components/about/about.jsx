import React from 'react';
import './about.css';
import ME from '../../assets/images/perfil.jpg';
import CTA from './CTA';

const about = () => {
  return (
    <section id='about'>
      <h5>Learn more</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me perfil' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__text'>
            <p>
              I'm a website developer and I enjoy creating things that
              live on the internet. My interest in Full Stack web
              development started back in 2021 when I decided to
              initiate this journey at 42 Lisboa. I finished the Full
              Stack web development course at FLAG Lisboa and I found
              a passion for React and Laravel. Coding for me is about
              developing solutions and generating creative projects
              which make me excited for new opportunities.
            </p>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default about;
