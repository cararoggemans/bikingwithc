import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectNavigation = ({ currentItemId, items, type = "project" }) => {
  const { lang } = useParams(); 
  const { t } = useTranslation();

  const sortedItems = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
  const currentIndex = sortedItems.findIndex(item => item.id === currentItemId);

  if (currentIndex === -1) {
    console.warn("currentItemId niet gevonden in sortedItems:", currentItemId);
    return null; 
  }

  const previousItem = sortedItems[(currentIndex - 1 + sortedItems.length) % sortedItems.length];
  const nextItem = sortedItems[(currentIndex + 1) % sortedItems.length];

  const buildURL = (basePath, item, isBlog = false) => {
    if (!item) return '#';

    let cleanLink = isBlog ? item.slug : item.link.replace(/^\/+/, ''); 

    if (!isBlog && cleanLink.startsWith("work/")) {
      cleanLink = cleanLink.replace(/^work\//, '');
    }

    let fullPath = `/${lang}/${basePath}/${cleanLink}`;
    
    return fullPath.replace(/\/+/g, '/'); 
  };

  return (
    <section className="work-detail__navigation">
      {/* Desktop Navigatie */}
      <div className="row d-none d-md-flex">
        {type === "blog" ? (
          <>
            {previousItem && (
              <div className="col-6 work-detail__item" style={{ backgroundImage: `url(${previousItem.image})` }}>
                <Link to={buildURL("blog", previousItem, true)}>
                  <div className="work-detail__overlay"></div>
                  <div className="work-detail__content d-flex justify-content-center align-items-center">
                    <p className="work__detail__tag">{t("project_navigation.previous_blog")}</p>
                    <h3>{previousItem.title}</h3>
                    <p className="work-detail__link">{t("general.read_more")}</p>
                  </div>
                </Link>
              </div>
            )}

            {nextItem && (
              <div className="col-6 work-detail__item" style={{ backgroundImage: `url(${nextItem.image})` }}>
                <Link to={buildURL("blog", nextItem, true)}>
                  <div className="work-detail__overlay"></div>
                  <div className="work-detail__content d-flex justify-content-center align-items-center">
                    <p className="work__detail__tag">{t("project_navigation.next_blog")}</p>
                    <h3>{nextItem.title}</h3>
                    <p className="work-detail__link">{t("general.read_more")}</p>
                  </div>
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            {previousItem && (
              <div className="col-6 work-detail__item" style={{ backgroundImage: `url(${previousItem.image})` }}>
                <Link to={buildURL("work", previousItem)}>
                  <div className="work-detail__overlay"></div>
                  <div className="work-detail__content d-flex justify-content-center align-items-center">
                    <p className="work__detail__tag">{t("project_navigation.previous_project")}</p>
                    <h3>{previousItem.title}</h3>
                    <p className="work-detail__link">{t("general.see_more")}</p>
                  </div>
                </Link>
              </div>
            )}

            {nextItem && (
              <div className="col-6 work-detail__item" style={{ backgroundImage: `url(${nextItem.image})` }}>
                <Link to={buildURL("work", nextItem)}>
                  <div className="work-detail__overlay"></div>
                  <div className="work-detail__content d-flex justify-content-center align-items-center">
                    <p className="work__detail__tag">{t("project_navigation.next_project")}</p>
                    <h3>{nextItem.title}</h3>
                    <p className="work-detail__link">{t("general.see_more")}</p>
                  </div>
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {/* Mobiele Navigatie (Pijltjes) */}
      <div className="nav-arrow__wrapper row d-flex d-md-none justify-content-between align-items-center">
        {previousItem && (
          <div className="col-6">
            <Link to={buildURL(type === "blog" ? "blog" : "work", previousItem, type === "blog")} className="nav-arrow__prev">
              <FaArrowLeft className="nav-arrow__icon" /> {t(type === "blog" ? "project_navigation.previous_blog" : "project_navigation.previous_project")}
            </Link>
          </div>
        )}

        {nextItem && (
          <div className="col-6 text-end">
            <Link to={buildURL(type === "blog" ? "blog" : "work", nextItem, type === "blog")} className="nav-arrow__next">
              {t(type === "blog" ? "project_navigation.next_blog" : "project_navigation.next_project")} <FaArrowRight className="nav-arrow__icon" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectNavigation;
