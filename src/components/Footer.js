import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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
                <li><Link to={`/${currentLang}/blog`}>{t("footer.link_2")}</Link></li>
                <li><Link to={`/${currentLang}/contact`}>{t("footer.link_3")}</Link></li>
              </ul>
            </div>
            <div className="footer__item offset-md-1 col-lg-2 col-md-3 col-sm-6">
              <h3>{t("footer.right_title")}</h3>
              <p><a href="mailto:hello@bikingwithc.com">hello@bikingwithc.com</a></p>
              <h3>{t("footer.right_below_title")}</h3>
              <p><AiFillInstagram/> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bikingwithc">Instagram</a><br/>
              <FaTiktok/> <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@bikingwithc">TikTok</a><br/>
              <FaYoutube/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@BikingWithC">Youtube</a></p>
            </div>
          </div>
          </div>
    </footer>
  );
}

export default Footer;
