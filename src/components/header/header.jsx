import React from 'react';
import './header.css';
import HeaderSocials from './headerSocials';
import Blob from './blob';
import Typical from 'react-typical';

const header = () => {
  return (
    <header>
      <section id='#home'>
        <h5> Hi there, </h5>
        <h2>My name is Milena Fleming</h2>
        <p className='header__text'>
          I'm a
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[' Full Stack', 1000, ' Web Developer', 1000]}
          />
        </p>
      </section>
      <div className='container header__container'>
        <Blob style='blob' />
        <Blob style='blob-second' />

        <HeaderSocials />
      </div>
    </header>
  );
};

export default header;
