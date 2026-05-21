import React from "react";
import * as styles from "./Knowledge.module.scss";
import knowledgeImg1 from "../img/knowledge-1.png";
import knowledgeImg2 from "../img/knowledge-2.png";
import knowledgeImg3 from "../img/knowledge-3.png";
import knowledgeImg4 from "../img/knowledge-4.png";
import knowledgeImg5 from "../img/knowledge-5.png";
const knowledgeAreas = [
  {
    title: "3D Anthropometry",
    description:
      "We analyze human body metrics and forms to enhance the design of products tailored to specific criteria.",
    image: knowledgeImg1,
    align: "left",
  },
  {
    title: "Human Factors",
    description:
      "Understanding human capabilities and limitations to design products and interfaces that ensure usability, safety, and comfort.",
    image: knowledgeImg3,
    align: "right",
  },
  {
    title: "Digital Health",
    description:
      "Leveraging digital tools and data analysis to improve processes and enhance patient experiences.",
    image: knowledgeImg2,
    align: "left",
  },
  {
    title: "User Experience",
    description:
      "Developing evaluation criteria to ensure satisfying and efficient interactions between users and products through participatory design methods.",
    image: knowledgeImg4,
    align: "right",
  },
  {
    title: "Biomedical Engineering",
    description:
      "Applying biomechanical analysis techniques to support the development of tools and devices and functional assessments.",
    image: knowledgeImg5,
    align: "left",
  },
];

const Knowledge = () => {
  return (
    <section className={styles.knowledge}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.title}>Knowledge Areas</h2>
          <p className={styles.intro}>
            At Free Joint Motion LLC, our scientific knowledge serves as the foundation of our competitive advantage. We apply this knowledge across key domains to analyze the relationship between the human body, products, environments, and services.
          </p>
        </div>
      </header>

      <div className={styles.areas}>
        {knowledgeAreas.map((area) => (
          <article
            key={area.title}
            className={`${styles.area} ${styles[`align${area.align}`]}`}
            style={{ backgroundImage: `url(${area.image})` }}
            aria-labelledby={`knowledge-${area.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div className={styles.areaOverlay} aria-hidden="true" />
            <div className={styles.areaContent}>
              <h3
                id={`knowledge-${area.title.replace(/\s+/g, "-").toLowerCase()}`}
                className={styles.areaTitle}
              >
                {area.title}
              </h3>
              <p className={styles.areaText}>{area.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Knowledge;
