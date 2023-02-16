import React from 'react';
import './header.css';
import ME from '../../assets/images/perfil.jpg';
import HeaderSocials from './headerSocials';

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Milena Fleming</h1>
        <h5 className='text-light'>Full Stack Web Developer</h5>

        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>
          Let's go down
        </a>
      </div>
    </header>
  );
};

export default header;
