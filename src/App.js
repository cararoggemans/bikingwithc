import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';
import LanguageGuard from './components/LanguageGuard';

import Home from './pages/Home';
import Work from './pages/Projects';
import Expertise from './pages/Expertise';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/404';

import QualityFence from './pages/work/QualityFence';
import XendoBarMenu from './pages/work/XendoBarMenu';
import XendoPlanning from './pages/work/XendoPlanning';
import XendoSocials from './pages/work/XendoSocials';
import TrixxoCampaign from './pages/work/TrixxoCampaign';
import CabinCrewThanks from './pages/work/CabinCrewThanks';
import ChocoLogo from './pages/work/ChocoLogo';
import WeddingInvitation from './pages/work/WeddingInvitation';
import BirthdayCard from './pages/work/BirthdayCard';
import TouretteWebdesign from './pages/work/TouretteWebdesign';

import BlogDetail from './pages/BlogDetail';

import './i18n';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const AutoRedirect404 = () => {
    const browserLang = navigator.language.startsWith('nl') ? 'nl' : 'en';
    return <Navigate to={`/${browserLang}/404`} replace />;
  };
  
  useEffect(() => {
    const langFromURL = location.pathname.split('/')[1];
    const browserLang = navigator.language.startsWith('nl') ? 'nl' : 'en';

    if (!langFromURL) {
      navigate(`/${browserLang}`, { replace: true });
    } else if (langFromURL !== i18n.language) {
      i18n.changeLanguage(langFromURL);
    }
  }, [location.pathname, i18n, navigate]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate replace to="/en" />} />

        <Route path="/:lang" element={<LanguageGuard />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:slug" element={<BlogDetail />} />

          {/* Work detailpagina's */}
          <Route path="work/quality-fence-gardens" element={<QualityFence />} />
          <Route path="work/xendo-bar-menu" element={<XendoBarMenu />} />
          <Route path="work/xendo-planning" element={<XendoPlanning />} />
          <Route path="work/xendo-socials" element={<XendoSocials />} />
          <Route path="work/trixxo-20-years" element={<TrixxoCampaign />} />
          <Route path="work/wedding-invitation" element={<WeddingInvitation />} />
          <Route path="work/cabin-crew-thanks" element={<CabinCrewThanks />} />
          <Route path="work/choco-logo" element={<ChocoLogo />} />
          <Route path="work/birthday-card-design" element={<BirthdayCard />} />
          <Route path="work/tourette-webdesign" element={<TouretteWebdesign />} />
        </Route>
  
        <Route path="/en/404" element={<NotFound />} />
        <Route path="/nl/404" element={<NotFound />} />
        <Route path="*" element={<AutoRedirect404 />} />
      </Routes>
    </>
  );
}

export default App;
