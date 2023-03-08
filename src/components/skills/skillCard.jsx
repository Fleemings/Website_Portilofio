import React from 'react';

import './skill.css';
const skillCard = (props) => {
  return (
    <>
      <article className='skill__details'>
        <div>
          <h4> - {props.lenguage}</h4>
        </div>
      </article>
    </>
  );
};

export default skillCard;
