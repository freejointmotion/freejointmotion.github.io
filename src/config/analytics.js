/** Google Analytics 4 — Free Joint Motion web stream */
export const GA_MEASUREMENT_ID = "G-B7QYJB1Y83";
export const GA_STREAM_ID = "14985507414";

export const trackPageView = (pathname) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const pagePath = pathname === "/" ? "/#/" : `/#${pathname}`;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
};
