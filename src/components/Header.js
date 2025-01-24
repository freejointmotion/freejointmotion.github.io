import React from "react";
import { NavLink, useNavigate } from 'react-router';
import * as styles from './Header.module.scss';
import logo from '../img/freejointmotion_logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <img className={styles.logo} src={logo} alt="Free Joint Motion" onClick={() => navigate('/')} />
        Free Joint Motion
      </h1>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/">Home</NavLink>
        <NavLink className={styles.link} to="/about">About</NavLink>
        <NavLink className={styles.link} to="/products">Products</NavLink>
        <NavLink className={styles.link} to="/contact">Contact</NavLink>
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
          <NavLink className={styles.menuLink} to="/products" onClick={() => handleNavClick('/products')}>Products</NavLink>
          <NavLink className={styles.menuLink} to="/contact" onClick={() => handleNavClick('/contact')}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;