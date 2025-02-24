import React from 'react';
import SmallDescription from '../components/SmallDescription';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
        <Hero />
        <SmallDescription />
        <Quote />
        <Footer />
    </div>
  );
}

export default About;