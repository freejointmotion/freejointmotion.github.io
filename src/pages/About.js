import React from "react";
import * as styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.bg}></div>
      
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          Free Joint Motion LLC is an international company based in Weston, Florida, dedicated to
          innovation in biomechanical medical devices. Led by Professor Luis Commisso, our team
          focuses on solutions for sports medicine, injury prevention, and rehabilitation.
        </p>

        <h3 className={styles.subtitle}>Our Mission</h3>
        <p className={styles.text}>
          Our goal is to improve musculoskeletal health through cutting-edge technological solutions,
          collaborating with global institutions to validate our innovations.
        </p>

        <h3 className={styles.subtitle}>Meet Our Team</h3>
        <ul className={styles.teamList}>
          <li><strong>Luis Commisso</strong>Founder & Inventor</li>
          <li><strong>Nestor Lentini</strong>Medical Specialist</li>
          <li><strong>Luis Ayet Blanchard</strong>CEO</li>
          <li><strong>Federico Commisso</strong>Software Developer</li>
          <li><strong>Jose Manuel Valladares</strong>Customer Outreach</li>
        </ul>
      </div>
    </section>
  );
};

export default About;