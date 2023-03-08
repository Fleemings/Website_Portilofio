import React from 'react';
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi';
import { RiFolderUserLine } from 'react-icons/ri';
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
