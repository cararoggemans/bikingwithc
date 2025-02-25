import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import MetaDescription from '../../components/MetaDescription';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';
import backgroundImage from '../../img/work/trixxo/trixxo-20-years.png';
import galleryImage from '../../img/work/trixxo/trixxo-namecard.png'
import galleryImage6 from '../../img/work/trixxo/trixxo-story.png'
import galleryImage7 from '../../img/work/trixxo/trixxo-square.png'

const TrixxoCampaign = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  const workData = lang === "nl" ? workDataNL : workDataEN;

  const currentWork = workData.find(work => work.slug === "trixxo-20-years");

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
          <MetaDescription
        title={`${currentWork.title}`} 
        description={`${currentWork.description}`} 
        />
      <Hero 
          backgroundImage={backgroundImage} 
          title={currentWork.title}
          teaserText={t("pages.projects.teaser_text")}
        />
      <div className="work-detail">
        <section className="work-detail__description">
        <div className="container">
          <div className="row">
              <div className="work-detail__image offset-lg-1 col-lg-3 col-sm-5">
                <img src={galleryImage} alt={currentWork.alt.image_1} />
              </div>
              <div className="work-detail__text offset-lg-1 col-lg-5 col-sm-7" id="small-description">
                <p>
                {currentWork.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="work-detail__gallery container">
        <div className="work-detail__grid">
        <div className="row justify-content-center">
          <div className="col-md-6 work-detail_text">
            {currentWork.start_content && <p>{currentWork.start_content}</p>}
            {currentWork.middle_content && <p>{currentWork.middle_content}</p>}
            {currentWork.end_content && <p>{currentWork.end_content}</p>}
          </div>
          </div>
        <div className="row justify-content-center">
          <div className="col-md-4 work-detail__bottom-image">
            <img src={galleryImage6} alt={currentWork.alt.gallery_image_1} />
          </div>
          <div className="col-md-4 work-detail__bottom-image">
            <img src={galleryImage7} alt={currentWork.alt.gallery_image_2} />
          </div>
          </div>
          </div>
      </section>


      <ProjectNavigation
        currentItemId={currentWork?.id}
        items={workData.sort((a, b) => new Date(b.date) - new Date(a.date))}
        type="project"
      />
    </>
  );
};

export default TrixxoCampaign;
