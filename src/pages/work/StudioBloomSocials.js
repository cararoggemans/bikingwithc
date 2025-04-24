import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import MetaDescription from '../../components/MetaDescription';
import Footer from '../../components/Footer';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';

import project600 from '../../img/hero/studio-bloom-600.jpg';
import project1024 from '../../img/hero/studio-bloom-1024.jpg';
import project1280 from '../../img/hero/studio-bloom-1280.jpg';
import project1920 from '../../img/hero/studio-bloom-1920.jpg';

import instagramPost from '../../img/work/bloom/instagram-carousel-studio-bloom.jpg';
import facebookPost from '../../img/work/bloom/facebook-post-studio-bloom-1.jpg';
import facebookPost1 from '../../img/work/bloom/facebook-post-studio-bloom-2.jpg';
import galleryImage from '../../img/work/bloom/posts-studio-bloom-instagram-facebook.jpg';
const StudioBloomSocials = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const workData = lang === "nl" ? workDataNL : workDataEN;
  const currentWork = workData.find(work => work.slug === "studio-bloom-socials");

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
        description={currentWork.meta_description}
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
                <p>{currentWork.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="work-detail__gallery container">
        <div className="row justify-content-center work-detail__content-first">
        <div className="col-lg-3 col-md-4 d-flex align-items-center work-detail__top-image">
        {currentWork.start_content && <p>{currentWork.start_content}</p>}
          </div>
          <div className="col-lg-9 col-md-8 d-flex justify-content-center align-items-center work-detail__top-image">
            <img src={instagramPost} alt={currentWork.alt.gallery_image_2} />
          </div>
        </div>

        <div className="row justify-content-center">
        <div className="col-lg-4 col-md-4 d-flex align-items-center work-detail__facebook-image-first">
        <img src={facebookPost} alt={currentWork.alt.gallery_image_1} />
          </div>
          <div className="col-lg-4 col-md-4 d-flex align-items-center work-detail__facebook-image-second">
        <img src={facebookPost1} alt={currentWork.alt.gallery_image_3} />
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center work-detail__middle-content">
          {currentWork.middle_content && <p>{currentWork.middle_content}</p>}
          </div>
        </div>

        <div className="row justify-content-center work-detail__bottom-image">
          <div className="col-md-6 work-detail_end-content">
          {currentWork.end_content && <p>{currentWork.end_content}</p>}
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

export default StudioBloomSocials;