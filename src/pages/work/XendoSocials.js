import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../../components/Hero';
import ProjectNavigation from '../../components/ProjectNavigation';
import MetaDescription from '../../components/MetaDescription';
import Footer from '../../components/Footer';
import workDataEN from '../../data/en/workData';
import workDataNL from '../../data/nl/workData';
import backgroundImage from '../../img/work/xendo/social/xendo-social-media.png';
import galleryImage from '../../img/work/xendo/social/xendo-social-media-facebook.png'
import galleryImage2 from '../../img/work/xendo/social/xendo-halloween-last-early-bird.png'
import galleryImage3 from '../../img/work/xendo/social/xendo-social-90s.png'
import galleryImage4 from '../../img/work/xendo/social/xendo-social-halloween-dj-post.png'
import galleryImage5 from '../../img/work/xendo/social/xendo-socials-end-of-season.png'
import galleryImage6 from '../../img/work/xendo/social/xendo-socials-saturday-clubbing.png'
import galleryImage7 from '../../img/work/xendo/social/xendo-social-facebook-event.png'

const XendoSocials = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const workData = lang === "nl" ? workDataNL : workDataEN;

  const currentWork = workData.find(work => work.slug === "xendo-socials");

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
        <section className="work-detail__description">
        <div className="container">
          <div className="row">
              <div className="work-detail__image offset-lg-1 col-lg-3 col-sm-5">
                <img src={galleryImage} alt={currentWork.alt.image_1}/>
              </div>
              <div className="work-detail__text offset-lg-1 col-lg-5 col-sm-7" id="small-description">
                <p>
                <p>{currentWork.description}</p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="work-detail__gallery container">
        <div className="work-detail__grid row justify-content-center">
          <div className="col-md-3 d-flex work-detail__center-image">
            <img src={galleryImage2} alt={currentWork.alt.gallery_image_1} />
          </div>
          <div className="col-md-3 d-flex work-detail__center-image">
            <img src={galleryImage3} alt={currentWork.alt.gallery_image_2} />
          </div>
          <div className="col-md-3 d-flex work-detail__center-image">
            <img src={galleryImage4} alt={currentWork.alt.gallery_image_3} />
          </div>
           <div className="row justify-content-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center work-detail__top-image">
              <img src={galleryImage5} alt={currentWork.alt.gallery_image_4} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex work-detail__center-image">
            <img src={galleryImage7} alt={currentWork.alt.gallery_image_5} />
          </div>
          <div className="col-md-4 d-flex work-detail__center-image">
            <img src={galleryImage6} alt={currentWork.alt.gallery_image_6} />
          </div>
          </div>
          </div>
      </section>

      <div className="work-detail">
        <section className="work-detail__description">
        <div className="container">
          <div className="row justify-content-center">
              <div className="work-detail__text col-sm-6" id="small-description">
                <p>
                <p>{currentWork.results}</p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ProjectNavigation
        currentItemId={currentWork?.id}
        items={workData.sort((a, b) => new Date(b.date) - new Date(a.date))}
        type="project"
      />
      <Footer />
    </>
  );
};

export default XendoSocials;
