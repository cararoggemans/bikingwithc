import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../img/cararoggemans.svg';
import LogoSticky from '../img/cararoggemans-green.svg';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get the current route location

  const handleScroll = () => {
    if (window.scrollY > 90) { // 90px is size of top nav
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;


  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="header__logo col-2">
              <img src={isSticky ? LogoSticky : Logo} alt="Cara Roggemans"/>
            </div>
            <div className="col-10">
            <nav className="navigation" role="navigation">
              <ul className="navigation__list ms-auto">
              <li className ="navigation__item">
                <Link to="/" className={`navigation__link ${isActive('/') ? 'active' : ''}`}>Home</Link>
              </li>
              <li className ="navigation__item">
                <Link to="/about" className={`navigation__link ${isActive('/about') ? 'active' : ''}`}>About me</Link>
              </li>
              <li className ="navigation__item">
                <Link to="/work" className={`navigation__link ${isActive('/work') ? 'active' : ''}`}>Work</Link>
              </li>
              <li className ="navigation__item">
                <Link to="/blog" className={`navigation__link ${isActive('/blog') ? 'active' : ''}`}>Blog</Link>
              </li>
              <li className ="navigation__item">
                <Link to="/contact" className={`navigation__link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
