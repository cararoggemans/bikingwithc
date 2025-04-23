import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { lang } = useParams();

  const currentLang = lang || i18n.language || "en"; // fallback

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const switchLanguage = (newLang) => {
    if (newLang !== currentLang) {
      const newPath = location.pathname.replace(/^\/(en|nl)/, `/${newLang}`);
      i18n.changeLanguage(newLang);
      closeMenu();
      navigate(newPath, { replace: true });
      window.location.reload(); // force reload for accurate SSR-style switch
    }
  };

  const isActive = (path) => {
    const strippedPath = location.pathname.replace(/^\/(en|nl)/, '');
    return strippedPath === path || strippedPath.startsWith(path + '/');
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </div>

      {/* Fullscreen Menu */}
      <div className={`fullscreen-menu ${isOpen ? 'is-open' : ''}`}>
        <nav className="fullscreen-menu__nav" role="navigation">
          <ul className="fullscreen-menu__list">
            <li className="fullscreen-menu__item">
              <Link
                to={`/${currentLang}/`}
                className={`fullscreen-menu__link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t("navigation.home")}
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link
                to={`/${currentLang}/work`}
                className={`fullscreen-menu__link ${isActive('/work') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t("navigation.work")}
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link
                to={`/${currentLang}/expertise`}
                className={`fullscreen-menu__link ${isActive('/expertise') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t("navigation.expertise")}
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link
                to={`/${currentLang}/blog`}
                className={`fullscreen-menu__link ${isActive('/blog') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t("navigation.blog")}
              </Link>
            </li>
            <li className="fullscreen-menu__item">
              <Link
                to={`/${currentLang}/contact`}
                className={`fullscreen-menu__link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t("navigation.contact")}
              </Link>
            </li>
          </ul>

          {/* Language Switch */}
          <div className="fullscreen-menu__language-switch">
            <button
              onClick={() => switchLanguage('en')}
              className={`lang-btn ${currentLang === "en" ? 'active' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage('nl')}
              className={`lang-btn ${currentLang === "nl" ? 'active' : ''}`}
            >
              NL
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;