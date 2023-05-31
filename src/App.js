import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Certs from './components/Certs';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Certs />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
