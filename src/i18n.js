import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; 

import enTranslation from "./locales/en/translation.json";
import nlTranslation from "./locales/nl/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      nl: { translation: nlTranslation },
    },
    fallbackLng: "en",
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0,
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
