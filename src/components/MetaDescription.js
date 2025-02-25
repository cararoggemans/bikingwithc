import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const MetaDescription = ({ title, description }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  const currentLang = i18n.language; // 'en' of 'nl'
  const url = `https://cararoggemans.com/${currentLang}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default MetaDescription;
