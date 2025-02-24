import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WorkItem = ({ image, title, link, description, alt }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <Link to={link}
    className="work-item">
      <div className="work-item__image-container">
        <img src={image} alt={alt} className="work-item__image" />
        <div className="work-item__overlay">
          <div className="work-item__overlay-content">
            <h3>{title}</h3>
            <span className="work-item__link">{t("featured_projects.see_more")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WorkItem;
