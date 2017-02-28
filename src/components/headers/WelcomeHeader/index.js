import React, { PropTypes } from 'react';
import HeroImages from '../HeroImages';
import styles from './index.css';

const WelcomeHeader = ({ head }) => (
  <header
    className={styles.welcomeHeader}
  >
    <div className={styles.banner}>
      <HeroImages autoplayInteval={3000}
                  links={head.hero.images}
                  title={head.hero.title}
                  random={true}
      />
    </div>
    <div style={{margin: "0 auto",
      cursor: "pointer",
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'uppercase'
    }}>
    </div>
  </header>
);

WelcomeHeader.propTypes = {
  head: PropTypes.object.isRequired
};

export default WelcomeHeader
