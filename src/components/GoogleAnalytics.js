import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { trackPageView } from "../config/analytics";

const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    trackPageView(pathname, search);
  }, [pathname, search]);

  return null;
};

export default GoogleAnalytics;
