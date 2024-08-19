import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content container">
          <div className="row">
            <div className="footer__item offset-lg-1 col-md-3">
              <h3>Cara Roggemans</h3>
              <p>I have a passion for graphic and web design, content creation and social media. I’m currently available for collaborations. I’m excited to connect and to <i>bring your next project to life!</i></p>
            </div>
            <div className="footer__item offset-md-1 col-lg-2 col-md-3 col-sm-6">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer__item offset-md-1 col-lg-2 col-md-3 col-sm-6">
              <h3>Get in Touch</h3>
              <p>+32 479 42 86 01<br></br>hello@cararoggemans.com </p>
            </div>
          </div>
          </div>
    </footer>
  );
}

export default Footer;
