import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MetaDescription from '../components/MetaDescription';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { FaBackwardStep } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { GiTropicalFish } from "react-icons/gi";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <MetaDescription
        title={t("meta.404.title")}
        description={t("meta.404.description")}
      />

      <Hero
        backgroundBaseName="404"
        title={t("pages.404.hero_title")}
        teaserText={t("pages.404.subtitle")}
        backgroundAlt={t("pages.404.hero_alt")}
      />

      <section className="description container text-center" id="small-description">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h2 className="error-page__title"><GiTropicalFish /> {t("pages.404.title")}</h2>
            <p className="error-page__description">
                {t("pages.404.description_intro")}<br/>
                {t("pages.404.description_outro")}
            </p>
            <div className="error-page__actions">
                <Link to={`/${i18n.language}/`} className="btn btn--primary">
                <IoHome /> {t("pages.404.home_button")}
                </Link>
                <button onClick={() => window.history.back()} className="btn btn--primary">
                <FaBackwardStep /> {t("pages.404.back_button")}
                </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;