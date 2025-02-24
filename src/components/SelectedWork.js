import React from 'react';
import { useTranslation } from 'react-i18next';
import workItemsDataEN from '../data/en/workData';
import workItemsDataNL from '../data/nl/workData';
import WorkItem from './WorkItem';

const SelectedWork = () => {
  const { t, i18n } = useTranslation();
  const workData = i18n.language === "nl" ? workItemsDataNL : workItemsDataEN;

  const workClasses = [
    "col-12 col-lg-3 col-md-6 mb-4", 
    "col-12 col-lg-3 col-md-6 col-lg-3 mb-4", 
    "col-12 offset-lg-0 col-lg-3 offset-md-1 col-md-6 mb-4" 
  ];

  const sortedWorks = workData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="selected-work">
      <h2 className="selected-work__title">{t("featured_projects.title")}</h2>
      <p className="selected-work__subtitle" aria-hidden="true">
        {t("featured_projects.subtitle")}
      </p> 
      <div className="container">
        <ul className="row justify-content-center">
          {sortedWorks.map((work, index) => (
            <li key={work.id} className={workClasses[index] || "col-12 col-md-6 col-lg-3 mb-4"}>
              <WorkItem 
                image={work.image} 
                title={work.title} 
                alt={work.alt}
                link={`/${i18n.language}${work.link}`} // ✅ Taal dynamisch toevoegen
                description={work.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SelectedWork;
