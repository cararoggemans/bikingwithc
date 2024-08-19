import React from 'react';
import aboutMePicture from '../img/cararoggemans-aboutme.jpg';

const SmallDescription = () => {
  return (
    <section className="description container">
      <h2>&lt;Small Description&gt;</h2>
      <div className="description__content row">
        <div className="description__image offset-lg-1 col-lg-3 col-sm-5">
            <img src={aboutMePicture} alt="Cara Roggemans - Small description about me" />
        </div>

        <div className="description__text offset-lg-1 col-lg-5 col-sm-7">
            <p>Hello there, nice to meet you! My name is Cara, graduate of AP Hogeschool with a degree in cross-media design. Over the years, I’ve fueled my creative fire with a passion for graphic and web design, photography and social media. When I’m not lost in pixels and visuals, you’ll find me cruising on my motorcycle and capturing travel adventures for my YouTube channel.</p>

            <p>Recently I started diving into the exciting world of content creation and advertising.</p>
            <p>Interested? <i>Let’s grab a tea (or a coffee if you want :-) & create something awesome together!</i></p>
        </div>
      </div>
    </section>
  );
}

export default SmallDescription;
