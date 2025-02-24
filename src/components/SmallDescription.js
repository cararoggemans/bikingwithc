import React from 'react';
import { useTranslation } from "react-i18next";
import aboutMePicture from '../img/cararoggemans-aboutme.jpg';

const SmallDescription = () => {
  const { t } = useTranslation();

  return (
    <section className="description container" id="small-description">
      <h2>{t("small_description.title")}</h2>
      <div className="description__content row">
        <div className="description__image offset-lg-1 col-lg-3 col-sm-5">
            <img src={aboutMePicture} alt="Cara Roggemans - Branding & web designer, photographer and digital marketeer" />
        </div>

        <div className="description__text offset-lg-1 col-lg-5 col-sm-7">
            <p>{t("small_description.intro")}</p>
            <p>{t("small_description.middle")}</p>
            <p>{t('small_description.outro')}</p>
        </div>
      </div>
    </section>
  );
}

export default SmallDescription;
