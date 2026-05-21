import React from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import * as styles from "./Technologies.module.scss";

const capabilities = [
  {
    title: "Multi-Axis Bio-Functional Architecture",
    description:
      "Independent axes and sliding planes adapt instantaneously to dynamic foot motion—delivering precise support, guidance, and resistance without fighting the body’s natural movement.",
  },
  {
    title: "External Force Mitigation",
    description:
      "Unlike conventional mechanisms, our approach reduces adverse effects from external counter-forces, improving safety and effectiveness during rehabilitation and training.",
  },
  {
    title: "Programmable Resistance Modes",
    description:
      "Isometric, isotonic, and natural isokinetic torque modes optimize endurance, correct motion patterns, and enhance foot performance across clinical and athletic applications.",
  },
  {
    title: "Neuroplasticity & Movement Re-Education",
    description:
      "Technology designed to support reorganization of neurophysiology through structured movement education and re-education for lower-leg and foot dysfunction recovery.",
  },
  {
    title: "3D Kinetic Measurement",
    description:
      "Integrated sensing enables accurate lower-leg and foot motion analysis for clinical assessment, medical research, and trial protocols.",
  },
  {
    title: "Anatomical Adaptability",
    description:
      "Adjustable configuration accommodates individual anatomy and application context—from rehabilitation clinics to sports performance environments.",
  },
];

const Technologies = () => {
  return (
    <PageShell
      title="Technologies"
      intro="Core biomechanical and neurophysiological platforms that power our medical devices and kinetic therapy solutions."
    >
      <p className={styles.lead}>
        Free Joint Motion develops mechanisms that align with human neurophysiology rather than
        imposing inappropriate external bias. Our flagship platform—the{" "}
        <strong>Multi-Ax-Sys</strong>—embodies this philosophy through precision multi-axis control
        and real-time adaptability.
      </p>

      <div className={styles.grid}>
        {capabilities.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </article>
        ))}
      </div>

      <p className={styles.cta}>
        See the flagship application in{" "}
        <Link to="/projects">Projects</Link> or{" "}
        <Link to="/contact">contact us</Link> for collaboration and licensing inquiries.
      </p>
    </PageShell>
  );
};

export default Technologies;
