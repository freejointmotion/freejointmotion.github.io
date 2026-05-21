import formConfig from "./formspree.config.json";

// GitHub Pages is static: the form ID must be present when you run `npm run build`
// (via this file or FORMSPREE_FORM_ID). It is not read from .env in the browser.
// The ID is public in the built site—same as any Formspree embed.
const fromFile = (formConfig.formId || "").trim();
const fromEnv = (process.env.FORMSPREE_FORM_ID || "").trim();

export const FORMSPREE_FORM_ID = fromEnv || fromFile;

export const formspreeEndpoint = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : null;

/** URL for optional runtime config (copied to docs/formspree.json on build). */
export const formspreeConfigUrl = "/formspree.json";
