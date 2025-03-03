import React from "react";
import * as styles from "./Sectors.module.scss";

const Sectors = () => {
  return (
    <section className={styles.sectors}>
      {/* <div className={styles.bg}></div> */}

      <div className={styles.container}>
        <h2 className={styles.title}>Our Sectors</h2>
        <p className={styles.description}>
          At Free Joint Motion, we are committed to providing cutting-edge biomechanical solutions in the following key sectors:
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Mobility</h3>
            <p>Enhancing movement capabilities for individuals with various needs, ensuring better quality of life.</p>
          </div>
          
          <div className={styles.card}>
            <h3>Physical Activity & Sports</h3>
            <p>Optimizing athletic performance and injury prevention through advanced biomechanical solutions.</p>
          </div>
          
          <div className={styles.card}>
            <h3>Rehabilitation</h3>
            <p>Innovative devices aiding recovery, rehabilitation, and functional training for individuals post-injury.</p>
          </div>
          
          <div className={styles.card}>
            <h3>Personal Autonomy</h3>
            <p>Supporting individuals in regaining independence with tailored biomechanical solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;