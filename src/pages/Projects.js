import React from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import multiAxSysVideo from "url:../videos/multi-ax-sys_web_720p.mp4";
import patentFigure1 from "../img/US20050239611A1-20051027-D00001.jpg";
import patentFigure2 from "../img/US20050239611A1-20051027-D00002.jpg";
import patentFigure3 from "../img/US20050239611A1-20051027-D00003.jpg";
import patentFigure4 from "../img/US20050239611A1-20051027-D00004.jpg";
import * as styles from "./Projects.module.scss";
import team1Presentation from "url:../../public/documents/mba-741-team-1-presentation.pptx";
import team1Report from "url:../../public/documents/mba-741-team-1-consulting-report.docx";
import team3Presentation from "url:../../public/documents/mba-741-team-3-presentation.pptx";
import team3Report from "url:../../public/documents/mba-741-team-3-final-report.docx";

const MBA_DOCUMENTS = {
  team1Presentation,
  team1Report,
  team3Presentation,
  team3Report,
};

const PATENT_NUMBER = "US6878102B1";
const PATENT_URL = "https://patents.google.com/patent/US6878102B1/en";

const patentDetails = [
  { label: "Publication number", value: "US6878102B1" },
  { label: "Application", value: "US09/934,319" },
  { label: "Filed", value: "August 21, 2001" },
  { label: "Granted / published", value: "April 12, 2005" },
  { label: "Inventor", value: "Luis Alberto Commisso" },
  { label: "Status", value: "Expired — lifetime (adjusted expiration February 10, 2022)" },
];

const PATENT_ABSTRACT =
  "An exercise assembly structured to direct the foot-ankle-leg, knee, etc. and associated portions of a person's body through a plurality of different paths of movement, wherein each path of movement comprises an at least partially different configuration such that exercise resulting from the various movements will be concentrated on predetermined portions of the body being exercised. The platform is suspended by a support assembly interconnected to a base and is preferably, but not exclusively, directed through the aforementioned paths of movement manually by the user. A sensor assembly including a processor may determine and store selected movements of the platform for graphical or other visual display to the user and for programmed duplication of the sensed paths movement when desired. A weight assembly including at least one but preferably a plurality of different weights are interconnected to the platform and extend outwardly therefrom to provide additional resistive forces to the user's foot, ankle, and leg as they are exercised.";

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

const developmentTimeline = [
  {
    period: "2001–2005",
    detail:
      "U.S. application US09/934,319 filed August 21, 2001 and granted April 12, 2005 as U.S. Patent US6878102B1 (Leg-Ankle-Foot Exercise Assembly, inventor: Luis Alberto Commisso)—a user-driven platform guiding the foot, ankle, and lower leg through multiple paths of movement with adjustable resistance.",
  },
  {
    period: "2019–2021",
    detail:
      "First prototype entered IRB-reviewed validation pathways at the University of Miami and drew clinical research interest from additional universities in the United States and abroad.",
  },
  {
    period: "2021–2023",
    detail:
      "Renewed mechanical design and engineering enhancements to the Multi-Ax-Sys platform, refining multi-axis control, selective axis locking, and data capture for 3-D foot–ankle–knee kinematics.",
  },
];

const patentFigures = [
  {
    src: patentFigure1,
    alt: "Patent Fig. 1 — leg-ankle-foot exercise assembly with multi-axis movement path",
    caption:
      "Fig. 1 — Foot platform, support assembly, adjustable weights, and rotational path of movement.",
  },
  {
    src: patentFigure2,
    alt: "Patent Figs. 2–5 — side and front views of the exercise assembly",
    caption:
      "Figs. 2–5 — Side profile and front views showing tilt, dorsiflexion, and resistive loading.",
  },
  {
    src: patentFigure3,
    alt: "Patent Figs. 6–8 — three-dimensional exercise paths",
    caption:
      "Figs. 6–8 — Configured paths of movement (figure-eight, vertical loop, and angled rotation).",
  },
  {
    src: patentFigure4,
    alt: "Patent Figs. 9–11 — sensor assembly, axes, and processor display",
    caption:
      "Figs. 9–11 — Sensor assembly on X, Y, and Z axes with processor and visual display.",
  },
];

const validationPartners = [
  {
    name: "University of Miami",
    detail:
      "The first prototype was reviewed under an institutional validation protocol in the Department of Kinesiology and Sport Sciences (Dr. Joseph F. Signorile, Ph.D.). University correspondence described the device as capable of measuring kinetics along the central axes of the ankle and supporting diagnosis and training with three-dimensional motion tracking. Expanded multi-site trials are planned pending research funding.",
  },
  {
    name: "University of Saint Augustine for Health Sciences",
    detail:
      "Director of Research Vibhor Agrawal, Ph.D. (Miami, FL) engaged in 2021 to review the technology and explore future collaboration on device characterization and clinical research.",
  },
  {
    name: "Suffolk University — MBA Experiential Intensive",
    detail:
      "Multiple MBA 741 student teams completed capstone business analyses for Free Joint Motion through The Austral Group, covering market entry, sports-medicine device landscape, FDA considerations, and strategic partnerships (2022).",
    documents: [
      {
        label: "MBA 741 Team 1 — market analysis and recommendations (presentation)",
        href: MBA_DOCUMENTS.team1Presentation,
      },
      {
        label: "MBA 741 Team 1 — consulting report",
        href: MBA_DOCUMENTS.team1Report,
      },
      {
        label: "MBA 741 Team 3 — U.S. market entry and competitive landscape (presentation)",
        href: MBA_DOCUMENTS.team3Presentation,
      },
      {
        label: "MBA 741 Team 3 — final report",
        href: MBA_DOCUMENTS.team3Report,
      },
    ],
  },
  {
    name: "Henley Business School — Executive MBA",
    detail:
      "Joint global mission engagement connecting international executive leadership with the Multi-Ax-Sys roadmap.",
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
            aria-label="Multi-Ax-Sys device demonstration"
          >
            <source src={multiAxSysVideo} type="video/mp4" />
          </video>
        </div>

        <p className={styles.elevator}>
          The <strong>Multi-Ax-Sys</strong> is a semi-open, multi-axis leg–ankle–foot system
          designed to support, guide, and resist natural foot motion or gestures—minimizing inappropriate
          external forces while enabling multi-planar motion. Built on decades of
          biomechanical research and a foundational U.S. patent, it targets strengthening,
          rehabilitation, and clinical assessment of the lower limb kinetic chain.
        </p>

        <section className={styles.section}>
          <h4 className={styles.sectionLabel}>Development timeline</h4>
          <ol className={styles.timeline}>
            {developmentTimeline.map((entry) => (
              <li key={entry.period} className={styles.timelineItem}>
                <span className={styles.timelinePeriod}>{entry.period}</span>
                <p className={styles.timelineDetail}>{entry.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h4 className={styles.sectionLabel}>Patent foundation</h4>
          <p className={styles.body}>
            The core technology originates from the{" "}
            <a
              className={styles.inlineLink}
              href={PATENT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leg-Ankle-Foot Exercise Assembly
            </a>{" "}
            (U.S. Patent{" "}
            <a
              className={styles.inlineLink}
              href={PATENT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {PATENT_NUMBER}
            </a>
            ), invented by Luis Alberto Commisso. Unlike conventional single-exercise devices with
            complicated yet limited mechanics, this assembly directs the foot, ankle, and lower leg
            through a plurality of configured <em>paths of movement</em>—rotating relative to multiple
            axes—while resistance is generated by the user&apos;s own effort rather than an external motor.
          </p>
          <dl className={styles.patentMeta}>
            {patentDetails.map((item) => (
              <div key={item.label} className={styles.patentMetaRow}>
                <dt className={styles.patentMetaLabel}>{item.label}</dt>
                <dd className={styles.patentMetaValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.patentAbstract}>
            <h5 className={styles.patentAbstractTitle}>Abstract</h5>
            <p className={styles.body}>{PATENT_ABSTRACT}</p>
            <p className={styles.patentAbstractSource}>
              Source:{" "}
              <a
                className={styles.inlineLink}
                href={PATENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Patents — {PATENT_NUMBER}
              </a>
            </p>
          </div>
          <blockquote className={styles.patentQuote}>
            <p>
              &ldquo;The present invention is an exercise assembly that targets specific parts of the
              body, including the legs, ankle, and foot… The assembly provides resistance to the
              user&apos;s movements to improve strength and performance… designed to be used with the
              user&apos;s own movements, rather than relying on an external motor or driver.&rdquo;
            </p>
            <footer>— U.S. Patent {PATENT_NUMBER}</footer>
          </blockquote>
          <p className={styles.body}>
            The invention addresses a gap in conventional equipment: most known devices cannot
            perform beneficial, versatile exercise across the different muscle groupings, joints, and
            related structures of the lower leg and foot in an effective manner. The support structure
            moves relative to a base along defined paths, with adjustable weighting to match the
            movement being trained.
          </p>
          <div className={styles.patentFigureGrid}>
            {patentFigures.map((figure) => (
              <figure key={figure.alt} className={styles.figure}>
                <img
                  className={styles.patentFigure}
                  src={figure.src}
                  alt={figure.alt}
                  loading="lazy"
                />
                <figcaption className={styles.figureCaption}>{figure.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h4 className={styles.sectionLabel}>Overview</h4>
          <p className={styles.body}>
            Multi-Ax-Sys extends the patented concept into a bio-functional platform that allows
            precise support, guidance, and resistance across multiple axes and sliding planes—adapting
            instantaneously to dynamic foot motion. The system can selectively lock or release
            participation of synergistic joints (knee, tibia–fibular complex, ankle, and foot segments)
            so clinicians and researchers can train or measure integrated kinematics rather than
            isolating the ankle as a single hinge.
          </p>
          <p className={styles.body}>
            Resistance modes include isometric, isotonic, and natural isokinetic torque. Integrated
            sensing supports position, speed, acceleration, and three-dimensional spatial
            displacement—aligning with electro-goniometry and kinetic analysis used during prototype
            development.
          </p>
        </section>

        <section className={styles.section}>
          <h4 className={styles.sectionLabel}>Validation & academic engagement</h4>
          <p className={styles.body}>
            The prototype has been presented for validation studies at several universities and
            institutions. Early work established institutional review and laboratory testing
            frameworks; expanded trials across partner sites are planned as research funding becomes
            available.
          </p>
          <ul className={styles.partnerList}>
            {validationPartners.map((partner) => (
              <li key={partner.name} className={styles.partnerItem}>
                <h5 className={styles.partnerName}>{partner.name}</h5>
                <p className={styles.body}>{partner.detail}</p>
                {partner.documents?.length > 0 && (
                  <ul className={styles.documentList}>
                    {partner.documents.map((doc) => (
                      <li key={doc.href}>
                        <a
                          className={styles.documentLink}
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {doc.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <p className={styles.bodyMuted}>
            Suffolk deliverables (Teams 1, 3, 5, and 7) included consulting reports and final
            presentations on market analysis, competitive positioning, and partnership strategy—
            supporting the transition from prototype to clinical and commercial pathways.
          </p>
        </section>

        <section className={styles.section}>
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
        </section>

        <p className={styles.vision}>
          We envision Multi-Ax-Sys as a cornerstone of lower-limb rehabilitation and kinetic
          therapy—giving health professionals technology that respects neurophysiological control,
          multi-axis foot function, and the real demands of gait, sport, and recovery.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryBtn} to="/technologies">
            Explore the technology
          </Link>
          <Link className={styles.secondaryBtn} to="/publications">
            Research observations
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
