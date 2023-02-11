import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Skill from './components/skills/skill';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
