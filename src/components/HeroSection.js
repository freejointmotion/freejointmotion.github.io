import React from "react";
import { Link } from "react-router";
import * as styles from "./HeroSection.module.scss";
import heroVideo from "url:../videos/hero.mp4";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <video autoPlay muted loop playsInline className={styles.bgVideo}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.overlay}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Free Joint Motion</p>
          <h1 className={styles.title}>
            Movement without limits.
            <span className={styles.titleAccent}>
              Performance: minimizing external biases.
            </span>
          </h1>
          <p className={styles.subtitle}>
            Biomechanical medical devices for rehabilitation, injury prevention, and
            athletic performance.
          </p>
          <div className={styles.actions}>
            <Link className={styles.ctaPrimary} to="/contact">
              Get in touch
            </Link>
            <Link className={styles.ctaSecondary} to="/projects">
              View Multi-Ax-Sys
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
