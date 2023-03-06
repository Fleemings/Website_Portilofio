import React from 'react';
import './project.css';
import data from './projectData';

function project() {
  return (
    <section id='project'>
      <h5>view the archive</h5>
      <h2>Other Noteworthy Projects</h2>

      <div className='container project__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='project__item'>
              <div className='project__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='project__item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                >
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default project;
