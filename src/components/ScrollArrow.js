import React from 'react';

const ScrollArrow = ({ scrollToSection, teaserText }) => {
  return (
    <div className="teaser">
    <div className="teaser__text" aria-hidden="true">
      <p><em>{teaserText}</em></p>
    </div>
        <div className="teaser__scroll-arrow" onClick={scrollToSection} aria-hidden="true"
        tabIndex="-1">
            <span aria-hidden="true">&#x25BC;</span>
        </div>
    </div>
  );
};

export default ScrollArrow;
