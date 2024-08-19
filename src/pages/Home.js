import React from 'react';
import SmallDescription from '../components/SmallDescription';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import SelectedWork from '../components/SelectedWork';

const Home = () => {
  return (
    <div>
        <Hero />
        <SmallDescription />
        <SelectedWork />
        <Quote />
        <Footer />
    </div>
  );
}

export default Home;