import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;