import React from 'react';
import './about.css';
import CV from '../../assets/docs/EN-CV-DEV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Download Resume
      </a>
      <a href='#contact' className='btn'>
        Hire me
      </a>
    </div>
  );
};

export default CTA;
