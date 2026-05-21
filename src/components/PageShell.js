import React from "react";
import * as styles from "./PageShell.module.scss";

const PageShell = ({ title, intro, children, narrow = false }) => {
  return (
    <section className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <h2 className={styles.title}>{title}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
      </header>
      <div className={`${styles.content} ${narrow ? styles.narrow : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default PageShell;
