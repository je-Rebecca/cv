import React from 'react';
import Experience from './Experience';
import Footer from './Footer';
import Profile from './Profile';
import Project from './Project';
import Skill from './Skill';

const Home = () => {
  return (
    <div>
      <Profile />
      <Skill />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
};

// const Wrap = styled.div`
// width =
// `

export default Home;
