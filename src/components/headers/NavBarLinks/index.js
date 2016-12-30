import React from "react";
import { Link } from 'react-router';
import styles from './index.css';

const NavBarLinks = ({ isVisible }) => (
  <ul
    className={`${styles.mainNav} ${isVisible ? styles.visible : ''}`}
  >
    <li>
      <Link
        className={ styles.link }
        to="/"
      >
        { "Home" }
      </Link>
    </li>
    <li>
      <Link
        className={ styles.link }
        to="/locatie"
      >
        { "Locatie" }
      </Link>
    </li>
    <li>
      <Link
        className={ styles.link }
        to="/contact"
      >
        { "Contact" }
      </Link>
    </li>
  </ul>

);

NavBarLinks.propTypes = {
  isVisible: React.PropTypes.bool.isRequired
};

export default NavBarLinks;
