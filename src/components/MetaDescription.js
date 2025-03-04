import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import image from '../img/meta/cara-roggemans-allround-digital-creative-min.png'

const MetaDescription = ({ title, description }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  const currentLang = i18n.language;
  const url = `https://cararoggemans.com/${currentLang}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Cara Roggemans - Allround Digital Creative" />
      <meta property="og:image:width" content="1367" />
      <meta property="og:image:height" content="627" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Cara Roggemans - Allround Digital Creative" />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default MetaDescription;
