import React from 'react';
import SmallDescription from '../components/SmallDescription';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import SelectedBlog from '../components/SelectedBlog';
import MetaDescription from '../components/MetaDescription';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
        <MetaDescription
          title={t("meta.home.title")} 
          description={t("meta.home.description")} 
        />
        <Hero 
          backgroundBaseName="home"
          title={t("hero.title")}
          teaserText={t("hero.subtitle")}
          backgroundAlt={t("hero.alt")}
        />
        <SmallDescription />
        <Quote />
        <SelectedBlog />
        <Footer />
    </div>
  );
}

export default Home;