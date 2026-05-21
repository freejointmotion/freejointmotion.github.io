import React from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import * as styles from "./Impact.module.scss";

const impactAreas = [
  {
    title: "Injury Prevention",
    description:
      "Advancing understanding of non-contact and fatigue-related failure mechanisms to support safer performance in sport and daily activity.",
  },
  {
    title: "Rehabilitation Quality",
    description:
      "Promoting interventions aligned with intrinsic neurophysiological responses rather than counterproductive external negative bias.",
  },
  {
    title: "Evidence-Based Design",
    description:
      "Translating field observations and biomechanical analysis into medical devices and protocols validated through institutional collaboration.",
  },
  {
    title: "Global Reach",
    description:
      "An international company based in Weston, Florida, partnering with organizations worldwide to improve musculoskeletal health.",
  },
];

const Impact = () => {
  return (
    <PageShell
      title="Impact"
      intro="How our work in biomechanics, rehabilitation science, and medical device innovation creates measurable value for people and institutions."
    >
      <div className={styles.grid}>
        {impactAreas.map((area) => (
          <article key={area.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{area.title}</h3>
            <p className={styles.cardText}>{area.description}</p>
          </article>
        ))}
      </div>

      <blockquote className={styles.quote}>
        <p>
          Our goal is to improve musculoskeletal health through cutting-edge technological
          solutions, collaborating with global institutions to validate our innovations.
        </p>
      </blockquote>

      <p className={styles.cta}>
        Explore our{" "}
        <Link to="/sectors">sectors</Link>,{" "}
        <Link to="/publications">research observations</Link>, or{" "}
        <Link to="/contact">start a conversation</Link>.
      </p>
    </PageShell>
  );
};

export default Impact;
