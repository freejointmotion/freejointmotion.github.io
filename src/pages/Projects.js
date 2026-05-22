import React from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import multiAxSysVideo720 from "url:../videos/x_web_720p.mp4";
import multiAxSysVideo1080 from "url:../videos/x_web_1080p.mp4";
import * as styles from "./Projects.module.scss";

const features = [
  {
    title: "Enhanced Lower Limb Function",
    description:
      "Support and assistance during movement, promoting proper alignment and optimal muscle activation patterns.",
  },
  {
    title: "Injury Prevention",
    description:
      "Reduced stress on the lower limb kinetic chain helps prevent injuries and overuse conditions.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improved agility, balance, and power output for athletes and individuals seeking performance enhancement.",
  },
  {
    title: "Customizability & Adaptability",
    description:
      "Adjustable for rehabilitation, sports training, clinical research, and daily functional applications.",
  },
];

const Projects = () => {
  return (
    <PageShell
      title="Projects"
      intro="Innovations in kinetic therapy and lower-limb biomechanics."
    >
      <article className={styles.project}>
        <p className={styles.eyebrow}>Flagship product</p>
        <h3 className={styles.projectTitle}>Multi-Ax-Sys</h3>

        <div className={styles.projectVisual}>
          <video
            className={styles.projectVideo}
            controls
            playsInline
            preload="metadata"
            aria-label="Multi-Ax-Sys multi-axis foot motion concept"
          >
            <source
              src={multiAxSysVideo1080}
              type="video/mp4"
              media="(min-width: 1024px)"
            />
            <source src={multiAxSysVideo720} type="video/mp4" />
          </video>
        </div>

        <p className={styles.elevator}>
          Introducing the <strong>Multi-Ax-Sys</strong>: a revolutionary semi-open exoskeleton
          designed to support, guide, and resist specific human foot movements. Unlike other
          mechanisms, it minimizes negative external forces and allows for natural 3D motion.
          Ideal for orthopedists, sports medicine practitioners, and rehabilitation, it aids in
          neuroplasticity and improves lower leg and foot kinetic chain function. With adjustable
          resistance and precise motion tracking, it enhances training, rehabilitation, and
          research. The Multi-Ax-Sys empowers the foot, prevents injuries, and optimizes
          performance—join us in revolutionizing lower limb motion.
        </p>

        <div className={styles.overview}>
          <h4 className={styles.sectionLabel}>Overview</h4>
          <p>
            The Multi-Ax-Sys is a groundbreaking bio-functional exoskeleton designed to revolutionize
            lower-leg and foot rehabilitation. This unique mechanism allows for precise and customized
            support, guidance, and resistance for specific human foot movements. By incorporating
            multiple axes and sliding planes, it adapts instantaneously to dynamic changes in foot
            motion.
          </p>
          <p>
            Unlike other existing mechanisms, it mitigates adverse effects caused by external
            counter-forces, ensuring the safety and effectiveness of rehabilitation and training. The
            Multi-Ax-Sys is not just a device, but a comprehensive solution for orthopedists, sports
            medicine practitioners, and researchers—facilitating neuroplasticity and the reorganization
            of neurophysiology through movement education and re-education.
          </p>
          <p>
            By employing resistance modes such as isometric, isotonic, and natural isokinetic torque,
            the system optimizes endurance, corrects motion patterns, and enhances foot performance.
            It accommodates users&apos; anatomical characteristics with precise control, and serves as a
            valuable tool for medical research and clinical trials with accurate 3D kinetic data for
            lower-leg and foot motion analysis.
          </p>
        </div>

        <div className={styles.productBlock}>
          <h4 className={styles.sectionLabel}>Product description</h4>
          <p>
            The Multi-Ax-Sys is a state-of-the-art wearable device designed to follow lower limb
            movements. It incorporates sensors and actuators to optimize biomechanics and enhance
            performance while minimizing the risk of injuries.
          </p>
        </div>

        <h4 className={styles.sectionLabel}>Key features & benefits</h4>
        <ul className={styles.featureGrid}>
          {features.map((feature) => (
            <li key={feature.title}>
              <article className={styles.featureCard}>
                <h5 className={styles.featureTitle}>{feature.title}</h5>
                <p className={styles.featureText}>{feature.description}</p>
              </article>
            </li>
          ))}
        </ul>

        <p className={styles.vision}>
          We envision a future where the Multi-Ax-Sys becomes a cornerstone of medical practice,
          transforming the lives of patients and athletes alike—unlocking the full potential of
          lower-leg and foot rehabilitation and kinetic therapy.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryBtn} to="/technologies">
            Explore the technology
          </Link>
          <Link className={styles.secondaryBtn} to="/contact">
            Partner with us
          </Link>
        </div>
      </article>
    </PageShell>
  );
};

export default Projects;
