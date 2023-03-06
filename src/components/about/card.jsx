import React from 'react';
import './about.css';
const card = (props) => {
  return (
    <div className='about__cards'>
      <article className='about__card'>
        <span className='about__icon'>{props.icon}</span>
        <h5>{props.name}</h5>
        <small>{props.info}</small>
      </article>
    </div>
  );
};

export default card;
