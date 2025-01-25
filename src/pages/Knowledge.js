import React from "react";
import * as styles from "./Knowledge.module.scss";
import knowledgeImg1 from "../img/knowledge-1.png";
import knowledgeImg2 from "../img/knowledge-2.png";
import knowledgeImg3 from "../img/knowledge-3.png";
import knowledgeImg4 from "../img/knowledge-4.png";
import knowledgeImg5 from "../img/knowledge-5.png";
import FloatingParticles from '../components/FloatingParticles';

const Knowledge = () => {
  return (
    <section className={styles.knowledge}>

      <div className={styles.bg}>
        <h2 className={styles.title}>Knowledge Areas</h2>
        <p className={styles.intro}>
          At Free Joint Motion LLC, our scientific knowledge serves as the foundation of our competitive advantage. We apply this knowledge across key domains to analyze the relationship between the human body, products, environments, and services.
        </p>
      </div>

      <div className={styles.flex}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>3D Anthropometry</h3>
            <p>
              We analyze human body metrics and forms to enhance the design and evaluation of products and services tailored to specific population groups.
            </p>
          </div>
          <div className={styles.image}>
            <img src={knowledgeImg1} alt="3D Anthropometry" />
          </div>
        </div>
      </div>
      
      <div className={styles.flex}>
        <FloatingParticles />
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Human Factors</h3>
            <p>
              Understanding human capabilities and limitations to design products and interfaces that ensure usability, safety, and comfort.
            </p>
          </div>
          <div className={styles.image}>
            <img src={knowledgeImg3} alt="3D Anthropometry" />
          </div>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Digital Health</h3>
            <p>
              Leveraging digital tools and data analysis to improve processes and enhance patient experiences.
            </p>
          </div>
          <div className={styles.image}>
            <img src={knowledgeImg2} alt="3D Anthropometry" />
          </div>
        </div>
      </div>

      <div className={styles.flex}>
        <FloatingParticles />
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>User Experience</h3>
            <p>
              Developing evaluation criteria to ensure satisfying and efficient interactions between users and products through participatory design methods.
            </p>
          </div>
          <div className={styles.image}>
            <img src={knowledgeImg4} alt="3D Anthropometry" />
          </div>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Biomedical Engineering</h3>
            <p>
              Applying biomechanical analysis techniques to support the development of tools and devices and functional assessments.
            </p>
          </div>
          <div className={styles.image}>
            <img src={knowledgeImg5} alt="3D Anthropometry" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;