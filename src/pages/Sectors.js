import React from "react";
import { Link } from "react-router";
import * as styles from "./Sectors.module.scss";

const sectors = [
  {
    id: "mobility",
    title: "Mobility",
    summary:
      "Enhancing movement capabilities for individuals with diverse needs, supporting quality of life through biomechanically sound solutions.",
    focus: "Gait, balance, and functional mobility assessment",
  },
  {
    id: "sports",
    title: "Physical Activity & Sports",
    summary:
      "Optimizing athletic performance and injury prevention with advanced lower-limb analysis and training technologies.",
    focus: "Performance, fatigue-related risk, and non-contact injury mechanisms",
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation",
    summary:
      "Innovative devices and protocols for recovery, functional training, and neurophysiologically grounded motor re-education.",
    focus: "Post-injury recovery and movement re-education",
  },
  {
    id: "autonomy",
    title: "Personal Autonomy",
    summary:
      "Supporting independence through tailored biomechanical solutions that respect individual anatomy and capability.",
    focus: "Daily function and long-term musculoskeletal health",
  },
];

const Sectors = () => {
  return (
    <section className={styles.sectors}>
      <header className={styles.hero}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Where we apply our science</p>
          <h2 className={styles.heroTitle}>Our Sectors</h2>
          <p className={styles.heroLead}>
            Free Joint Motion delivers cutting-edge biomechanical solutions across clinical,
            athletic, and everyday movement contexts—always aligned with human neurophysiology.
          </p>
        </div>
      </header>

      <div className={styles.body}>
        <p className={styles.intro} id="sectors-intro">
          Each sector benefits from our expertise in assessment, device innovation, and
          evidence-based kinetic therapy—including platforms such as the{" "}
          <Link className={styles.inlineLink} to="/projects">
            Multi-Ax-Sys
          </Link>
          .
        </p>

        <ul className={styles.grid} aria-labelledby="sectors-intro">
          {sectors.map((sector, index) => (
            <li key={sector.id}>
              <article
                className={styles.card}
                aria-labelledby={`sector-${sector.id}-title`}
              >
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 id={`sector-${sector.id}-title`} className={styles.cardTitle}>
                  {sector.title}
                </h3>
                <p className={styles.cardSummary}>{sector.summary}</p>
                <p className={styles.cardFocus}>
                  <span className={styles.focusLabel}>Focus: </span>
                  {sector.focus}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Explore how our technology and services support these sectors.
          </p>
          <div className={styles.footerActions}>
            <Link className={styles.btnPrimary} to="/technologies">
              Technologies
            </Link>
            <Link className={styles.btnSecondary} to="/services">
              Services
            </Link>
            <Link className={styles.btnSecondary} to="/contact">
              Contact us
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Sectors;
