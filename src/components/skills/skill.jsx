import React from 'react';
import './skill.css';

import SkillCard from './skillCard';

const skill = () => {
  return (
    <section id='skill'>
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
    </section>
  );
};

export default skill;
