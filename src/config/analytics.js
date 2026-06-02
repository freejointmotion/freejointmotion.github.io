/** Google Analytics 4 — Free Joint Motion web stream */
export const GA_MEASUREMENT_ID = "G-B7QYJB1Y83";
export const GA_STREAM_ID = "14985507414";

const ROUTE_TITLES = {
  "/": "Home",
  "/about": "About",
  "/sectors": "Sectors",
  "/knowledge": "Knowledge",
  "/technologies": "Technologies",
  "/services": "Services",
  "/projects": "Projects",
  "/news": "News",
  "/publications": "Publications",
  "/impact": "Impact",
  "/contact": "Contact",
};

const SITE_NAME = "Free Joint Motion";

/** Read hash route from the browser (source of truth for HashRouter). */
export const getHashRoute = () => {
  const hash = window.location.hash || "#/";
  const match = hash.match(/^#\/?(.*)$/);
  const path = match?.[1] ? `/${match[1].split("?")[0]}` : "/";
  const search = hash.includes("?") ? `?${hash.split("?")[1]}` : "";
  return { pathname: path === "/" ? "/" : path.replace(/\/$/, "") || "/", search };
};

/** Full URL including hash, e.g. https://freejointmotion.com/#/projects */
export const getHashPageUrl = (pathname, search = "") => {
  const hashPath = pathname === "/" ? "#/" : `#${pathname}`;
  const base = window.location.origin + window.location.pathname.replace(/index\.html$/i, "");
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}/${hashPath}${search}`.replace(/([^:]\/)\/+/g, "$1");
};

/** Virtual path for GA reports (hash visible in path segment). */
export const getHashPagePath = (pathname, search = "") => {
  const hashPath = pathname === "/" ? "/#/" : `/#${pathname}`;
  return `${hashPath}${search}`;
};

export const getPageTitle = (pathname) => {
  const page = ROUTE_TITLES[pathname] || pathname.replace(/^\//, "") || "Home";
  return `${page} — ${SITE_NAME}`;
};

const runWhenGtagReady = (fn) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    fn();
    return;
  }

  const start = Date.now();
  const timer = window.setInterval(() => {
    if (typeof window.gtag === "function") {
      window.clearInterval(timer);
      fn();
    } else if (Date.now() - start > 5000) {
      window.clearInterval(timer);
    }
  }, 50);
};

export const trackEvent = (eventName, params = {}) => {
  runWhenGtagReady(() => {
    window.gtag("event", eventName, {
      send_to: GA_MEASUREMENT_ID,
      page_location: window.location.href,
      ...params,
    });
  });
};

export const trackPageView = (pathname, search = "") => {
  if (typeof window === "undefined") return;

  const apply = () => {
    const href = window.location.href;
    const pagePath = getHashPagePath(pathname, search);
    const pageTitle = getPageTitle(pathname);

    document.title = pageTitle;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: href,
      page_title: pageTitle,
    });

    window.gtag("event", "page_view", {
      send_to: GA_MEASUREMENT_ID,
      page_path: pagePath,
      page_location: href,
      page_title: pageTitle,
      page_referrer: document.referrer || undefined,
    });
  };

  requestAnimationFrame(() => {
    runWhenGtagReady(apply);
  });
};
