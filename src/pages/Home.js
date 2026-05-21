import React from "react";
import { Link } from "react-router";
import HeroSection from "../components/HeroSection";
import multiAxSysImage from "../img/Multi-Ax-Sys.png";
import * as styles from "./Home.module.scss";

const pillars = [
  {
    title: "Neurophysiological Integrity",
    text: "Solutions grounded in how the nervous system actually controls movement—not inappropriate external negative bias.",
  },
  {
    title: "Precision Biomechanics",
    text: "Multi-axis mechanisms and 3D kinetic analysis for lower-leg and foot function across clinical and athletic contexts.",
  },
  {
    title: "Evidence & Collaboration",
    text: "Partnerships with orthopedists, sports medicine practitioners, and researchers worldwide.",
  },
];

const sectors = [
  { title: "Mobility", path: "/sectors" },
  { title: "Physical Activity & Sports", path: "/sectors" },
  { title: "Rehabilitation", path: "/sectors" },
  { title: "Personal Autonomy", path: "/sectors" },
];

const SectionHead = ({ eyebrow, title, lead, id, variant = "light" }) => (
  <header
    className={
      variant === "dark" ? styles.sectionHeadDark : styles.sectionHead
    }
  >
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h2 id={id} className={styles.sectionTitle}>
      {title}
    </h2>
    {lead && <p className={styles.sectionLead}>{lead}</p>}
  </header>
);

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />

      <main className={styles.main}>
        <section className={styles.block} aria-labelledby="home-intro">
          <div className={styles.inner}>
            <SectionHead
              id="home-intro"
              eyebrow="Who we are"
              title="Movement without limits. Performance without external biases."
              lead="Free Joint Motion LLC is an international company based in Weston, Florida, advancing biomechanical medical devices for sports medicine, injury prevention, and rehabilitation. Led by Professor Luis Commisso, we translate scientific knowledge into kinetic therapy innovations that respect human neurophysiology."
            />
          </div>
        </section>

        <section
          className={`${styles.block} ${styles.blockAccent}`}
          aria-labelledby="home-featured"
        >
          <div className={styles.innerNarrow}>
            <SectionHead
              id="home-featured"
              variant="dark"
              eyebrow="Flagship innovation"
              title="Multi-Ax-Sys"
              lead="A semi-open exoskeleton that supports, guides, and resists specific human foot movements—minimizing negative external forces while enabling natural 3D motion."
            />
            <img
              className={styles.projectMark}
              src={multiAxSysImage}
              alt=""
              width={88}
              height={66}
              aria-hidden="true"
            />
            <p className={styles.featuredDetail}>
              Adjustable resistance and precise tracking enhance rehabilitation,
              training, and clinical research.
            </p>
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

        <section className={styles.block} aria-labelledby="home-pillars">
          <div className={styles.innerWide}>
            <SectionHead
              id="home-pillars"
              eyebrow="Our approach"
              title="What we stand for"
              lead="Three principles guide how we design systems, interpret movement, and partner with clinicians and researchers."
            />
            <ul className={styles.pillarGrid}>
              {pillars.map((item, index) => (
                <li key={item.title}>
                  <article className={styles.pillarCard}>
                    <span className={styles.pillarIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.pillarTitle}>{item.title}</h3>
                    <p className={styles.pillarText}>{item.text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.block} aria-labelledby="home-explore">
          <div className={styles.innerWide}>
            <SectionHead
              id="home-explore"
              eyebrow="Where we apply our work"
              title="Sectors & scientific foundation"
              lead="From clinical rehabilitation to competitive sport—grounded in rigorous biomechanical and human-factors expertise."
            />
            <div className={styles.exploreGrid}>
              <article className={styles.explorePanel}>
                <h3 className={styles.exploreTitle}>Sectors we serve</h3>
                <ul className={styles.sectorList}>
                  {sectors.map((sector) => (
                    <li key={sector.title}>
                      <Link className={styles.sectorLink} to={sector.path}>
                        {sector.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link className={styles.textLink} to="/sectors">
                  Explore all sectors
                </Link>
              </article>
              <article className={styles.explorePanel}>
                <h3 className={styles.exploreTitle}>Knowledge areas</h3>
                <p className={styles.exploreText}>
                  Deep expertise in 3D anthropometry, human factors, digital health,
                  user experience, and biomedical engineering—applied to the relationship
                  between the human body, products, and clinical environments.
                </p>
                <Link className={styles.textLink} to="/knowledge">
                  View knowledge areas
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.block} ${styles.blockCta}`} aria-labelledby="home-cta">
          <div className={styles.innerNarrow}>
            <div className={styles.ctaPanel}>
              <SectionHead
                id="home-cta"
                eyebrow="Work with us"
                title="Partner with us"
                lead="Collaborate on research, clinical validation, or device development for lower-limb kinetic therapy."
              />
              <Link className={styles.btnPrimary} to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
