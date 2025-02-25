
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MetaDescription from '../components/MetaDescription';
import heroImage from '../img/contact/contact-hero.jpg';
import contactPicture from '../img/contact/get-in-touch-contact-page.jpg'
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
          <MetaDescription
          title={t("meta.contact.title")} 
          description={t("meta.contact.description")} 
        />
      <Hero 
        backgroundImage={heroImage}
        title={t("pages.contact.title")}
        teaserText={t("pages.contact.subtitle")}
      />

      <section className="description container" id="small-description">
        <div className="row justify-content-center">
          <div className="col-lg-6">
              <h2 className="contact__title">{t("pages.contact.title")}</h2>
              <p className="contact__subtitle">
                {t("pages.contact.note")}
              </p>
          </div>
        </div>
      </section>

      <div className="contact__info">
      <div className="container">
      <div className="row justify-content-center d-flex align-items-center">
        <div className="contact__image offset-lg-1 col-lg-3 col-sm-5">
            <img src={contactPicture} alt={t("alt.contact.image_1")} />
        </div>

        <div className="description__text offset-lg-1 col-lg-5 col-sm-7">
          <p>
            <span className="contact__icon contact__icon--email">
            <MdEmail /> 
            </span>
            {t("pages.contact.email")} <a href="mailto:cararoggemans@gmail.com">cararoggemans@gmail.com</a>
          </p>
          <p>
            <span className="contact__icon contact__icon--whatsapp">
                 <RiMessage2Fill />
            </span>
            {t("pages.contact.whatsapp")} <a href="https://wa.me/+32479428601" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
          <p>
            <span className="contact__icon contact__icon--linkedin">
                 <FaLinkedin />
            </span>
            {t("pages.contact.linkedin")} <a href="https://www.linkedin.com/in/cararoggemans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;