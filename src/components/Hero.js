import React from 'react';
import Header from './Header';
import ScrollArrow from './ScrollArrow';

const imageSources = {
  home: {
    '476': require('../img/hero/home-600.jpg'),
    '768': require('../img/hero/home-1024.jpg'),
    '1280': require('../img/hero/home-1280.jpg'),
    '1920': require('../img/hero/home-1920.jpg'),
  },
  projects: {
    '476': require('../img/hero/projects-600.jpg'),
    '768': require('../img/hero/projects-1024.jpg'),
    '1280': require('../img/hero/projects-1280.jpg'),
    '1920': require('../img/hero/projects-1920.jpg'),
  },
  expertise: {
    '476': require('../img/hero/expertise-600.jpg'),
    '768': require('../img/hero/expertise-1024.jpg'),
    '1280': require('../img/hero/expertise-1280.jpg'),
    '1920': require('../img/hero/expertise-1920.jpg'),
  },
  blog: {
    '476': require('../img/hero/blog-600.jpg'),
    '768': require('../img/hero/blog-1024.jpg'),
    '1280': require('../img/hero/blog-1280.jpg'),
    '1920': require('../img/hero/blog-1920.jpg'),
  },
  contact: {
    '476': require('../img/hero/contact-600.jpg'),
    '768': require('../img/hero/contact-1024.jpg'),
    '1280': require('../img/hero/contact-1280.jpg'),
    '1920': require('../img/hero/contact-1920.jpg'),
  },
  404: {
    '476': require('../img/hero/404-600.jpg'),
    '768': require('../img/hero/404-1024.jpg'),
    '1280': require('../img/hero/404-1280.jpg'),
    '1920': require('../img/hero/404-1920.jpg'),
  },
};

const Hero = ({ backgroundBaseName, dynamicSources, title, subtitle, title_2, teaserText, backgroundAlt }) => {
  const scrollToSection = () => {
    const navbarHeight = document.getElementById('header')?.offsetHeight || 0;
    const element = document.getElementById('small-description');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const staticSources = backgroundBaseName ? imageSources[backgroundBaseName] : null;
  const sources = dynamicSources
    ? (typeof dynamicSources === 'object'
        ? dynamicSources
        : {
            '476': dynamicSources,
            '768': dynamicSources,
            '1280': dynamicSources,
            '1920': dynamicSources
          })
    : staticSources;

  return (
    <header className="hero" role="banner">
      <div className="hero__overlay" aria-hidden="true"></div>
      <Header />

      <picture>
        <source media="(min-width: 1280px)" srcSet={sources['1920']} />
        <source media="(min-width: 768px)" srcSet={sources['1280']} />
        <source media="(min-width: 476px)" srcSet={sources['768']} />
        <img
          src={sources['476']}
          alt={backgroundAlt}
          aria-hidden="true"
          className="hero__background"
        />
      </picture>

      <div className="hero__content container">
        {title && <h1>{title}</h1>}
      </div>

        <ScrollArrow scrollToSection={scrollToSection} teaserText={teaserText} aria-hidden="true" />
    </header>
  );
};

export default Hero;