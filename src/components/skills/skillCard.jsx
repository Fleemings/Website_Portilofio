import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import './skill.css';
const skillCard = (props) => {
  return (
    <>
      <article className='skill__details'>
        <AiOutlineCheckCircle className='skill__details-icon' />
        <div>
          <h4>{props.lenguage}</h4>
        </div>
      </article>
    </>
  );
};

export default skillCard;
