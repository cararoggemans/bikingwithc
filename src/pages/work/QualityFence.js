import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import MetaDescription from '../../components/MetaDescription';
import Footer from '../../components/Footer';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';
import backgroundImage from '../../img/work/qfg/hero.png';
import galleryImage from '../../img/work/logo-quality-fence-gardens.jpg'

import project600 from '../../img/hero/qf-600.jpg';
import project1024 from '../../img/hero/qf-1024.jpg';
import project1280 from '../../img/hero/qf-1280.jpg';
import project1920 from '../../img/hero/qf-1920.jpg';

const QualityFence = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const workData = lang === "nl" ? workDataNL : workDataEN;

  const currentWork = workData.find(work => work.slug === "quality-fence-gardens");

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
        <div className="col-md-6 d-flex justify-content-center align-items-center work-detail__top-image">
            <img src={backgroundImage} alt={currentWork.alt.gallery_image_1} />
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

export default QualityFence;
