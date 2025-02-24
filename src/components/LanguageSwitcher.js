import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { lang } = useParams();

  // Detect current language from the URL
  const currentLang = lang === "nl" ? "nl" : "en";

  const switchLanguage = (newLang) => {
    if (newLang !== currentLang) {
      i18n.changeLanguage(newLang); // Update translation state
      setIsOpen(false); // ✅ Close dropdown after switching

      // ✅ Ensure we correctly replace only the language part in the URL
      let newPath = location.pathname.replace(/^\/(en|nl)/, `/${newLang}`);

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
