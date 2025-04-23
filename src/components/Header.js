import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import HamburgerMenu from './HamburgerMenu';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from '../img/cararoggemans.svg';
import LogoSticky from '../img/cararoggemans-green.svg';

const Header = () => {
  const { t } = useTranslation();

  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 90);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pathParts = location.pathname.split('/');
  const currentLang = pathParts[1] === 'en' || pathParts[1] === 'nl' ? pathParts[1] : 'en';

  const isActive = (path) => {
    const cleanPath = '/' + pathParts.slice(2).join('/');
    return cleanPath === path || cleanPath.startsWith(path + '/');
  };

  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`} id="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="header__logo col-2">
            <Link to={`/${currentLang}/`}>
              <img src={isSticky ? LogoSticky : Logo} alt="Cara Roggemans" aria-label="Go to home page"/>
            </Link>
          </div>

          {!isMobile && (
            <div className="col-9 nav__wrapper d-flex justify-content-end">
              <nav className="navigation" role="navigation" aria-label="Main navigation">
                <ul className="navigation__list ms-auto">
                  <li className="navigation__item">
                    <Link to={`/${currentLang}/`} className={`navigation__link ${isActive('/') ? 'active' : ''}`}>
                      {t("navigation.home")}
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link to={`/${currentLang}/work`} className={`navigation__link ${isActive('/work') ? 'active' : ''}`}>
                      {t("navigation.work")}
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link to={`/${currentLang}/expertise`} className={`navigation__link ${isActive('/expertise') ? 'active' : ''}`}>
                      {t("navigation.expertise")}
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link to={`/${currentLang}/blog`} className={`navigation__link ${isActive('/blog') ? 'active' : ''}`}>
                      {t("navigation.blog")}
                    </Link>
                  </li>
                  <li className="navigation__item">
                    <Link to={`/${currentLang}/contact`} className={`navigation__link ${isActive('/contact') ? 'active' : ''}`}>
                      {t("navigation.contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {/* ✅ Taalswitcher (op desktop en in het hamburgermenu) */}
          {!isMobile && (
            <div className="col-1 d-flex justify-content-end align-items-center">
              <LanguageSwitcher />
            </div>
          )}

          {/* ✅ Hamburgermenu (alleen tonen onder 992px) */}
          {isMobile && <HamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
