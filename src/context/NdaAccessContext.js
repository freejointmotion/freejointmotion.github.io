import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  NDA_ACCESS_KEY,
  NDA_SESSION_KEY,
  ndaConfigUrl,
} from "../config/nda";

const NdaAccessContext = createContext(null);

const readSession = () => {
  try {
    return sessionStorage.getItem(NDA_SESSION_KEY) === "granted";
  } catch {
    return false;
  }
};

const writeSession = (granted) => {
  try {
    if (granted) {
      sessionStorage.setItem(NDA_SESSION_KEY, "granted");
    } else {
      sessionStorage.removeItem(NDA_SESSION_KEY);
    }
  } catch {
    /* private browsing */
  }
};

export const NdaAccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(readSession);
  const [accessKey, setAccessKey] = useState(NDA_ACCESS_KEY);
  const [ready, setReady] = useState(!ndaConfigUrl);

  useEffect(() => {
    if (!ndaConfigUrl) return;

    fetch(ndaConfigUrl)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const key = (data?.accessKey || "").trim();
        if (key) setAccessKey(key);
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const grantAccess = useCallback(() => {
    setHasAccess(true);
    writeSession(true);
  }, []);

  const revokeAccess = useCallback(() => {
    setHasAccess(false);
    writeSession(false);
  }, []);

  const verifyAccessKey = useCallback(
    (candidate) => {
      const normalized = (candidate || "").trim();
      if (!normalized || !accessKey || accessKey === "CHANGE_ME_SET_NDA_PASSWORD") {
        return false;
      }
      if (normalized === accessKey) {
        grantAccess();
        return true;
      }
      return false;
    },
    [accessKey, grantAccess]
  );

  const value = useMemo(
    () => ({
      hasAccess,
      ready,
      grantAccess,
      revokeAccess,
      verifyAccessKey,
      isConfigured: accessKey && accessKey !== "CHANGE_ME_SET_NDA_PASSWORD",
    }),
    [hasAccess, ready, grantAccess, revokeAccess, verifyAccessKey, accessKey]
  );

  return (
    <NdaAccessContext.Provider value={value}>{children}</NdaAccessContext.Provider>
  );
};

export const useNdaAccess = () => {
  const context = useContext(NdaAccessContext);
  if (!context) {
    throw new Error("useNdaAccess must be used within NdaAccessProvider");
  }
  return context;
};
