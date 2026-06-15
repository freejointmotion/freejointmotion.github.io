import ndaConfig from "./nda.config.json";

const fromFile = (ndaConfig.accessKey || "").trim();
const fromEnv = (process.env.NDA_ACCESS_KEY || "").trim();

export const NDA_ACCESS_KEY = fromEnv || fromFile;

/** Optional runtime override (copied to docs/nda.json on build). */
export const ndaConfigUrl = "/nda.json";

export const NDA_SESSION_KEY = "fjm_nda_access";
