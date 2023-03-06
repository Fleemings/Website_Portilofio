import React from 'react';
import './about.css';
import ME from '../../assets/images/perfil.jpg';
import CTA from './CTA';
import Card from './card';
import { FaAward } from 'react-icons/fa';
import { BsFolderCheck } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';

const about = () => {
  return (
    <section id='about'>
      <h5>Here there is a bit more</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me perfil image' />
          </div>
        </div>
        <div className='about__content'>
          <Card name='Experience' info='Junior' icon={<FaAward />} />
          <Card
            name='Technology'
            info='+5'
            icon={<IoSchoolOutline />}
          />
          <Card name='Project' info='+4' icon={<BsFolderCheck />} />
          <div className='about__text'>
            <p>
              I'm a website developer and I enjoy creating things that
              live on the internet. My interest in full Stack web
              development started back in 2021 when I decided to
              iniciate this jorney at 42 Lisboa. I finished the full
              stack web development course at FLAG Lisboa and I
              founded passion for React and Laravel. Coding for me is
              about developing solutions and generate creative
              projects wich makes me excited for new opportunities.
            </p>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default about;
