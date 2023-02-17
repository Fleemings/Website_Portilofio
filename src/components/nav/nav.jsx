import React from 'react';
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi';
import { RiFolderUserLine } from 'react-icons/ri';
import { BsBookmarkCheck } from 'react-icons/bs';
import { BiBookHeart } from 'react-icons/bi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <HiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <RiFolderUserLine />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookHeart />
      </a>
      <a
        href='#skill'
        onClick={() => setActiveNav('#skill')}
        className={activeNav === '#skill' ? 'active' : ''}
      >
        <BsBookmarkCheck />
      </a>
      <a
        href='#project'
        onClick={() => setActiveNav('#project')}
        className={activeNav === '#project' ? 'active' : ''}
      >
        <MdOutlineDesignServices />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
