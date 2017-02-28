import React from 'react';
import styles from './index.css';

const Footer = () => (
  <footer className={ styles.footer }>
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
)

export default Footer
