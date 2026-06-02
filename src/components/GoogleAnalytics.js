import { useEffect } from "react";
import { useLocation } from "react-router";
import { getHashRoute, trackPageView } from "../config/analytics";

const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackPageView(pathname, search);
  }, [pathname, search]);

  useEffect(() => {
    const onHashChange = () => {
      const { pathname: hashPath, search: hashSearch } = getHashRoute();
      trackPageView(hashPath, hashSearch);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
};

export default GoogleAnalytics;
