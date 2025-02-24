import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';

const WorkDetail = () => {
  const { lang, slug } = useParams();
  const { t, i18n } = useTranslation();

  const workData = lang === "nl" ? workDataNL : workDataEN;
  const currentWork = workData.find(work => work.link.endsWith(slug));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!currentWork) {
    return <p>{t("work.not_found")}</p>;
  }

  return (
    <>
      <Hero 
        backgroundImage={currentWork.image} 
        title={currentWork.title} 
        teaserText={t("general.read_more")} 
      />
      
      <div className="work-detail">
        <section className="work-detail__description">
          <div className="container">
            <div className="row">
              <div className="work-detail__image offset-lg-1 col-lg-3 col-sm-5">
                <img src={currentWork.image} alt={currentWork.title} />
              </div>
              <div className="work-detail__text offset-lg-1 col-lg-5 col-sm-7">
                <p>{currentWork.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {currentWork.gallery_component && currentWork.gallery_component()}

      <ProjectNavigation 
        currentItemId={currentWork.id} 
        items={workData} 
        type="project" 
      />
    </>
  );
};

export default WorkDetail;
