import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import MetaDescription from '../../components/MetaDescription';
import Footer from '../../components/Footer';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';
import image1 from '../../img/work/choco/wip1.jpg'
import image2 from '../../img/work/choco/wip2.jpg'
import image3 from '../../img/work/choco/wip3.jpg'
import image4 from '../../img/work/choco/intern-book1.jpg'
import image5 from '../../img/work/choco/intern-book2.jpg'

import project600 from '../../img/hero/choco-600.jpg';
import project1024 from '../../img/hero/choco-1024.jpg';
import project1280 from '../../img/hero/choco-1280.jpg';
import project1920 from '../../img/hero/choco-1920.jpg';

const ChocoLogo= () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const workData = lang === "nl" ? workDataNL : workDataEN;

  const currentWork = workData.find(work => work.slug === "choco-logo");

  const heroImages = {
    '476': project600,
    '768': project1024,
    '1280': project1280,
    '1920': project1920,
  };

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
           dynamicSources={heroImages}
           title={currentWork.title}
          teaserText={t("pages.projects.teaser_text")}
        />
      <div className="work-detail">
        <section className="work-detail__description">
        <div className="container">
          <div className="row">
              <div className="work-detail__image offset-lg-1 col-lg-3 col-sm-5">
                <img src={currentWork.image} alt={currentWork.alt.image_1} />
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
        <div className="col-md-6 justify-content-center align-items-center work-detail__top-image">
          {currentWork.start_content && <p>{currentWork.start_content}</p>}
          {currentWork.end_content && <p>{currentWork.end_content}</p>}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={image1} alt={currentWork.alt.gallery_image_1} />
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={image2} alt={currentWork.alt.gallery_image_2} />
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={image3} alt={currentWork.alt.gallery_image_3} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={image4} alt={currentWork.alt.gallery_image_4} />
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center work-detail__center-image">
            <img src={image5} alt={currentWork.alt.gallery_image_5} />
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

export default ChocoLogo;
