import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || "en";
  return (
    <footer className="footer">
        <div className="footer__content container">
          <div className="row">
            <div className="footer__item offset-lg-1 col-md-3">
              <h3>{t("footer.left_title")}</h3>
              <p>{t("footer.left_text")}</p>
            </div>
            <div className="footer__item offset-md-1 col-lg-2 col-md-3 col-sm-6">
              <h3>{t("footer.middle_title")}</h3>
              <ul>
                <li><Link to={`/${currentLang}`}>{t("footer.link_1")}</Link></li>
                <li><Link to={`/${currentLang}/work`}>{t("footer.link_2")}</Link></li>
                <li><Link to={`/${currentLang}/expertise`}>{t("footer.link_3")}</Link></li>
                <li><Link to={`/${currentLang}/blog`}>{t("footer.link_4")}</Link></li>
                <li><Link to={`/${currentLang}/contact`}>{t("footer.link_5")}</Link></li>
              </ul>
            </div>
            <div className="footer__item offset-md-1 col-lg-2 col-md-3 col-sm-6">
              <h3>{t("footer.right_title")}</h3>
              <p><a href="mailto:cararoggemans@gmail.com">cararoggemans@gmail.com</a><br/>
              <a href="https://wa.me/+32479428601">+32 479 42 86 01</a></p><br/>
              <h3>{t("footer.right_below_title")}</h3>
              <a target="_blank" href="https://www.linkedin.com/in/cararoggemans/">LinkedIn</a>
            </div>
          </div>
          </div>
    </footer>
  );
}

export default Footer;
