import React from 'react';
import styles from './index.css';
import positioning from '../../layouts/positioning.css';
import Pointer from '../headers/Pointer';

const Footer = ({ scrollTo, hide }) => (
  <footer className={ styles.footer }>
    <div className={positioning.centerAbsolute}>
      <Pointer
        scrollTo={scrollTo}
        hide={hide}
      />
    </div>
    <div className={ styles.companyTag }>
      <a
        href={ "http://easybird.be" }
        target="_blank"
        className={ styles.phenomicReference }
      >
        <span className={ styles.phenomicReferenceName }>
          {  `Made by Easybird.be` }
        </span>
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  scrollTo: React.PropTypes.string,
  hide: React.PropTypes.bool
};

export default Footer
