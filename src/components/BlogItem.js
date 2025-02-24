import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogItem = ({ image, title, description, alt, link }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <Link 
      to={link}
      className="blog-item__outer-link"
    >
      <div className="blog-item__image-container">
        <img src={image} alt={alt} className="blog-item__image" />
      </div>
      <div className="blog-item__overlay"></div>
      <div className="blog-item__content">
        <h3 className="blog-item__title">{title}</h3>
        <p className="blog-item__description">{description}</p>
        <span className="blog-item__link">{t("featured_blogs.read_more")}</span>
      </div>
    </Link>
  );
};

export default BlogItem;
