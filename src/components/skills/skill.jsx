import React from 'react';
import './skill.css';

import SkillCard from './skillCard';

const skill = () => {
  return (
    <section id='skill'>
      <svg
        className='wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#f4ebeb'
          fill-opacity='1'
          d='M0,192L34.3,202.7C68.6,213,137,235,206,213.3C274.3,192,343,128,411,112C480,96,549,128,617,165.3C685.7,203,754,245,823,234.7C891.4,224,960,160,1029,128C1097.1,96,1166,96,1234,106.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
        ></path>
      </svg>
      <h5>Here are the technologies I've been working with</h5>
      <h2>Recently</h2>

      <div className='container skill__container'>
        <div className='skill__frontend'>
          <h3>Frontend development</h3>
          <div className='skill__content'>
            <SkillCard lenguage='HTML5' />
            <SkillCard lenguage='CSS3' />
            <SkillCard lenguage='React' />
            <SkillCard lenguage='JavaScript' />
            <SkillCard lenguage='Bootstrap' />
            <SkillCard lenguage='TypeScript' />
          </div>
        </div>
        <div className='skill__backend'>
          <h3>Backend development</h3>
          <div className='skill__content'>
            <SkillCard lenguage='PHP' />
            <SkillCard lenguage='Laravel' />
            <SkillCard lenguage='MySQL' />
            <SkillCard lenguage='MongoDB' />
            <SkillCard lenguage='NodeJS' />
          </div>
        </div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#f4ebeb'
          fill-opacity='1'
          d='M0,192L34.3,202.7C68.6,213,137,235,206,213.3C274.3,192,343,128,411,112C480,96,549,128,617,165.3C685.7,203,754,245,823,234.7C891.4,224,960,160,1029,128C1097.1,96,1166,96,1234,106.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
        ></path>
      </svg>
    </section>
  );
};

export default skill;
