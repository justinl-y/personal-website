import React from 'react';

import Header from '../../components/Header';
import HeroContainer from '../Hero';
import AboutContainer from '../About';
import DoContainer from '../Do';
import KnowContainer from '../Know';
import WorkContainer from '../Work';
import ContactContainer from '../Contact';
import Footer from '../../components/Footer';

const App = () => (
  <div>
    <Header />
    <HeroContainer />
    <AboutContainer />
    <DoContainer />
    <KnowContainer />
    <WorkContainer />
    <ContactContainer />
    <Footer />
  </div>
);

export default App;
