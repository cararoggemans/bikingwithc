import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Detect language from URL

import enTranslation from "./locales/en/translation.json";
import nlTranslation from "./locales/nl/translation.json";

i18n
  .use(LanguageDetector) // Detecteer taal uit de URL
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      nl: { translation: nlTranslation },
    },
    fallbackLng: "en", // Terugvallen op Engels als geen taal wordt gevonden
    detection: {
      order: ["path", "navigator"], // Haal taal uit URL path of browserinstellingen
      lookupFromPathIndex: 0, // Gebruik eerste deel van de URL als taalcode
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
