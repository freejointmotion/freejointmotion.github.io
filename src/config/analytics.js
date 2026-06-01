/** Google Analytics 4 — Free Joint Motion web stream */
export const GA_MEASUREMENT_ID = "G-B7QYJB1Y83";
export const GA_STREAM_ID = "14985507414";

/** Full URL for hash-based routes, e.g. https://freejointmotion.com/#/projects */
export const getHashPageUrl = (pathname, search = "") => {
  const hashPath = pathname === "/" ? "/#/" : `/#${pathname}`;
  return `${window.location.origin}${hashPath}${search}`;
};

/** Path segment sent to GA (includes hash so reports show /#/projects not /) */
export const getHashPagePath = (pathname, search = "") => {
  const hashPath = pathname === "/" ? "/#/" : `/#${pathname}`;
  return `${hashPath}${search}`;
};

export const trackPageView = (pathname, search = "") => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const pageLocation = getHashPageUrl(pathname, search);
  const pagePath = getHashPagePath(pathname, search);

  window.gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_location: pageLocation,
    page_path: pagePath,
    page_title: document.title,
  });
};
