import React from "react";
import * as styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}></div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Enhance Your Agility</h1>
        <p className={styles.subtitle}>Innovating biomechanical medical devices for rehabilitation and performance.</p>
        <button className={styles.cta}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;