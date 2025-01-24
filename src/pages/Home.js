import React from "react";
import HeroSection from "../components/HeroSection";
import * as styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <HeroSection />
      
    </section>
  );
};

export default Home;