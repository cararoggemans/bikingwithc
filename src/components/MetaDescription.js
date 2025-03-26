import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const MetaDescription = ({ title, description }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  const currentLang = i18n.language;
  const url = `https://cararoggemans.com/${currentLang}${location.pathname}`;
  const imageUrl = "https://cararoggemans.com/cara-roggemans-allround-digital-creative-def.png";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content="Cara Roggemans - Allround Digital Creative - graphic design, web design, social media and content creation" />
      <meta property="og:image:width" content="1367" />
      <meta property="og:image:height" content="627" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Cara Roggemans - Allround Digital Creative - graphic design, web design, social media and content creation" />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default MetaDescription;
