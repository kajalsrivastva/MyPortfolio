import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import FeaturedProjects from '../sections/FeaturedProjects';
import Architecture from '../sections/Architecture';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Architecture />
      <Contact />
    </main>
  );
};

export default Home;
