import React from 'react';
import styles from './index.css';
import NavBar from '../headers/NavBar';

const Header = () => (
  <header>
    <div className={ styles.navBar }>
      <NavBar />
    </div>
    <div
      className={styles.navBarFakeTop}
    />
  </header>
);

export default Header
