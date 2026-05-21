import React, { useState } from "react";
import { NavLink } from "react-router";
import * as styles from "./Header.module.scss";
import logo from "../img/freejointmotion_logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const mainLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  const subLinkClass = ({ isActive }) =>
    isActive ? `${styles.subLink} ${styles.subActive}` : styles.subLink;

  const menuLinkClass = ({ isActive }) =>
    isActive ? `${styles.menuLink} ${styles.menuActive}` : styles.menuLink;

  const contactBtnClass = ({ isActive }) =>
    isActive ? `${styles.contactBtn} ${styles.contactBtnActive}` : styles.contactBtn;

  const menuContactBtnClass = ({ isActive }) =>
    isActive
      ? `${styles.menuContactBtn} ${styles.menuContactBtnActive}`
      : styles.menuContactBtn;

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <NavLink to="/" onClick={closeMenu}>
            <img className={styles.logo} src={logo} alt="Free Joint Motion" />
          </NavLink>
        </h1>

        <nav className={styles.nav} aria-label="Main">
          <NavLink to="/" end className={mainLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={mainLinkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/sectors" className={mainLinkClass} onClick={closeMenu}>
            Sectors
          </NavLink>
          <NavLink to="/knowledge" className={mainLinkClass} onClick={closeMenu}>
            Knowledge
          </NavLink>
          <NavLink to="/technologies" className={mainLinkClass} onClick={closeMenu}>
            Technologies
          </NavLink>
          <NavLink to="/projects" className={mainLinkClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={contactBtnClass} onClick={closeMenu}>
            Contact
          </NavLink>
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

          <nav
            className={`${styles.menuNav} ${menuOpen ? styles.showMenu : ""}`}
            aria-label="Mobile"
          >
            <NavLink to="/" end className={menuLinkClass} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={menuLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/sectors" className={menuLinkClass} onClick={closeMenu}>
              Sectors
            </NavLink>
            <NavLink to="/knowledge" className={menuLinkClass} onClick={closeMenu}>
              Knowledge
            </NavLink>
            <NavLink to="/technologies" className={menuLinkClass} onClick={closeMenu}>
              Technologies
            </NavLink>
            <NavLink to="/projects" className={menuLinkClass} onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink to="/services" className={menuLinkClass} onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/news" className={menuLinkClass} onClick={closeMenu}>
              News
            </NavLink>
            <NavLink to="/publications" className={menuLinkClass} onClick={closeMenu}>
              Publications
            </NavLink>
            <NavLink to="/impact" className={menuLinkClass} onClick={closeMenu}>
              Impact
            </NavLink>
            <div className={styles.menuCta}>
              <NavLink to="/contact" className={menuContactBtnClass} onClick={closeMenu}>
                Contact us
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <header className={styles.subHeader}>
        <nav className={styles.subNav} aria-label="Secondary">
          <NavLink to="/services" className={subLinkClass} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/news" className={subLinkClass} onClick={closeMenu}>
            News
          </NavLink>
          <NavLink to="/publications" className={subLinkClass} onClick={closeMenu}>
            Publications
          </NavLink>
          <NavLink to="/impact" className={subLinkClass} onClick={closeMenu}>
            Impact
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
