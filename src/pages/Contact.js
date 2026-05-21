import React, { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import {
  formspreeEndpoint as bundledEndpoint,
  formspreeConfigUrl,
} from "../config/formspree";
import * as styles from "./Contact.module.scss";

const Contact = () => {
  const [endpoint, setEndpoint] = useState(bundledEndpoint);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (bundledEndpoint) return;

    let cancelled = false;

    fetch(formspreeConfigUrl)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.formId) return;
        const id = String(data.formId).trim();
        if (id) setEndpoint(`https://formspree.io/f/${id}`);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(event.target),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        event.target.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageShell
      title="Contact"
      intro="Reach our team in Weston, Florida for collaborations, consulting, or general inquiries."
      narrow
    >
      <div className={styles.layout}>
        <aside className={styles.infoPanel}>
          <h3 className={styles.infoTitle}>Free Joint Motion LLC</h3>
          <p className={styles.infoText}>
            International biomechanical medical device innovation, sports medicine,
            injury prevention, and rehabilitation.
          </p>
          <p className={styles.infoText}>
            <strong>Location:</strong> Weston, Florida
          </p>
        </aside>

        <div className={styles.formWrap}>
          {!endpoint && (
            <p className={styles.notice} role="status">
              Contact form is not configured. Set{" "}
              <code>formId</code> in{" "}
              <code>src/config/formspree.config.json</code>, then run{" "}
              <code>npm run build</code> before deploying to GitHub Pages.
            </p>
          )}

          <form
            className={styles.form}
            action={endpoint || undefined}
            method={endpoint ? "POST" : undefined}
            onSubmit={handleSubmit}
          >
            <label className={styles.label} htmlFor="contact-name">
              Name <span className={styles.required}>(required)</span>
            </label>
            <input
              id="contact-name"
              className={styles.input}
              type="text"
              name="name"
              required
              autoComplete="name"
              disabled={!endpoint || status === "submitting"}
            />

            <label className={styles.label} htmlFor="contact-email">
              Email <span className={styles.required}>(required)</span>
            </label>
            <input
              id="contact-email"
              className={styles.input}
              type="email"
              name="email"
              required
              autoComplete="email"
              disabled={!endpoint || status === "submitting"}
            />

            <label className={styles.label} htmlFor="contact-organization">
              Organization
            </label>
            <input
              id="contact-organization"
              className={styles.input}
              type="text"
              name="organization"
              autoComplete="organization"
              disabled={!endpoint || status === "submitting"}
            />

            <label className={styles.label} htmlFor="contact-subject">
              Subject <span className={styles.required}>(required)</span>
            </label>
            <select
              id="contact-subject"
              className={styles.input}
              name="subject"
              required
              defaultValue=""
              disabled={!endpoint || status === "submitting"}
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option value="General inquiry">General inquiry</option>
              <option value="Services & consulting">Services & consulting</option>
              <option value="Research collaboration">Research collaboration</option>
              <option value="Media">Media</option>
            </select>

            <label className={styles.label} htmlFor="contact-message">
              Message <span className={styles.required}>(required)</span>
            </label>
            <textarea
              id="contact-message"
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              rows={6}
              required
              disabled={!endpoint || status === "submitting"}
            />

            <input
              type="text"
              name="_gotcha"
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              className={styles.submit}
              disabled={!endpoint || status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className={styles.feedbackSuccess} role="status">
                Thank you. Your message has been sent—we will respond shortly.
              </p>
            )}
            {status === "error" && (
              <p className={styles.feedbackError} role="alert">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
            {status === "unconfigured" && (
              <p className={styles.feedbackError} role="alert">
                Form is not configured. Add your Formspree form ID and rebuild the site.
              </p>
            )}
          </form>
        </div>
      </div>
    </PageShell>
  );
};

export default Contact;
