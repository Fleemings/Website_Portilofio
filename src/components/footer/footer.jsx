import React from 'react';
import './footer.css';
import { RiLinkedinFill } from 'react-icons/ri';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Milena Fleming
      </a>
      <ul className='footer__links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skill'>Experience</a>
        </li>
        <li>
          <a href='#project'>Portifolio</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/milenafleming/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <RiLinkedinFill />
        </a>
        <a
          href='https://github.com/Fleemings'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
        <a
          href='https://www.instagram.com/fleemings/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsInstagram />
        </a>
      </div>
      <div className='footer__final'>
        <small>Thank you for passing by. </small>
      </div>
    </footer>
  );
};

export default footer;
