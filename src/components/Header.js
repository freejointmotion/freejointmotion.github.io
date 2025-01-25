import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router';
import * as styles from './Header.module.scss';
import logo from '../img/freejointmotion_logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    setMenuOpen(false);  // Close the menu
    navigate(path);      // Navigate to the path
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <img className={styles.logo} src={logo} alt="Free Joint Motion" onClick={() => handleNavClick('/')} />
          Free Joint Motion
        </h1>

        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/" onClick={() => handleNavClick('/')}>Home</NavLink>
          <NavLink className={styles.link} to="/about" onClick={() => handleNavClick('/about')}>About</NavLink>
          <NavLink className={styles.link} to="/sectors" onClick={() => handleNavClick('/sectors')}>Sectors</NavLink>
          <NavLink className={styles.link} to="/knowledge" onClick={() => handleNavClick('/knowledge')}>Knowledge</NavLink>
          <NavLink className={styles.link} to="/technologies" onClick={() => handleNavClick('/technologies')}>Technologies</NavLink>
          <NavLink className={styles.link} to="/projects" onClick={() => handleNavClick('/projects')}>Projects</NavLink>
        </nav>

        <div className={styles.menu}>
          <input
            type="checkbox"
            id="menu-toggle"
            className={styles.menuToggle}
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
          <label htmlFor="menu-toggle" className={styles.menuIcon} aria-label="Menu">
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </label>

          <nav className={`${styles.menuNav} ${menuOpen ? styles.showMenu : ""}`}>
            <NavLink className={styles.menuLink} to="/" onClick={() => handleNavClick('/')}>Home</NavLink>
            <NavLink className={styles.menuLink} to="/about" onClick={() => handleNavClick('/about')}>About</NavLink>
            <NavLink className={styles.menuLink} to="/sectors" onClick={() => handleNavClick('/sectors')}>Sectors</NavLink>
            <NavLink className={styles.menuLink} to="/knowledge" onClick={() => handleNavClick('/knowledge')}>Knowledge</NavLink>
            <NavLink className={styles.menuLink} to="/technologies" onClick={() => handleNavClick('/technologies')}>Technologies</NavLink>
            <NavLink className={styles.menuLink} to="/projects" onClick={() => handleNavClick('/projects')}>Projects</NavLink>
            <NavLink className={styles.menuLink} to="/services" onClick={() => handleNavClick('/services')}>Services</NavLink>
            <NavLink className={styles.menuLink} to="/news" onClick={() => handleNavClick('/news')}>News</NavLink>
            <NavLink className={styles.menuLink} to="/publications" onClick={() => handleNavClick('/publications')}>Publications</NavLink>
            <NavLink className={styles.menuLink} to="/impact" onClick={() => handleNavClick('/impact')}>Impact</NavLink>
            <NavLink className={styles.menuLink} to="/contact" onClick={() => handleNavClick('/contact')}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <header className={styles.subHeader}>
        <nav className={styles.subNav}>
          <NavLink className={styles.subLink} to="/services" onClick={() => handleNavClick('/services')}>Services</NavLink>
          <NavLink className={styles.subLink} to="/news" onClick={() => handleNavClick('/news')}>News</NavLink>
          <NavLink className={styles.subLink} to="/publications" onClick={() => handleNavClick('/publications')}>Publications</NavLink>
          <NavLink className={styles.subLink} to="/impact" onClick={() => handleNavClick('/impact')}>Impact</NavLink>
          <NavLink className={styles.subLink} to="/contact" onClick={() => handleNavClick('/contact')}>Contact</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;