import React from "react";
import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import multiAxSysVideo720 from "url:../videos/x_web_720p.mp4";
import multiAxSysVideo1080 from "url:../videos/x_web_1080p.mp4";
import * as styles from "./Home.module.scss";

const principles = [
  {
    title: "Neurophysiological integrity",
    text: "Movement solutions grounded in how the nervous system controls motion.",
  },
  {
    title: "Precision biomechanics",
    text: "Multi-axis design and 3D kinetic analysis for clinical and athletic use.",
  },
  {
    title: "Evidence & collaboration",
    text: "Partnerships with clinicians, researchers, and institutions worldwide.",
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />

      <main className={styles.main}>
        <section
          className={`${styles.block} ${styles.blockAccent}`}
          aria-labelledby="home-featured"
        >
          <div className={styles.innerNarrow}>
            <header className={styles.sectionHeadDark}>
              <p className={styles.eyebrow}>Flagship innovation</p>
              <h2 id="home-featured" className={styles.sectionTitle}>
                Multi-Ax-Sys
              </h2>
              <p className={styles.sectionLead}>
                A semi-open system that supports, guides, and resists natural foot
                motion—enabling multi-planar movement with minimal inappropriate external force.
              </p>
            </header>
            <video
              className={styles.projectMark}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source
                src={multiAxSysVideo1080}
                type="video/mp4"
                media="(min-width: 1024px)"
              />
              <source src={multiAxSysVideo720} type="video/mp4" />
            </video>
            <div className={styles.actions}>
              <Link className={styles.btnPrimary} to="/projects">
                View project
              </Link>
              <Link className={styles.btnSecondary} to="/technologies">
                Our technology
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.block} aria-labelledby="home-principles">
          <div className={styles.innerWide}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>Our approach</p>
              <h2 id="home-principles" className={styles.sectionTitle}>
                Biomechanical medical devices for rehabilitation and performance
              </h2>
              <p className={styles.sectionLead}>
                Free Joint Motion LLC advances kinetic therapy innovations from Weston,
                Florida—translating scientific knowledge into systems that respect human
                neurophysiology.
              </p>
            </header>
            <ul className={styles.principleList}>
              {principles.map((item) => (
                <li key={item.title}>
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                  <p className={styles.principleText}>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className={styles.quickLinks}>
              <Link className={styles.textLink} to="/sectors">
                Sectors we serve
              </Link>
              <Link className={styles.textLink} to="/knowledge">
                Knowledge areas
              </Link>
              <Link className={styles.textLink} to="/publications">
                Research & observations
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.block} ${styles.blockCta}`} aria-labelledby="home-cta">
          <div className={styles.innerNarrow}>
            <div className={styles.ctaPanel}>
              <h2 id="home-cta" className={styles.ctaTitle}>
                Partner on research, validation, or device development
              </h2>
              <p className={styles.ctaLead}>
                Connect with our team to explore clinical collaboration, NDA access, or
                commercial partnership.
              </p>
              <Link className={styles.btnPrimary} to="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
