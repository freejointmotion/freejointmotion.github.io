import React, { useId, useState } from "react";
import { Link } from "react-router";
import { useNdaAccess } from "../context/NdaAccessContext";
import * as styles from "./NdaGate.module.scss";

const NdaGate = ({
  children,
  title = "Confidential — NDA required",
  description = "This material is available to partners who have executed a non-disclosure agreement. Enter the access key provided after signing.",
  includes,
  showVideoPlaceholder = false,
}) => {
  const inputId = useId();
  const { hasAccess, verifyAccessKey, revokeAccess, isConfigured } = useNdaAccess();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!isConfigured) {
      setError("Access is not configured yet. Please contact Free Joint Motion.");
      return;
    }

    if (!verifyAccessKey(value)) {
      setError("Invalid access key. Contact us if you have signed an NDA.");
      return;
    }

    setValue("");
  };

  if (hasAccess) {
    return (
      <div className={styles.unlocked}>
        <div className={styles.notice}>
          <p className={styles.noticeText}>
            Confidential content — authorized NDA access.
          </p>
          <button type="button" className={styles.signOut} onClick={revokeAccess}>
            End session
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={styles.gate}>
      {showVideoPlaceholder && (
        <div className={styles.placeholder} aria-hidden="true">
          Product demonstration video available under NDA
        </div>
      )}
      <h4 className={styles.gateTitle}>{title}</h4>
      <p className={styles.gateText}>
        {description}{" "}
        <Link to="/contact">Request NDA access</Link>.
      </p>
      {includes?.length > 0 && (
        <ul className={styles.includesList}>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <form className={styles.form} onSubmit={onSubmit}>
        <label className="visually-hidden" htmlFor={inputId}>
          NDA access key
        </label>
        <input
          id={inputId}
          className={styles.input}
          type="password"
          name="nda-access-key"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Access key"
          autoComplete="off"
        />
        <button className={styles.submit} type="submit">
          Unlock
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default NdaGate;
