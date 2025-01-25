import React from "react";
import { NavLink, useNavigate } from 'react-router';
import * as styles from './Header.module.scss';
import logo from '../img/freejointmotion_logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <img className={styles.logo} src={logo} alt="Free Joint Motion" onClick={() => navigate('/')} />
          Free Joint Motion
        </h1>

        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/">Home</NavLink>
          <NavLink className={styles.link} to="/about">About</NavLink>
          <NavLink className={styles.link} to="/sectors">Sectors</NavLink>
          <NavLink className={styles.link} to="/knowledge">Knowledge</NavLink>
          <NavLink className={styles.link} to="/technologies">Technologies</NavLink>
          <NavLink className={styles.link} to="/projects">Projects</NavLink>
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
            <NavLink className={styles.menuLink} to="/services">Services</NavLink>
            <NavLink className={styles.menuLink} to="/news">News</NavLink>
            <NavLink className={styles.menuLink} to="/publications">Publications</NavLink>
            <NavLink className={styles.menuLink} to="/impact">Impact</NavLink>
            <NavLink className={styles.menuLink} to="/contact">Contact</NavLink>
          </nav>
        </div>

      </header>

      <header className={styles.subHeader}>
        <nav className={styles.subNav}>
          <NavLink className={styles.subLink} to="/services">Services</NavLink>
          <NavLink className={styles.subLink} to="/news">News</NavLink>
          <NavLink className={styles.subLink} to="/publications">Publications</NavLink>
          <NavLink className={styles.subLink} to="/impact">Impact</NavLink>
          <NavLink className={styles.subLink} to="/contact">Contact</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;