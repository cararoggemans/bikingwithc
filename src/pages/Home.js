import React from 'react';
import SmallDescription from '../components/SmallDescription';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import SelectedWork from '../components/SelectedWork';
import SelectedBlog from '../components/SelectedBlog';
import homepageImage from '../img/craftingcreativecontent-header.png';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
        <Hero 
          backgroundImage={homepageImage} 
          title={t("hero.title")}
          teaserText={t("hero.subtitle")}
        />
        <SmallDescription />
        <SelectedWork />
        <Quote />
        <SelectedBlog />
        <Footer />
    </div>
  );
}

export default Home;