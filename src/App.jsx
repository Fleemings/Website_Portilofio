import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Skill from './components/skills/skill';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Fade top distance='20%' duration={1500}>
        <About />
        <Skill />
        <Project />
        <Contact />
      </Fade>
      <Footer />
    </>
  );
};

export default App;
