import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { lang } = useParams();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const switchLanguage = (newLang) => {
    if (newLang !== lang) {
      i18n.changeLanguage(newLang);
      const newPath = location.pathname.replace(/^\/(en|nl)/, `/${newLang}`);
      navigate(newPath, { replace: true });
      window.location.reload(); // ✅ Force refresh for immediate language switch
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ✅ Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </div>

      {/* ✅ Fullscreen Menu */}
      <div className={`fullscreen-menu ${isOpen ? 'is-open' : ''}`}>
        <nav className="fullscreen-menu__nav" role="navigation">
          <ul className="fullscreen-menu__list">
            <li className="fullscreen-menu__item">
              <Link to={`/${lang}/`} className={`fullscreen-menu__link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link to={`/${lang}/work`} className={`fullscreen-menu__link ${isActive('/work') ? 'active' : ''}`} onClick={closeMenu}>
                Work
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link to={`/${lang}/blog`} className={`fullscreen-menu__link ${isActive('/blog') ? 'active' : ''}`} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link to={`/${lang}/contact`} className={`fullscreen-menu__link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          {/* ✅ Taalswitch als gewone links */}
          <div className="fullscreen-menu__language-switch">
            <button onClick={() => switchLanguage('en')} className={`lang-btn ${lang === "en" ? 'active' : ''}`}>
              EN
            </button>
            <button onClick={() => switchLanguage('nl')} className={`lang-btn ${lang === "nl" ? 'active' : ''}`}>
              NL
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
