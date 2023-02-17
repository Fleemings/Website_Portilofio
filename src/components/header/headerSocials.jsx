import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/milenafleming/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
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
  );
};

export default headerSocials;
