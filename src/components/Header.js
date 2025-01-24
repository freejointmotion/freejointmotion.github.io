import React from "react";
import { NavLink, useNavigate } from 'react-router';
import * as styles from './Header.module.scss';
import logo from '../img/freejointmotion_logo.svg';

const Header = () => {
  const navigate = useNavigate();

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
    </header>
  );
};

export default Header;