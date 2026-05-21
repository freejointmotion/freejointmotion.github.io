import React from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import * as styles from "./Services.module.scss";

const services = [
  {
    title: "Biomechanical Assessment",
    description:
      "Functional movement analysis and biomechanical evaluation to identify loading patterns, fatigue-related risk, and opportunities for intervention.",
  },
  {
    title: "Medical Device Development",
    description:
      "Support for the design and validation of biomechanical medical devices—from concept through human-factors and usability considerations.",
  },
  {
    title: "Rehabilitation Consulting",
    description:
      "Guidance on rehabilitation protocols grounded in neurophysiological principles, reducing reliance on inappropriate external negative bias.",
  },
  {
    title: "Research & Field Observations",
    description:
      "Documented real-world movement and clinical observations to inform product design, training, and institutional collaboration.",
    link: "/publications",
    linkLabel: "View research observations",
  },
  {
    title: "Institutional Collaboration",
    description:
      "Partnerships with clinics, sports organizations, and research institutions to validate innovations and scale evidence-based practice.",
  },
];

const Services = () => {
  return (
    <PageShell
      title="Services"
      intro="Biomechanical expertise across assessment, device development, rehabilitation consulting, and collaborative research."
    >
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
            {service.link && (
              <Link className={styles.cardLink} to={service.link}>
                {service.linkLabel}
              </Link>
            )}
          </article>
        ))}
      </div>
      <p className={styles.cta}>
        Interested in working with us?{" "}
        <Link to="/contact">Get in touch</Link>.
      </p>
    </PageShell>
  );
};

export default Services;
