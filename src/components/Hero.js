import React, { useEffect } from 'react';
import Header from './Header';
import ScrollArrow from './ScrollArrow';

const Hero = ({ backgroundImage, title, subtitle, teaserText }) => {
  const scrollToSection = () => {
    const navbarHeight = document.getElementById('header').offsetHeight;
    const element = document.getElementById('small-description');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };


  return (
    <header role="presentation" className="hero" style={{ backgroundImage: `url(${backgroundImage})` }} alt="" aria-hidden="true">
    <div className="hero__overlay"></div>
        <Header  />
        <div className="hero__content container">
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
            <ScrollArrow scrollToSection={scrollToSection} teaserText={teaserText} aria-hidden="true" />
        </div>
    </header>
  );
}

export default Hero;
