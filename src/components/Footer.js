import React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Free Joint Motion. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;