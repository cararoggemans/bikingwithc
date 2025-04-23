import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import workItemsDataEN from "../data/en/workData";
import workItemsDataNL from "../data/nl/workData";
import WorkItem from '../components/WorkItem';
import MetaDescription from '../components/MetaDescription';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const workData = i18n.language === "nl" ? workItemsDataNL : workItemsDataEN;

  return (
    <div>
      <MetaDescription
        title={t("meta.projects.title")} 
        description={t("meta.projects.description")} 
        />

      <Hero 
        backgroundBaseName="projects"
        title={t("pages.projects.hero_title")}
        teaserText={t("pages.projects.subtitle")}
      />

      <section className="description container" id="small-description">
        <div className="row justify-content-center">
          <h2 className="work-page__title">{t("pages.projects.title")}</h2>
          <p className="work-page__description">{t("pages.projects.description")}</p>
          <div className="work-page__grid row justify-content-center">
            {workData.map((work, index) => (
              <div key={work.id} className="work-page__item col-12 col-md-6 col-lg-4 mb-4">
                <WorkItem 
                  image={work.image}
                  title={work.title}
                  link={`/${i18n.language}${work.link}`}
                  alt={work.alt}
                  description={work.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
