import React from 'react';
import MetaDescription from '../components/MetaDescription';
import heroImage from '../img/skills/hero-skills-expertise.jpg';
import Footer from '../components/Footer';
import { useTranslation } from "react-i18next";
import Hero from '../components/Hero';

import webBg from '../img/skills/web-design-development-maintenance.jpg';
import contentBg from '../img/skills/social-media-content-strategy-community.jpg';

const Expertise = () => {
  const { t } = useTranslation();

  const blocks = [
    {
      key: "branding",
      style: "square",
      background: null,
    },
    {
      key: "content",
      style: "tall",
      background: contentBg,
    },
    {
      key: "web",
      style: "wide",
      background: webBg,
    },
    {
      key: "strategy",
      style: "half",
      background: null,
    },
  ];

  return (
    <div className="expertise">
      <MetaDescription
        title={t("meta.expertise.title")}
        description={t("meta.expertise.description")}
      />

      <Hero 
        backgroundBaseName="expertise"
        title={t("pages.expertise.title")}
        teaserText={t("pages.expertise.subtitle")}
      />

      <section className="description container" id="small-description">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="expertise__title">{t("pages.expertise.title")}</h2>
            <p className="expertise__subtitle">
              {t("pages.expertise.intro")}
            </p>
          </div>
        </div>
      </section>

      <section className="expertise__wrapper container">
        <div className="expertise__grid offset-xl-1">
            <div className="expertise__intro">
              <h2 className="expertise__title">{t("pages.expertise.grid_title")}</h2>
              <p className="expertise__text">{t("pages.expertise.grid_intro")}</p>
            </div>

            {blocks.map(({ key, style, background }) => (
              <div
                key={key}
                className={`expertise__item ${style}`}
                role="region"
  aria-labelledby={`expertise-${key}-title`}
                style={
                  background
                    ? {
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }
                    : {}
                }
              >
                <div className={`expertise__overlay ${key === "content" ? "align-bottom" : ""}`}>
                  <h3 id={`expertise-${key}-title`}>{t(`pages.expertise.${key}.title`)}</h3>
                  <p>{t(`pages.expertise.${key}.description`)}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </div> 
  );
};

export default Expertise;
