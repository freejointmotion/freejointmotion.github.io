import { useEffect } from "react";
import { useLocation } from "react-router";
import { trackPageView } from "../config/analytics";

const GoogleAnalytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export default GoogleAnalytics;
