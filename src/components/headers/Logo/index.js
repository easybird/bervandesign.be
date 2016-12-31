import React from 'react';
import styles from './index.css';

const Logo = ({ height, margin }) => (
  <div
    className={styles.logo}
    style={{ margin: margin }}
  >
    <img
      height={height}
      src="/assets/img/logo/logo_placeholder.png"></img>
  </div>);

Logo.propTypes = {
  height: React.PropTypes.string.isRequired,
  margin: React.PropTypes.string.isRequired
};

export default Logo;
