import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';
import LanguageGuard from './components/LanguageGuard';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/404';
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
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
        </Route>
  
        <Route path="/en/404" element={<NotFound />} />
        <Route path="/nl/404" element={<NotFound />} />
        <Route path="*" element={<AutoRedirect404 />} />
      </Routes>
    </>
  );
}

export default App;
