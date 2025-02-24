import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
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
                <li><a href="/">{t("footer.link_1")}</a></li>
                <li><a href="/work">{t("footer.link_2")}</a></li>
                <li><a href="/blog">{t("footer.link_3")}</a></li>
                <li><a href="/contact">{t("footer.link_4")}</a></li>
              </ul>
            </div>
            <div className="footer__item offset-md-1 col-lg-2 col-md-3 col-sm-6">
              <h3> <h3>{t("footer.right_title")}</h3></h3>
              <p><a href="mailto:cararoggemans@gmail.com">cararoggemans@gmail.com</a><br/>
              <a href="https://wa.me/+32479428601">+32 479 42 86 01</a></p>
            </div>
          </div>
          </div>
    </footer>
  );
}

export default Footer;
