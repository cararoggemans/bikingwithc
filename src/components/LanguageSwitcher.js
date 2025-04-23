import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const langFromPath = location.pathname.split('/')[1];
  const currentLang = langFromPath === "nl" ? "nl" : "en";

  const switchLanguage = (newLang) => {
    if (newLang !== currentLang) {
      i18n.changeLanguage(newLang);
      setIsOpen(false);
      const newPath = location.pathname.replace(/^\/(en|nl)/, `/${newLang}`);
      navigate(newPath, { replace: true });
    }
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {currentLang.toUpperCase()} ▼
      </button>

      {isOpen && (
        <ul className="language-switcher__dropdown">
          <li
            onClick={() => switchLanguage("en")}
            className={currentLang === "en" ? "active" : ""}
          >
            EN
          </li>
          <li
            onClick={() => switchLanguage("nl")}
            className={currentLang === "nl" ? "active" : ""}
          >
            NL
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;