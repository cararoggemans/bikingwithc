import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProjectNavigation from '../../components/ProjectNavigation';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';
import Hero from '../../components/Hero';
import galleryImage from '../../img/work/xendo/menu/xendo-menu.jpg';
import galleryImage4 from '../../img/work/xendo/menu/trifold-mockup.png'
import galleryImage5 from '../../img/work/xendo/menu/menu3.jpg'
import backgroundImage from '../../img/work/xendo/menu/trifold-mockup-2.png'

const XendoBarMenu = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  const workData = lang === "nl" ? workDataNL : workDataEN;

  const currentWork = workData.find(work => work.slug === "xendo-bar-menu");

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <>
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
        <div className="row align-center">
          <div className="offset-lg-1 col-md-5 work-detail__top-image">
              <img src={backgroundImage} alt={currentWork.alt.gallery_image_1} />
          </div>
          <div className="col-md-4 work-detail__center-image">
              <img src={galleryImage4} alt={currentWork.alt.gallery_image_2} />
              <img src={galleryImage5} alt={currentWork.alt.gallery_image_3} />
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

export default XendoBarMenu;
