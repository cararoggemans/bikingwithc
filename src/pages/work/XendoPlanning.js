import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import MetaDescription from '../../components/MetaDescription';
import Footer from '../../components/Footer';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';
import backgroundImage from '../../img/work/xendo/events/hero-planning.png';
import galleryImage from '../../img/work/xendo/events/oktober-flyer.png'
import galleryImage2 from '../../img/work/xendo/events/december-poster.png'
import galleryImage5 from '../../img/work/xendo/events/september-story-smartphone.png'
import galleryImage6 from '../../img/work/xendo/events/xendo-october-events-poster.png'
import galleryImage7 from '../../img/work/xendo/events/xendo-overview-event-posters.png'

const XendoPlanning = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const workData = lang === "nl" ? workDataNL : workDataEN;

  const currentWork = workData.find(work => work.slug === "xendo-planning");

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
          <MetaDescription
        title={`Work | ${currentWork.title}`} 
        description={`${currentWork.description}`} 
        />
      <Hero 
          backgroundImage={backgroundImage} 
          title={currentWork.title}
          teaserText={t("pages.projects.teaser_text")}
        />
      <div className="work-detail">
        <section class="work-detail__description">
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
        <div className="row justify-content-center">
          <div className="col-md-8 d-flex justify-content-center align-items-center work-detail__top-image">
              <img src={galleryImage7} alt={currentWork.alt.gallery_image_1} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={galleryImage6} alt={currentWork.alt.gallery_image_2} />
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={galleryImage5} alt={currentWork.alt.gallery_image_3} />
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={galleryImage2} alt={currentWork.alt.gallery_image_4} />
          </div>
        </div>
      </section>

      <ProjectNavigation
        currentItemId={currentWork?.id}
        items={workData.sort((a, b) => new Date(b.date) - new Date(a.date))}
        type="project"
      />
      <Footer />
    </>
  );
};

export default XendoPlanning;
