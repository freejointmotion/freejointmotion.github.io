import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router';
import * as styles from './HeroSection.module.scss';
import heroVideo from 'url:../videos/hero.mp4';


const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed, user interaction required:", error);
      });
    }
  }, []);

  const ctaClick = (path) => {
    navigate('/about');
  };

  return (
    <section className={styles.hero}>
      <video ref={videoRef} autoPlay muted loop playsInline className={styles.bgVideo}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.bg}></div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Movement without limits. Performance without External Biases.</h1>
        <p className={styles.subtitle}>Innovating biomechanical medical devices for rehabilitation and performance.</p>
        <button className={styles.cta} onClick={ctaClick}>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;