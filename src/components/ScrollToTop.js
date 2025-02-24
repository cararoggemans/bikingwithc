import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Zorgt ervoor dat het direct gebeurt zonder scroll-effect
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
