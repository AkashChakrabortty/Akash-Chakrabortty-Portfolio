import React from 'react';
import Banner from '../components/Banner/Banner';
import ContactMe from '../components/ContactMe/ContactMe';
import KnowMeMore from '../components/KnowMeMore/KnowMeMore';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const HomePage = () => {
    return (
        <div>
      <Banner />
      <KnowMeMore />
      <Skills />
      <Projects />
      <ContactMe />
        </div>
    );
};

export default HomePage;