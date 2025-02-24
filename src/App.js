import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';

// Pagina's importeren
import Home from './pages/Home';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Work detailpagina's
import QualityFence from './pages/work/QualityFence';
import XendoBarMenu from './pages/work/XendoBarMenu';
import XendoPlanning from './pages/work/XendoPlanning';
import XendoSocials from './pages/work/XendoSocials';
import TrixxoCampaign from './pages/work/TrixxoCampaign';
import CabinCrewThanks from './pages/work/CabinCrewThanks';
import ChocoLogo from './pages/work/ChocoLogo';
import WeddingInvitation from './pages/work/WeddingInvitation';


import BlogDetail from './pages/BlogDetail';

import './i18n';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  useEffect(() => {
    const langFromURL = location.pathname.split('/')[1]; // Haal de taal uit de URL
    if (langFromURL && langFromURL !== i18n.language) {
      i18n.changeLanguage(langFromURL); // Update de taal in i18n als de URL verandert
    }
  }, [location.pathname, i18n]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate replace to="/en" />} />

        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/work" element={<Work />} />
        <Route path="/:lang/blog" element={<Blog />} />
        <Route path="/:lang/contact" element={<Contact />} />

        {/* Work detailpagina's */}
        <Route path="/:lang/work/quality-fence-gardens" element={<QualityFence />} />
        <Route path="/:lang/work/xendo-bar-menu" element={<XendoBarMenu />} />
        <Route path="/:lang/work/xendo-planning" element={<XendoPlanning />} />
        <Route path="/:lang/work/xendo-socials" element={<XendoSocials />} />
        <Route path="/:lang/work/trixxo-20-years" element={<TrixxoCampaign />} />
        <Route path="/:lang/work/wedding-invitation" element={<WeddingInvitation />} />
        <Route path="/:lang/work/cabin-crew-thanks" element={<CabinCrewThanks />} />
        <Route path="/:lang/work/choco-logo" element={<ChocoLogo />} />

         {/* Dynamische blog detailpagina */}
         <Route path="/:lang/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
